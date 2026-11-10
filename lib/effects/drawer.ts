import { $$, prefersCalm, type Scope } from "../scope";
import { shown } from "./nav";

// Bottom sheets (components/ui/Drawer.tsx, app/styles/drawer.css). Below its `from` width a drawer
// opens from its trigger, or from any element with data-drawer-open="<sheet id>", and closes with
// the close button, the dimmed page, Escape, a downward swipe on the handle, or any element inside
// it with data-drawer-close. While open it is a modal dialog: focus stays inside, the page does
// not scroll, and focus goes back to whatever opened it. The sheet is shown as a manual popover so
// it sits in the top layer, above the header and outside any stacking context of the section.
//
// An opener may also carry:
//   data-drawer-title          the sheet's title; empty takes the opener's aria-label or text
//   data-drawer-when="touch"   open only from a tap, not from a mouse click or a key
// and contain [data-drawer-content], whose children are copied into the sheet's [data-drawer-slot].

export type DrawerHandle = {
  id: string;
  root: HTMLElement;
  panel: HTMLElement;
  /** True while it acts as a drawer, false when its content renders inline. */
  isDrawer(): boolean;
  isOpen(): boolean;
  open(opener?: HTMLElement | null): void;
  close(returnFocus?: boolean): void;
  setTitle(text: string): void;
};

const handles = new Map<string, DrawerHandle>();
const stack: DrawerHandle[] = [];
let locks = 0;

/** The drawer with this sheet id on the page that is showing. */
export const getDrawer = (id: string) => handles.get(id);

const CLOSE = 420; // the closing slide in drawer.css
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export function start(scope: Scope) {
  const calm = prefersCalm();
  $$("[data-drawer]")
    .filter(shown)
    .forEach((root) => {
      const handle = drawer(scope, root, calm);
      if (handle) handles.set(handle.id, handle);
    });
  scope.onStop(() => {
    handles.forEach((handle) => handle.close(false));
    handles.clear();
    stack.length = 0;
  });
  if (!handles.size) return;

  // Openers anywhere on the page.
  let lastPointer = "";
  let lastPointerAt = 0;
  scope.listen<PointerEvent>(document, "pointerdown", (event) => {
    lastPointer = event.pointerType;
    lastPointerAt = performance.now();
  }, { capture: true });
  scope.listen<MouseEvent>(document, "click", (event) => {
    const opener = (event.target as Element | null)?.closest<HTMLElement>("[data-drawer-open]");
    if (!opener || !shown(opener)) return;
    const handle = handles.get(opener.dataset.drawerOpen ?? "");
    if (!handle || !handle.isDrawer()) return;
    if (opener.dataset.drawerWhen === "touch") {
      const tapped = event.detail > 0 && lastPointer !== "mouse" && lastPointer !== "" && performance.now() - lastPointerAt < 1200;
      if (!tapped) return;
    }
    const title = opener.dataset.drawerTitle;
    if (title !== undefined) handle.setTitle(title || opener.getAttribute("aria-label") || opener.textContent?.trim() || "");
    const content = opener.querySelector("[data-drawer-content]");
    const slot = handle.panel.querySelector("[data-drawer-slot]");
    if (content && slot) slot.replaceChildren(...[...content.childNodes].map((node) => node.cloneNode(true)));
    handle.open(opener);
  });

  scope.listen<KeyboardEvent>(document, "keydown", (event) => {
    const top = stack[stack.length - 1];
    if (!top) return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      top.close();
    } else if (event.key === "Tab") {
      trap(event, top.panel);
    }
  }, { capture: true });
}

