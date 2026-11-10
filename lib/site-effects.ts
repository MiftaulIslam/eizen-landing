import { $$, prefersCalm, type Scope } from "./scope";

export function startSite(scope: Scope) {
  const calm = prefersCalm();

  // Header turns solid once the page has moved.
  const top = document.querySelector<HTMLElement>(".top");
  if (!top) return;
  const fixed = top.classList.contains("always");
  const onScroll = () => top.classList.toggle("solid", fixed || scrollY > 24);
  scope.listen(window, "scroll", onScroll, { passive: true });
  onScroll();

  // Phone menu.
  const menu = document.querySelector<HTMLElement>(".menu-btn");
  if (menu) {
    scope.listen(menu, "click", () => {
      const open = top.classList.toggle("open-menu");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "Close" : "Menu";
      document.body.style.overflow = open ? "hidden" : "";
    });
    scope.onStop(() => {
      document.body.style.overflow = "";
    });
  }

  // Product panel: hovering a link changes the picture.
  const panel = document.querySelector<HTMLElement>(".mega");
  const opener = document.querySelector<HTMLElement>("[data-mega]");
  if (panel && opener) {
    let timer = 0;
    const setOpen = (open: boolean) => {
      clearTimeout(timer);
      panel.classList.toggle("open", open);
      opener.setAttribute("aria-expanded", String(open));
      top.classList.toggle("solid", fixed || open || scrollY > 24);
    };
    const later = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => setOpen(false), 160);
    };
    scope.onStop(() => clearTimeout(timer));
    scope.listen(opener, "mouseenter", () => setOpen(true));
    scope.listen(opener, "click", () => setOpen(!panel.classList.contains("open")));
    scope.listen(opener, "mouseleave", later);
    scope.listen(panel, "mouseenter", () => clearTimeout(timer));
    scope.listen(panel, "mouseleave", later);
    scope.listen<KeyboardEvent>(window, "keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
    const pics = $$(".mega-pic img", panel);
    $$(".mega-list a", panel).forEach((link, index) => {
      const show = () => pics.forEach((pic, i) => pic.classList.toggle("on", i === index));
      scope.listen(link, "mouseenter", show);
      scope.listen(link, "focus", show);
    });
  }

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

  // Auto-changing pictures, with captions that can be clicked.
  $$("[data-cycle]").forEach((cycle) => {
    const every = Number(cycle.dataset.cycle) || 4200;
    cycle.style.setProperty("--every", `${every}ms`);
    const slides = $$(".slides > *", cycle);
    const caps = $$(".cycle-caps button", cycle);
    let index = 0;
    const show = (next: number) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("on", i === index));
      caps.forEach((cap, i) => {
        cap.classList.remove("on");
        if (i === index) {
          void cap.offsetWidth;
          cap.classList.add("on");
        }
      });
    };
    show(0);
    if (calm) {
      caps.forEach((cap, i) => scope.listen(cap, "click", () => show(i)));
      return;
    }
    let timer = window.setInterval(() => show(index + 1), every);
    scope.onStop(() => clearInterval(timer));
    const restart = () => {
      clearInterval(timer);
      timer = window.setInterval(() => show(index + 1), every);
    };
    caps.forEach((cap, i) =>
      scope.listen(cap, "click", () => {
        show(i);
        restart();
      }),
    );
    scope.listen(cycle, "mouseenter", () => clearInterval(timer));
    scope.listen(cycle, "mouseleave", restart);
  });

  // The three bars change one at a time, top to bottom.
  $$("[data-bars]").forEach((group) => {
    const bars = $$(".bar", group);
    const state = bars.map(() => 0);
    bars.forEach((bar) => bar.querySelector("img")?.classList.add("on"));
    if (calm) return;
    let turn = 0;
    scope.every(() => {
      const pics = $$("img", bars[turn]);
      if (pics.length > 1) {
        pics[state[turn]].classList.remove("on");
        state[turn] = (state[turn] + 1) % pics.length;
        pics[state[turn]].classList.add("on");
      }
      turn = (turn + 1) % bars.length;
    }, 2600);
  });

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
