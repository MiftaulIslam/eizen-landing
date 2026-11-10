import { $$, prefersCalm, type Scope } from "../scope";

// Owned by the interact work. Everything started here must be registered on the scope.
export function start(scope: Scope) {
  const calm = prefersCalm();
  const timers = new Set<number>();
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
    return id;
  };
  const cancel = (id: number) => {
    clearTimeout(id);
    timers.delete(id);
  };
  scope.onStop(() => timers.forEach(clearTimeout));

  $$("[data-scenes]").forEach((box) => startScenes(scope, box, calm, later, cancel));
  $$("[data-orbit]").forEach((orbit) => startOrbit(scope, orbit, calm, later));
}

type Later = (fn: () => void, ms: number) => number;

// Items that drive a picture. Each scene plays its steps, then the next item takes over.
// Hovering, keyboard focus or a tap holds the current item; leaving lets the cycle go on.
function startScenes(scope: Scope, box: HTMLElement, calm: boolean, later: Later, cancel: (id: number) => void) {
  const items = $$(".fs-item", box);
  const panes = $$(".fs-pane", box);
  const stage = box.querySelector<HTMLElement>(".fs-stage");
  if (!stage || items.length === 0 || items.length !== panes.length) return;

  const scenes = panes.map((pane) => {
    const el = pane.querySelector<HTMLElement>("[data-steps]");
    const steps = (el?.dataset.steps ?? "").split(",").filter(Boolean).map(Number);
    const hold = Number(el?.dataset.hold) || 2000;
    const lead = 240;
    return { el, steps, length: lead + steps.reduce((a, b) => a + b, 0) + hold, lead };
  });

  let index = 0;
  let pending: number[] = [];
  let loopStart = 0;
  let visible = false;
  const held = { hover: false, focus: false, touch: false };
  const isHeld = () => held.hover || held.focus || held.touch;

  const bar = (item: HTMLElement) => item.querySelector<HTMLElement>(".fs-bar");
  const setBar = (item: HTMLElement, from: number, ms: number, ease = "linear") => {
    const line = bar(item);
    if (!line) return;
    line.style.transition = "none";
    line.style.transform = `scaleX(${from})`;
    void line.offsetWidth;
    if (ms > 0) {
      line.style.transition = `transform ${ms}ms ${ease}, opacity 200ms`;
      line.style.transform = "scaleX(1)";
    }
  };

  const clearSteps = () => {
    pending.forEach(cancel);
    pending = [];
  };

  // Puts a scene back to its first frame without animating there.
  const rewind = (el: HTMLElement) => {
    el.classList.add("fs-still");
    for (let i = 1; i <= 16; i += 1) el.classList.remove(`s${i}`);
    el.classList.add("run");
    void el.offsetWidth;
    el.classList.remove("fs-still");
  };

  const play = () => {
    clearSteps();
    const scene = scenes[index];
    if (!scene.el || calm || !visible) return;
    const el = scene.el;
    rewind(el);
    loopStart = performance.now();
    let t = scene.lead;
    scene.steps.forEach((ms, i) => {
      t += ms;
      pending.push(later(() => el.classList.add(`s${i + 1}`), t));
    });
    pending.push(
      later(() => {
        if (isHeld()) play();
        else show(index + 1);
      }, scene.length),
    );
    if (isHeld()) setBar(items[index], 1, 0);
    else setBar(items[index], 0, scene.length);
  };

  const show = (next: number, force = false) => {
    const prev = index;
    index = (next + items.length) % items.length;
    items.forEach((item, i) => item.classList.toggle("on", i === index));
    panes.forEach((pane, i) => pane.classList.toggle("on", i === index));
    // The scene that just left stays as it was while it fades, and is rewound next time it plays.
    if (prev !== index || force) play();
  };

  const hold = () => {
    if (calm) return;
    box.classList.add("held");
    const line = bar(items[index]);
    const now = line ? getComputedStyle(line).transform : "none";
    setBar(items[index], now === "none" ? 0 : new DOMMatrixReadOnly(now).a, 380, "cubic-bezier(.2,.7,.2,1)");
  };

  const release = () => {
    if (calm || isHeld()) return;
    box.classList.remove("held");
    const scene = scenes[index];
    const elapsed = Math.min(scene.length, performance.now() - loopStart);
    setBar(items[index], elapsed / scene.length, scene.length - elapsed);
  };

  const pick = (i: number) => {
    if (i !== index) show(i);
  };

  items.forEach((item, i) => {
    scope.listen<PointerEvent>(item, "pointerenter", (event) => {
      if (event.pointerType !== "mouse") return;
      held.hover = true;
      pick(i);
      hold();
    });
    scope.listen<PointerEvent>(item, "pointerleave", (event) => {
      if (event.pointerType !== "mouse") return;
      held.hover = false;
      release();
    });
    scope.listen<PointerEvent>(item, "pointerdown", (event) => {
      if (event.pointerType === "mouse") return;
      held.touch = true;
      pick(i);
      hold();
    });
    scope.listen(item, "focus", () => {
      if (!item.matches(":focus-visible")) return;
      held.focus = true;
      pick(i);
      hold();
    });
    scope.listen(item, "blur", () => {
      if (!held.focus) return;
      held.focus = false;
      release();
    });
  });

  // A tap anywhere outside the items lets the cycle go on again.
  scope.listen<PointerEvent>(document, "pointerdown", (event) => {
    if (!held.touch || event.pointerType === "mouse") return;
    if (items.some((item) => item.contains(event.target as Node))) return;
    held.touch = false;
    release();
  });

  if (calm) return;

  scope
    .observer(
      (entries) => {
        const now = entries.some((entry) => entry.isIntersecting);
        if (now === visible) return;
        visible = now;
        if (visible) show(index, true);
        else {
          clearSteps();
          setBar(items[index], 0, 0);
        }
      },
      { threshold: 0.25 },
    )
    .observe(stage);
}

