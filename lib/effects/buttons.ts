import type { Scope } from "../scope";

// The button fill grows from where the pointer came in and drains toward where it left.
// One delegated listener writes that point to --bx/--by on the button and the drop's size to
// --bs, and keeps .is-wet on it until the drain ends; the rest is CSS (app/styles/buttons.css).
// Touch is ignored, so a tap leaves no fill behind.
const GROW_MS = 560;
const DRAIN_MS = 520;
// The drop is uneven, so it is drawn a little larger than the distance to the farthest corner.
const COVER = 1.22;

export function start(scope: Scope) {
  const entered = new WeakMap<HTMLElement, number>();
  const drying = new Map<HTMLElement, number>();
  scope.onStop(() => drying.forEach((id) => clearTimeout(id)));

  const place = (btn: HTMLElement, px: number, py: number) => {
    const r = btn.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const x = Math.min(r.width, Math.max(0, px - r.left));
    const y = Math.min(r.height, Math.max(0, py - r.top));
    const far = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y));
    btn.style.setProperty("--bx", `${((x / r.width) * 100).toFixed(1)}%`);
    btn.style.setProperty("--by", `${((y / r.height) * 100).toFixed(1)}%`);
    btn.style.setProperty("--bs", `${Math.ceil(far * 2 * COVER)}px`);
  };

  const wet = (btn: HTMLElement) => {
    clearTimeout(drying.get(btn));
    drying.delete(btn);
    btn.classList.add("is-wet");
  };
  const dry = (btn: HTMLElement) => {
    clearTimeout(drying.get(btn));
    drying.set(btn, window.setTimeout(() => {
      drying.delete(btn);
      if (!btn.matches(":hover, :focus-visible")) btn.classList.remove("is-wet");
    }, DRAIN_MS));
  };

  const buttonOf = (node: EventTarget | null) => (node instanceof Element ? node.closest<HTMLElement>(".btn") : null);

  scope.listen<PointerEvent>(document, "pointerover", (e) => {
    if (e.pointerType === "touch") return;
    const btn = buttonOf(e.target);
    if (!btn || btn.contains(e.relatedTarget as Node | null)) return;
    place(btn, e.clientX, e.clientY);
    entered.set(btn, performance.now());
    wet(btn);
  });

  scope.listen<PointerEvent>(document, "pointerout", (e) => {
    if (e.pointerType === "touch") return;
    const btn = buttonOf(e.target);
    if (!btn || btn.contains(e.relatedTarget as Node | null)) return;
    // Moving the centre is invisible only once the fill covers the button; a quick pass
    // drains back the way it came.
    if (performance.now() - (entered.get(btn) ?? 0) >= GROW_MS) place(btn, e.clientX, e.clientY);
    dry(btn);
  });

  // Keyboard focus fills from the left edge, the way the label reads.
  scope.listen<FocusEvent>(document, "focusin", (e) => {
    const btn = buttonOf(e.target);
    if (!btn || btn.matches(":hover")) return;
    const r = btn.getBoundingClientRect();
    place(btn, r.left, r.top + r.height / 2);
    if (btn.matches(":focus-visible")) wet(btn);
  });
  scope.listen<FocusEvent>(document, "focusout", (e) => {
    const btn = buttonOf(e.target);
    if (btn?.classList.contains("is-wet")) dry(btn);
  });
}