function drawer(scope: Scope, root: HTMLElement, calm: boolean): DrawerHandle | null {
  const layer = root.querySelector<HTMLElement>(":scope > .dw-layer");
  const panel = layer?.querySelector<HTMLElement>(":scope > .dw-panel");
  if (!layer || !panel) return null;
  const trigger = root.querySelector<HTMLElement>(":scope > .dw-trigger");
  const head = panel.querySelector<HTMLElement>(".dw-head");
  const title = panel.querySelector<HTMLElement>(".dw-title");
  const from = Number(root.dataset.drawer) || 0;
  const media = from ? matchMedia(`(width < ${from}px)`) : null;
  const popover = typeof layer.showPopover === "function";

  let open = false;
  let opener: HTMLElement | null = null;
  let timer = 0;
  let frame = 0;

  // Openers that only answer taps keep their own semantics for mouse and keyboard.
  const openers = () => $$(`[data-drawer-open="${CSS.escape(panel.id)}"]`).filter((element) => shown(element) && element.dataset.drawerWhen !== "touch");

  // Roles and names only while it is a drawer; inline it is plain content.
  const mode = () => {
    const on = isDrawer();
    if (on) {
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      if (title?.textContent?.trim()) {
        panel.setAttribute("aria-labelledby", title.id);
        panel.removeAttribute("aria-label");
      } else {
        panel.setAttribute("aria-label", root.dataset.label ?? "");
        panel.removeAttribute("aria-labelledby");
      }
    } else {
      if (open) close(false, true);
      for (const name of ["role", "aria-modal", "aria-labelledby", "aria-label"]) panel.removeAttribute(name);
    }
    for (const element of openers()) {
      if (on) {
        element.setAttribute("aria-haspopup", "dialog");
        element.setAttribute("aria-controls", panel.id);
        element.setAttribute("aria-expanded", String(open && opener === element));
      } else {
        for (const name of ["aria-haspopup", "aria-controls", "aria-expanded"]) element.removeAttribute(name);
      }
    }
  };
  const isDrawer = () => !media || media.matches;

  const setExpanded = (value: boolean) => {
    trigger?.setAttribute("aria-expanded", String(value && (!opener || opener === trigger)));
    if (opener && opener !== trigger && opener.hasAttribute("aria-expanded")) opener.setAttribute("aria-expanded", String(value));
  };

  const lock = (on: boolean) => {
    locks = Math.max(0, locks + (on ? 1 : -1));
    document.documentElement.classList.toggle("dw-locked", locks > 0);
  };

  const setTitle = (text: string) => {
    if (!title) return;
    title.textContent = text;
    if (isDrawer()) mode();
  };

  const show = (from: HTMLElement | null) => {
    if (open || !isDrawer()) return;
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    open = true;
    opener = from ?? trigger;
    mode();
    root.classList.add("shown");
    if (popover && !layer.matches(":popover-open")) layer.showPopover();
    lock(true);
    stack.push(handle);
    setExpanded(true);
    // One frame at the closed position first, so the sheet slides up from below.
    void panel.offsetHeight;
    frame = requestAnimationFrame(() => root.classList.add("open"));
    const target =
      panel.querySelector<HTMLElement>('.dw-body [aria-selected="true"], .dw-body [data-drawer-focus]') ??
      $$<HTMLElement>(FOCUSABLE, panel.querySelector(".dw-body") ?? panel).find(visible) ??
      panel;
    target.focus({ preventScroll: true });
  };

  const close = (returnFocus = true, now = false) => {
    if (!open) return;
    open = false;
    cancelAnimationFrame(frame);
    root.classList.remove("open");
    panel.style.translate = "";
    panel.style.transition = "";
    layer.style.removeProperty("--dw-drag");
    const at = stack.indexOf(handle);
    if (at >= 0) stack.splice(at, 1);
    lock(false);
    setExpanded(false);
    const back = opener;
    opener = null;
    const hide = () => {
      root.classList.remove("shown");
      if (popover && layer.matches(":popover-open")) layer.hidePopover();
    };
    clearTimeout(timer);
    if (now || calm) hide();
    else timer = window.setTimeout(hide, CLOSE);
    if (returnFocus && back && back.isConnected) back.focus({ preventScroll: true });
  };

  const handle: DrawerHandle = {
    id: panel.id,
    root,
    panel,
    isDrawer,
    isOpen: () => open,
    open: show,
    close: (returnFocus = true) => close(returnFocus, !returnFocus),
    setTitle,
  };

  mode();
  if (media) scope.listen(media, "change", mode);
  scope.onStop(() => {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
  });

  if (trigger) scope.listen(trigger, "click", () => (open ? close() : show(trigger)));
  scope.listen(panel, "click", (event) => {
    const target = event.target as Element;
    if (target.closest(".dw-close") || target.closest("[data-drawer-close]")) close();
  });
  const scrim = layer.querySelector(".dw-scrim");
  if (scrim) scope.listen(scrim, "click", () => close());

  // Drag the handle down: the sheet follows the finger, and past a threshold or with a quick
  // flick it closes. Short of that it settles back.
  if (head) swipe(scope, head, panel, layer, () => open, () => close());

  return handle;
}

function swipe(scope: Scope, head: HTMLElement, panel: HTMLElement, layer: HTMLElement, isOpen: () => boolean, close: () => void) {
  let id = -1;
  let startY = 0;
  let dy = 0;
  let samples: Array<[number, number]> = [];

  scope.listen<PointerEvent>(head, "pointerdown", (event) => {
    if (!isOpen() || (event.target as Element).closest("button") || (event.pointerType === "mouse" && event.button !== 0)) return;
    id = event.pointerId;
    startY = event.clientY;
    dy = 0;
    samples = [[event.timeStamp, 0]];
    head.setPointerCapture(id);
    panel.style.transition = "none";
    layer.classList.add("dragging");
  });
  scope.listen<PointerEvent>(head, "pointermove", (event) => {
    if (event.pointerId !== id) return;
    const raw = event.clientY - startY;
    // Pulling up gives a little and stops; pulling down follows the finger one to one.
    dy = raw < 0 ? -Math.min(24, Math.sqrt(-raw) * 2) : raw;
    panel.style.translate = `0 ${dy}px`;
    layer.style.setProperty("--dw-drag", String(Math.max(0, Math.min(1, dy / panel.offsetHeight))));
    samples.push([event.timeStamp, dy]);
    if (samples.length > 6) samples.shift();
  });
  const end = (event: PointerEvent) => {
    if (event.pointerId !== id) return;
    id = -1;
    layer.classList.remove("dragging");
    const [t0, y0] = samples[0] ?? [event.timeStamp, 0];
    const velocity = (dy - y0) / Math.max(1, event.timeStamp - t0); // px per ms
    const shut = dy > Math.min(140, panel.offsetHeight * 0.3) || (velocity > 0.5 && dy > 24);
    // Hand the position back to the stylesheet in the same frame so the transition starts here.
    panel.style.transition = "";
    panel.style.translate = "";
    layer.style.removeProperty("--dw-drag");
    if (shut) close();
  };
  scope.listen(head, "pointerup", end);
  scope.listen(head, "pointercancel", end);
}

const visible = (element: HTMLElement) => element.offsetParent !== null || element.getClientRects().length > 0;

function trap(event: KeyboardEvent, panel: HTMLElement) {
  const items = $$<HTMLElement>(FOCUSABLE, panel).filter(visible);
  if (!items.length) {
    event.preventDefault();
    panel.focus();
    return;
  }
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement as HTMLElement | null;
  if (!active || !panel.contains(active)) {
    event.preventDefault();
    first.focus();
  } else if (event.shiftKey && (active === first || active === panel)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}
