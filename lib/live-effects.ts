import { $$, prefersCalm, type Scope } from "./scope";

// Steps: data-seq="900,1200,..." adds .s1, .s2 ... cumulatively, holds, then starts over.
class Seq {
  private times: number[];
  private hold: number;
  private timers: number[] = [];
  private typed: Array<{ node: HTMLElement; text: string; at: number }>;
  private counts: Array<{ node: HTMLElement; text: string; to: number; from: number; at: number }>;
  private running = false;

  constructor(private el: HTMLElement) {
    this.times = (el.dataset.seq ?? "").split(",").map(Number);
    this.hold = Number(el.dataset.hold) || 2600;
    this.typed = $$("[data-type]", el).map((node) => ({
      node,
      text: node.textContent ?? "",
      at: Number(node.dataset.type),
    }));
    this.counts = $$("[data-count]", el).map((node) => ({
      node,
      text: node.textContent ?? "",
      to: Number(node.dataset.count),
      from: Number(node.dataset.from) || 0,
      at: Number(node.dataset.at) || 1,
    }));
  }

  private later(fn: () => void, ms: number) {
    this.timers.push(window.setTimeout(fn, ms));
  }

  private clear() {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }

  private reset() {
    for (let i = 1; i <= this.times.length; i += 1) this.el.classList.remove(`s${i}`);
    for (const item of this.typed) item.node.textContent = "";
    for (const item of this.counts) item.node.textContent = String(item.from);
  }

  private step(index: number) {
    this.el.classList.add(`s${index}`);
    for (const item of this.typed) if (item.at === index) this.type(item);
    for (const item of this.counts) if (item.at === index) this.count(item);
  }

  private type(item: { node: HTMLElement; text: string }) {
    let n = 0;
    const speed = Math.max(10, Math.min(30, 900 / item.text.length));
    const tick = () => {
      n += 1;
      item.node.textContent = item.text.slice(0, n);
      if (n < item.text.length) this.later(tick, speed);
    };
    tick();
  }

  private count(item: { node: HTMLElement; to: number; from: number }) {
    const start = performance.now();
    const span = Number(item.node.dataset.ms) || 700;
    const frame = (now: number) => {
      const p = Math.min(1, (now - start) / span);
      item.node.textContent = String(Math.round(item.from + (item.to - item.from) * (1 - (1 - p) ** 3)));
      if (p < 1 && this.running) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  private loop() {
    this.clear();
    this.reset();
    let t = 240;
    this.times.forEach((ms, i) => {
      t += ms;
      this.later(() => this.step(i + 1), t);
    });
    this.later(() => {
      if (this.running) this.loop();
    }, t + this.hold);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.el.classList.add("run");
    this.loop();
  }

  stop() {
    this.running = false;
    this.clear();
  }

  // Puts the text back, so a second start (React's dev double-mount) reads the real copy.
  restore() {
    this.stop();
    for (const item of [...this.typed, ...this.counts]) item.node.textContent = item.text;
  }
}

export function startLive(scope: Scope) {
  const calm = prefersCalm();

  const seqs = new Map<Element, Seq>();
  $$("[data-seq]").forEach((el) => seqs.set(el, new Seq(el)));
  scope.onStop(() => seqs.forEach((seq) => seq.restore()));
  const seen = scope.observer(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        el.classList.toggle("vis", entry.isIntersecting);
        const seq = seqs.get(el);
        if (seq && !calm) {
          if (entry.isIntersecting) seq.start();
          else seq.stop();
        }
        for (const svg of $$<SVGSVGElement>("svg", el)) {
          if (svg.pauseAnimations) {
            if (entry.isIntersecting && !calm) svg.unpauseAnimations();
            else svg.pauseAnimations();
          }
        }
      }
    },
    { threshold: 0.15 },
  );
  $$(".live").forEach((el) => seen.observe(el));

  // Auto-advancing steps with a picture or an explainer on the right.
  $$("[data-stepper]").forEach((box) => {
    const every = Number(box.dataset.stepper) || 5200;
    box.style.setProperty("--every", `${every}ms`);
    const tabs = $$(".st-tab", box);
    const panes = $$(".st-pane", box);
    let index = 0;
    let timer = 0;
    const show = (next: number) => {
      index = (next + tabs.length) % tabs.length;
      tabs.forEach((tab, i) => {
        tab.classList.remove("on");
        tab.setAttribute("aria-selected", String(i === index));
        if (i === index) {
          void tab.offsetWidth;
          tab.classList.add("on");
        }
      });
      panes.forEach((pane, i) => pane.classList.toggle("on", i === index));
    };
    const restart = () => {
      clearInterval(timer);
      if (!calm) timer = window.setInterval(() => show(index + 1), every);
    };
    scope.onStop(() => clearInterval(timer));
    tabs.forEach((tab, i) =>
      scope.listen(tab, "click", () => {
        show(i);
        restart();
      }),
    );
    scope.listen(box, "mouseenter", () => clearInterval(timer));
    scope.listen(box, "mouseleave", restart);
    show(0);
    restart();
  });

