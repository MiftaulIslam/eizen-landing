import { $$, type Scope } from "../scope";

// The header: solid and floating once the page has moved, the Product panel, the phone drawer,
// and the sliding pill of every [data-nav-menu] (components/ui/NavMenu.tsx).
export function start(scope: Scope) {
  $$("[data-nav-menu]").filter(shown).forEach((menu) => pill(scope, menu));
  const top = $$(".top").find(shown);
  if (top) header(scope, top);
}

// Next keeps pages already visited in the document, hidden with display: none on their top
// elements, and shows them again on Back. Only the page on screen is wired up.
export const shown = (element: Element) => (element.closest("body > *") as HTMLElement | null)?.style.display !== "none";

function header(scope: Scope, top: HTMLElement) {
  const fixed = top.classList.contains("always");
  const panel = top.querySelector<HTMLElement>(".mega");
  const opener = top.querySelector<HTMLElement>("[data-mega]");
  let open = false;

  const paint = () => {
    const moved = scrollY > 24;
    top.classList.toggle("solid", fixed || open || moved);
    top.classList.toggle("float", moved);
  };
  // A page that opens already scrolled starts with the bar in place instead of shrinking into it.
  top.classList.add("still");
  paint();
  let frame = requestAnimationFrame(() => {
    frame = requestAnimationFrame(() => top.classList.remove("still"));
  });
  scope.onStop(() => cancelAnimationFrame(frame));
  scope.listen(window, "scroll", paint, { passive: true });

  // Phone drawer.
  const menu = top.querySelector<HTMLElement>(".menu-btn");
  const drawer = top.querySelector<HTMLElement>(".drawer");
  const setMenu = (next: boolean) => {
    if (!menu) return;
    top.classList.toggle("open-menu", next);
    menu.setAttribute("aria-expanded", String(next));
    menu.textContent = next ? "Close" : "Menu";
    document.body.style.overflow = next ? "hidden" : "";
  };
  if (menu) {
    scope.listen(menu, "click", () => setMenu(!top.classList.contains("open-menu")));
    // A link to the page already showing does not replace the header, so close it by hand.
    if (drawer) scope.listen(drawer, "click", (event) => (event.target as Element).closest("a") && setMenu(false));
    scope.onStop(() => setMenu(false));
  }

  // Product panel: opens on hover or click, and is reachable by keyboard right after its button.
  if (!panel || !opener) {
    scope.listen<KeyboardEvent>(window, "keydown", (event) => {
      if (event.key === "Escape" && top.classList.contains("open-menu")) {
        setMenu(false);
        menu?.focus();
      }
    });
    return;
  }
  const links = $$<HTMLAnchorElement>(".mega-list a", panel);
  const after = $$<HTMLElement>("a", opener.parentElement ?? top).find(
    (link) => opener.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING,
  );
  let timer = 0;
  let hoveredAt = 0;
  const setOpen = (next: boolean) => {
    clearTimeout(timer);
    if (next === open) return;
    open = next;
    panel.classList.toggle("open", open);
    opener.setAttribute("aria-expanded", String(open));
    paint();
  };
  const later = () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => setOpen(false), 160);
  };
  // A hidden page keeps its DOM, so it must not come back with the panel open.
  scope.onStop(() => setOpen(false));

  scope.listen<PointerEvent>(opener, "pointerenter", (event) => {
    if (event.pointerType !== "mouse") return;
    if (!open) hoveredAt = performance.now();
    setOpen(true);
  });
  // A click right after the hover opened it would close it again under the pointer.
  scope.listen(opener, "click", () => {
    if (open && performance.now() - hoveredAt < 400) return;
    setOpen(!open);
  });
  scope.listen<PointerEvent>(opener, "pointerleave", (event) => event.pointerType === "mouse" && later());
  scope.listen(panel, "pointerenter", () => clearTimeout(timer));
  scope.listen<PointerEvent>(panel, "pointerleave", (event) => event.pointerType === "mouse" && later());
  scope.listen(panel, "click", (event) => (event.target as Element).closest("a") && setOpen(false));
  scope.listen<PointerEvent>(document, "pointerdown", (event) => {
    if (open && !top.contains(event.target as Node)) setOpen(false);
  });
  scope.listen<FocusEvent>(top, "focusout", (event) => {
    if (open && !top.contains(event.relatedTarget as Node | null) && event.relatedTarget) setOpen(false);
  });

  scope.listen<KeyboardEvent>(opener, "keydown", (event) => {
    if (event.key === "ArrowDown" || (event.key === "Tab" && !event.shiftKey && open)) {
      event.preventDefault();
      setOpen(true);
      links[0]?.focus();
    }
  });
  scope.listen<KeyboardEvent>(panel, "keydown", (event) => {
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (index < 0) return;
    if (event.key === "Tab" && event.shiftKey && index === 0) {
      event.preventDefault();
      opener.focus();
    } else if (event.key === "Tab" && !event.shiftKey && index === links.length - 1 && after) {
      event.preventDefault();
      setOpen(false);
      after.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      links[(index + (event.key === "ArrowDown" ? 1 : links.length - 1)) % links.length].focus();
    }
  });
  scope.listen<KeyboardEvent>(window, "keydown", (event) => {
    if (event.key !== "Escape") return;
    if (open) {
      const inside = panel.contains(document.activeElement);
      setOpen(false);
      if (inside) opener.focus();
    } else if (top.classList.contains("open-menu")) {
      setOpen(false);
      setMenu(false);
      menu?.focus();
    }
  });

  // Hovering or focusing a link changes the picture.
  const pics = $$(".mega-pic img", panel);
  links.forEach((link, index) => {
    const show = () => pics.forEach((pic, i) => pic.classList.toggle("on", i === index));
    scope.listen(link, "pointerenter", show);
    scope.listen(link, "focus", show);
  });
}

