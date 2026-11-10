import { $$, prefersCalm, type Scope } from "../scope";
import { shown } from "./nav";

// Content fades in and rises a little the first time it scrolls into view.
// Opt in with data-reveal on any element; app/styles/reveal.css hides it before first paint, and
// only when scripts are on. Every section after the first also gets it on the direct children of
// its .wrap, but only for children that start below the screen, so nothing visible ever blinks.
// data-reveal-off on a section or element keeps it out of the automatic default. Elements that
// use .rise, or sit in the first section of the page, are left alone.
const SKIP = ".rise, .rise *, [data-reveal-off], [data-reveal-off] *";
const RUN_MS = 760;

export function start(scope: Scope) {
  const main = $$("main").find(shown);
  const first = main?.firstElementChild ?? null;
  const exempt = (element: Element) => element.matches(SKIP) || (first?.contains(element) ?? false);
  const show = (element: Element) => element.classList.add("revealed");

  const listed = $$("[data-reveal]:not(.revealed)").filter(shown);
  if (prefersCalm()) {
    listed.forEach(show);
    return;
  }

  // The automatic default: direct children of each later section's .wrap.
  if (main) {
    for (const section of [...main.children].slice(1)) {
      if (section.matches("[data-reveal-off]")) continue;
      const box = section.querySelector(".wrap") ?? section;
      for (const child of box.children) {
        if (child.hasAttribute("data-reveal") || exempt(child) || child.querySelector(".rise")) continue;
        const position = getComputedStyle(child).position;
        if (position !== "static" && position !== "relative") continue;
        const rect = child.getBoundingClientRect();
        if (rect.height === 0 || rect.top < innerHeight) continue;
        child.setAttribute("data-reveal", "auto");
        listed.push(child as HTMLElement);
      }
    }
  }

  const pending = new Set<Element>();
  const timers = new Set<number>();
  const running = new Set<HTMLElement>();
  // Next keeps a page's DOM when it is left, so anything mid-way finishes in its final state.
  scope.onStop(() => {
    timers.forEach((id) => clearTimeout(id));
    running.forEach((el) => el.classList.remove("revealing"));
  });

  const run = (batch: Element[]) => {
    batch.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    batch.forEach((element, index) => {
      pending.delete(element);
      watch.unobserve(element);
      const el = element as HTMLElement;
      const delay = Math.min(index, 4) * 80;
      el.style.setProperty("--rd", `${delay}ms`);
      el.classList.add("revealing", "revealed");
      running.add(el);
      const id = window.setTimeout(() => {
        timers.delete(id);
        running.delete(el);
        el.classList.remove("revealing");
        el.style.removeProperty("--rd");
      }, RUN_MS + delay);
      timers.add(id);
    });
  };
  // Anything the reader has already scrolled past (a reload halfway down, a hash link) shows at once.
  const showPassed = () => {
    for (const element of pending) {
      if (element.getBoundingClientRect().bottom <= 0) {
        pending.delete(element);
        watch.unobserve(element);
        show(element);
      }
    }
  };

  const watch = scope.observer(
    (entries) => {
      const batch = entries.filter((entry) => entry.isIntersecting && pending.has(entry.target)).map((entry) => entry.target);
      if (batch.length) run(batch);
      if (entries.some((entry) => !entry.isIntersecting && entry.boundingClientRect.bottom <= 0)) showPassed();
    },
    { rootMargin: "0px 0px -8% 0px" },
  );

  for (const element of listed) {
    if (exempt(element)) {
      show(element);
      continue;
    }
    pending.add(element);
    watch.observe(element);
  }
  showPassed();

  // Scroll restoration and fast jumps can carry elements past the screen without crossing it.
  let frame = 0;
  scope.listen(
    window,
    "scroll",
    () => {
      if (frame || pending.size === 0) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        showPassed();
      });
    },
    { passive: true },
  );
  scope.onStop(() => cancelAnimationFrame(frame));
}
