import { $$, prefersCalm, type Scope } from "./scope";

export function startSite(scope: Scope) {
  const calm = prefersCalm();

  // The header (solid bar, Product panel, phone drawer) lives in lib/effects/nav.ts.

  // Entrances, once each.
  const risen = scope.observer(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          risen.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  $$(".rise").forEach((element) => risen.observe(element));

  // Video plays only while it can be seen, and never for people who asked for less motion.
  const videos = $$<HTMLVideoElement>("video[data-auto]");
  const seen = scope.observer(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !calm && video.dataset.paused !== "1") {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    },
    { threshold: 0.08 },
  );
  videos.forEach((video) => {
    // React sets muted as a property only after hydration, and autoplay depends on it.
    video.muted = true;
    seen.observe(video);
  });
  scope.onStop(() => videos.forEach((video) => video.pause()));
  $$("[data-video-toggle]").forEach((button) => {
    const video = button.parentElement?.querySelector("video");
    if (!video) return;
    if (calm) {
      button.textContent = "Play";
      video.dataset.paused = "1";
    }
    scope.listen(button, "click", () => {
      const paused = video.dataset.paused === "1";
      video.dataset.paused = paused ? "0" : "1";
      button.textContent = paused ? "Pause" : "Play";
      if (paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  });

  // The picture carousel ([data-cycle]) and slanted picture frames ([data-bars]) live in lib/effects/home.ts.

  // Hover index: the picture follows the pointer with a little lag.
  const peek = document.querySelector<HTMLElement>(".peek");
  if (peek && matchMedia("(pointer: fine)").matches) {
    const pics = $$("img", peek);
    let x = 0;
    let y = 0;
    let goalX = 0;
    let goalY = 0;
    let frame = 0;
    const tick = () => {
      x += (goalX - x) * 0.16;
      y += (goalY - y) * 0.16;
      peek.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = Math.abs(goalX - x) + Math.abs(goalY - y) > 0.4 ? requestAnimationFrame(tick) : 0;
    };
    scope.onStop(() => cancelAnimationFrame(frame));
    $$("[data-peek]").forEach((link) => {
      scope.listen<PointerEvent>(link, "pointerenter", (event) => {
        goalX = x = Math.min(innerWidth - peek.offsetWidth - 16, event.clientX + 24);
        goalY = y = Math.min(innerHeight - peek.offsetHeight - 16, Math.max(80, event.clientY - peek.offsetHeight / 2));
        pics.forEach((pic) => pic.classList.toggle("on", pic.dataset.key === link.dataset.peek));
        peek.classList.add("on");
        peek.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      scope.listen<PointerEvent>(link, "pointermove", (event) => {
        goalX = Math.min(innerWidth - peek.offsetWidth - 16, event.clientX + 24);
        goalY = Math.min(innerHeight - peek.offsetHeight - 16, Math.max(80, event.clientY - peek.offsetHeight / 2));
        frame ||= requestAnimationFrame(tick);
      });
      scope.listen(link, "pointerleave", () => peek.classList.remove("on"));
    });
  }

  // Statements light up word by word as they pass.
  const statements = $$("[data-words]");
  if (statements.length > 0 && !calm) {
    const prepared = statements.map((statement) => {
      const words = (statement.textContent ?? "").trim().split(/\s+/);
      statement.innerHTML = words.map((word) => `<span class="w">${word}</span>`).join(" ");
      return { statement, words: $$(".w", statement) };
    });
    const paint = () => {
      for (const { statement, words } of prepared) {
        const box = statement.getBoundingClientRect();
        const start = innerHeight * 0.82;
        const span = box.height + innerHeight * 0.34;
        const lit = Math.round(words.length * Math.min(1, Math.max(0, (start - box.top) / span)));
        words.forEach((word, i) => word.classList.toggle("on", i < lit));
      }
    };
    scope.listen(window, "scroll", paint, { passive: true });
    scope.listen(window, "resize", paint);
    paint();
  }

  // Steps: the pinned picture follows whichever step is in the middle of the screen.
  $$("[data-steps]").forEach((group) => {
    const pics = $$(".pics > *", group);
    const steps = $$(".step", group);
    const show = (index: number) => {
      pics.forEach((pic, i) => pic.classList.toggle("on", i === index));
      steps.forEach((step, i) => step.classList.toggle("on", i === index));
    };
    show(0);
    const watch = scope.observer(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(steps.indexOf(entry.target as HTMLElement));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    steps.forEach((step) => watch.observe(step));
  });
}