// The pill sits behind the hovered or focused item and goes back to the item that is open or
// current when the pointer and focus leave. Without one it fades out where it is.
function pill(scope: Scope, menu: HTMLElement) {
  const mark = menu.querySelector<HTMLElement>(".nav-pill");
  if (!mark) return;
  const items = $$<HTMLElement>(":scope > a, :scope > button", menu);
  let target: HTMLElement | null = null;
  let hovered: HTMLElement | null = null;
  let focused: HTMLElement | null = null;

  const resting = () =>
    items.find((item) => item.getAttribute("aria-expanded") === "true") ??
    items.find((item) => item.getAttribute("aria-current") === "page") ??
    null;

  const place = (next: HTMLElement | null, instant = false) => {
    if (!next) {
      mark.classList.remove("on");
      target = null;
      return;
    }
    // A pill that is hidden appears at its item instead of sliding in from the last one.
    const jump = instant || !mark.classList.contains("on");
    if (jump) mark.classList.add("jump");
    mark.style.setProperty("--pl", `${next.offsetLeft}px`);
    mark.style.setProperty("--pr", `${menu.clientWidth - next.offsetLeft - next.offsetWidth}px`);
    if (jump) {
      void mark.offsetWidth;
      mark.classList.remove("jump");
    }
    mark.classList.add("on");
    target = next;
  };
  const settle = () => place(hovered ?? focused ?? resting());

  items.forEach((item) => {
    scope.listen<PointerEvent>(item, "pointerenter", (event) => {
      if (event.pointerType !== "mouse") return;
      hovered = item;
      settle();
    });
    scope.listen(item, "focus", () => {
      focused = item.matches(":focus-visible") ? item : null;
      settle();
    });
    scope.listen(item, "blur", () => {
      focused = null;
      settle();
    });
  });
  scope.listen(menu, "pointerleave", () => {
    hovered = null;
    settle();
  });

  // An open panel holds the pill on its button, and closing it lets the pill go back.
  const watch = new MutationObserver(settle);
  watch.observe(menu, { attributes: true, subtree: true, attributeFilter: ["aria-expanded"] });
  scope.onStop(() => watch.disconnect());

  // Sizes change when the fonts arrive and when the window is resized.
  const resize = new ResizeObserver(() => place(target ?? resting(), true));
  resize.observe(menu);
  scope.onStop(() => resize.disconnect());
  document.fonts?.ready.then(() => scope.alive() && place(target ?? resting(), true));
  place(resting(), true);
}