  // A list where hovering or focusing a row changes the panel beside it.
  $$("[data-explore]").forEach((box) => {
    const rows = $$(".ex-row", box);
    const panes = $$(".ex-pane", box);
    const show = (index: number) => {
      rows.forEach((row, i) => row.classList.toggle("on", i === index));
      panes.forEach((pane, i) => pane.classList.toggle("on", i === index));
    };
    rows.forEach((row, i) => {
      scope.listen(row, "mouseenter", () => show(i));
      scope.listen(row, "focus", () => show(i));
      scope.listen(row, "click", () => show(i));
    });
    show(0);
  });

  // Lane demo: a real little state machine, so people can press the buttons.
  $$("[data-demo-lane]").forEach((box) => {
    const out = box.querySelector<HTMLElement>(".dl-log")!;
    const end = box.querySelector<HTMLElement>(".dl-end")!;
    const send = box.querySelector<HTMLButtonElement>(".dl-send")!;
    const conflict = box.querySelector<HTMLInputElement>(".dl-conflict")!;
    const toggle = box.querySelector<HTMLElement>(".dl-lane")!;
    const result = box.querySelector<HTMLElement>(".dl-result")!;
    let lane = true;
    let timers: number[] = [];
    let count = 0;
    scope.onStop(() => timers.forEach(clearTimeout));
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const line = (text: string, state = "") => {
      const row = document.createElement("li");
      row.innerHTML = `<i class="dot ${state}"></i><span>${text}</span>`;
      out.append(row);
      return row;
    };
    const reset = () => {
      timers.forEach(clearTimeout);
      timers = [];
      out.textContent = "";
      end.hidden = true;
      result.textContent = "";
      send.disabled = false;
    };
    scope.listen(toggle, "click", () => {
      lane = !lane;
      toggle.setAttribute("aria-pressed", String(lane));
      reset();
    });
    scope.listen(send, "click", () => {
      reset();
      send.disabled = true;
      count += 1;
      if (!lane) {
        line("Working in the main checkout", "mv");
        later(() => line("Another thread changed app.js while this one was reading it", "st"), 1000);
        later(() => line("Press Lane and send again to keep them apart", "hd"), 2100);
        later(() => {
          send.disabled = false;
        }, 2300);
        return;
      }
      const id = ["5c1a87", "a48476", "9bb061", "e34542"][(count - 1) % 4];
      const port = 4100 + ((count - 1) % 4);
      line(`git worktree add on <code>eizen/lane-${id}</code>`, "ok");
      later(() => line(".env copied, node_modules linked", "ok"), 600);
      later(() => line(`PORT=${port} given to the agent`, "ok"), 1200);
      later(() => line("Agent editing app.js and index.html", "mv"), 1900);
      later(() => line("Project checks passed", "ok"), 3300);
      later(() => {
        end.hidden = false;
        send.disabled = false;
      }, 3700);
    });
    scope.listen(box.querySelector(".dl-merge")!, "click", () => {
      result.textContent = conflict.checked ? "Merging would conflict in app.js. Nothing was changed." : "Merged into main.";
    });
    scope.listen(box.querySelector(".dl-remove")!, "click", () => {
      result.textContent = "Folder removed. Unmerged commits stay on the branch.";
    });
  });