// The connections orbit: now and then a pulse runs from the mark out to one service and back,
// and the service lights up with what it gives the agent.
function startOrbit(scope: Scope, orbit: HTMLElement, calm: boolean, later: Later) {
  const spokes = $$(".spokes .sat", orbit);
  const nodes = $$(".ring:not(.spokes) .sat", orbit);
  const core = orbit.querySelector<HTMLElement>(".core");
  if (nodes.length === 0 || nodes.length !== spokes.length) return;
  const run = 2600;
  let last = -1;
  // Labels open toward the middle, so the ones near the left and right edges stay in view.
  const side = (sat: HTMLElement) => {
    const tag = sat.querySelector<HTMLElement>(".tag");
    if (!tag) return;
    const box = orbit.getBoundingClientRect();
    const r = tag.getBoundingClientRect();
    const dx = r.left + r.width / 2 - (box.left + box.width / 2);
    tag.dataset.side = dx > box.width * 0.18 ? "r" : dx < -box.width * 0.18 ? "l" : "c";
  };
  nodes.forEach((sat) => scope.listen(sat.querySelector(".tag") ?? sat, "pointerenter", () => side(sat)));
  if (calm) return;
  const ping = () => {
    if (!orbit.classList.contains("vis") || document.hidden) return;
    if (orbit.querySelector(".tag:hover")) return;
    let next = Math.floor(Math.random() * nodes.length);
    if (next === last) next = (next + 3) % nodes.length;
    last = next;
    side(nodes[next]);
    for (const sat of [spokes[next], nodes[next]]) {
      sat.classList.remove("ping");
      void sat.offsetWidth;
      sat.classList.add("ping");
      later(() => sat.classList.remove("ping"), run);
    }
    later(() => {
      if (!core) return;
      core.classList.remove("beat");
      void core.offsetWidth;
      core.classList.add("beat");
    }, run * 0.86);
  };
  later(ping, 900);
  scope.every(ping, 2300);
}