  // Night shift dial: the hand sweeps a night, and the sliders decide whether a task may start.
  $$("[data-night]").forEach((box) => {
    const five = box.querySelector<HTMLInputElement>("[name=five]")!;
    const week = box.querySelector<HTMLInputElement>("[name=week]")!;
    const fiveOut = box.querySelector<HTMLElement>(".nd-five")!;
    const weekOut = box.querySelector<HTMLElement>(".nd-week")!;
    const verdict = box.querySelector<HTMLElement>(".nd-verdict")!;
    const lamp = box.querySelector<HTMLElement>(".nd-lamp")!;
    const update = () => {
      fiveOut.textContent = `${five.value}%`;
      weekOut.textContent = `${week.value}%`;
      const ok = Number(five.value) < 50 && Number(week.value) < 80;
      verdict.textContent = ok ? "The next task would start" : "The next task waits for headroom";
      lamp.className = `dot nd-lamp ${ok ? "ok" : "hd"}`;
      box.classList.toggle("blocked", !ok);
    };
    scope.listen(five, "input", update);
    scope.listen(week, "input", update);
    update();
    const hand = box.querySelector(".nd-hand");
    const clock = box.querySelector(".nd-time");
    if (calm || !hand || !clock) return;
    let last = 0;
    let minutes = 22 * 60 + 30;
    const frame = (now: number) => {
      if (!scope.alive()) return;
      if (box.classList.contains("vis") || box.querySelector(".live.vis")) {
        minutes += last === 0 ? 0 : (now - last) * 0.06;
        if (minutes >= 32 * 60) minutes = 22 * 60 + 30;
        const m = minutes % 1440;
        hand.setAttribute("transform", `rotate(${(m / 1440) * 360})`);
        clock.textContent = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(Math.floor(m % 60)).padStart(2, "0")}`;
        const running = (minutes % 1440 >= 23 * 60 || minutes % 1440 < 7 * 60) && !box.classList.contains("blocked");
        box.classList.toggle("open", running);
        const done = Math.max(0, Math.min(3, Math.floor((minutes - 23 * 60) / 170)));
        $$(".nd-task", box).forEach((task, i) => {
          task.dataset.state = !running && done <= i ? "queued" : i < done ? "done" : i === done ? "running" : "queued";
        });
      }
      last = now;
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });

  // A matrix turns almost every vector, and two stay on their line.
  $$<SVGSVGElement>("[data-eigen]").forEach((svg) => {
    const grid = svg.querySelector(".ef-grid")!;
    const turned = svg.querySelector(".ef-turned")!;
    const held = svg.querySelector(".ef-held")!;
    const heads = svg.querySelector(".ef-heads")!;
    const label = svg.parentElement?.querySelector(".ef-t");
    const A = [1.5, 1, 1, 1.5];
    const R = 90;
    const span = 300;
    const map = (x: number, y: number, t: number) => [x + t * ((A[0] - 1) * x + A[1] * y), y + t * (A[2] * x + (A[3] - 1) * y)];
    const arrow = (x: number, y: number) => {
      const n = Math.hypot(x, y) || 1;
      const ux = x / n;
      const uy = y / n;
      const size = Math.min(10, n * 0.3);
      return `M${x.toFixed(1)} ${(-y).toFixed(1)}L${(x - ux * size - uy * size * 0.55).toFixed(1)} ${(-(y - uy * size + ux * size * 0.55)).toFixed(1)}M${x.toFixed(1)} ${(-y).toFixed(1)}L${(x - ux * size + uy * size * 0.55).toFixed(1)} ${(-(y - uy * size - ux * size * 0.55)).toFixed(1)}`;
    };
    const draw = (t: number) => {
      let g = "";
      for (let k = -6; k <= 6; k += 1) {
        const a = map(k * 50, -span, t);
        const b = map(k * 50, span, t);
        const c = map(-span, k * 50, t);
        const d = map(span, k * 50, t);
        g += `M${a[0].toFixed(1)} ${(-a[1]).toFixed(1)}L${b[0].toFixed(1)} ${(-b[1]).toFixed(1)}M${c[0].toFixed(1)} ${(-c[1]).toFixed(1)}L${d[0].toFixed(1)} ${(-d[1]).toFixed(1)}`;
      }
      grid.setAttribute("d", g);
      let plain = "";
      let keep = "";
      for (let i = 0; i < 24; i += 1) {
        const angle = (i / 24) * Math.PI * 2;
        const [x, y] = map(Math.cos(angle) * R, Math.sin(angle) * R, t);
        const line = `M0 0L${x.toFixed(1)} ${(-y).toFixed(1)}${arrow(x, y)}`;
        if (i % 6 === 3) keep += line;
        else plain += line;
      }
      turned.setAttribute("d", plain);
      held.setAttribute("d", keep);
      heads.setAttribute("opacity", String(Math.min(1, t * 2)));
      if (label) label.textContent = t < 0.02 ? "Before the matrix" : t > 0.98 ? "After the matrix" : "Applying the matrix";
    };
    if (calm) {
      draw(1);
      return;
    }
    const box = svg.closest(".live")!;
    const begin = performance.now();
    const frame = (now: number) => {
      if (!scope.alive()) return;
      if (box.classList.contains("vis")) {
        const phase = ((now - begin) % 7600) / 7600;
        const up = phase < 0.08 ? 0 : phase < 0.42 ? (phase - 0.08) / 0.34 : phase < 0.62 ? 1 : phase < 0.94 ? 1 - (phase - 0.62) / 0.32 : 0;
        draw(up * up * (3 - 2 * up));
      }
      requestAnimationFrame(frame);
    };
    draw(0);
    requestAnimationFrame(frame);
  });

  // Connections: which account may use which service.
  $$("[data-matrix]").forEach((box) => {
    const count = box.querySelector<HTMLElement>(".mx-count")!;
    const cells = $$("button[aria-pressed]", box);
    const update = () => {
      count.textContent = String(cells.filter((c) => c.getAttribute("aria-pressed") === "true").length);
    };
    cells.forEach((cell) =>
      scope.listen(cell, "click", () => {
        cell.setAttribute("aria-pressed", String(cell.getAttribute("aria-pressed") !== "true"));
        update();
      }),
    );
    update();
  });
}
