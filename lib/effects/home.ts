import { $$, prefersCalm, type Scope } from "../scope";

// Home page pieces, plus the picture carousel and slanted picture frames used on other pages too.
// Everything started here is registered on the scope.
export function start(scope: Scope) {
  const calm = prefersCalm();
  startCycles(scope, calm);
  startBars(scope, calm);
  startDay(scope, calm);
  startHeroLanes(scope, calm);
  startBeats(scope, calm);
  if (calm) {
    // The lane map shows its dots mid-run, standing still.
    $$<SVGSVGElement>(".lane-map svg").forEach((svg) => {
      svg.setCurrentTime(6);
      svg.pauseAnimations();
    });
  }
}

// Sets .seen while an element is on screen, so its loops can pause when it is not.
function watchSeen(scope: Scope, elements: Element[]) {
  const seen = scope.observer((entries) => {
    for (const entry of entries) entry.target.classList.toggle("seen", entry.isIntersecting);
  });
  elements.forEach((element) => seen.observe(element));
}

// Restarts a CSS animation on an element by taking the class off and putting it back.
function restart(element: Element, ...names: string[]) {
  element.classList.remove(...names);
  void (element as HTMLElement).offsetWidth;
  element.classList.add(...names);
}

// Shows the first of a set of pictures and clears any wipe left over from an earlier visit.
function firstOn(pics: Element[]) {
  pics.forEach((pic, i) => {
    pic.classList.remove("was", "in");
    pic.classList.toggle("on", i === 0);
  });
}

// Auto-changing screenshots with captions. The caption's line is the only clock: when its
// animation ends the next slide shows, and pausing the line (hover, focus, off screen) pauses it all.
function startCycles(scope: Scope, calm: boolean) {
  const cycles = $$("[data-cycle]");
  watchSeen(scope, cycles);
  cycles.forEach((cycle) => {
    cycle.style.setProperty("--every", `${Number(cycle.dataset.cycle) || 4200}ms`);
    const slides = $$(".slides > *", cycle);
    const caps = $$(".cycle-caps button", cycle);
    let index = 0;
    const show = (next: number, animate: boolean) => {
      const previous = index;
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.remove("was", "in");
        slide.classList.toggle("on", i === index);
        if (animate && i === previous && i !== index) slide.classList.add("was");
      });
      if (animate && !calm && previous !== index) restart(slides[index], "in");
      caps.forEach((cap, i) => {
        cap.classList.remove("on");
        cap.setAttribute("aria-pressed", String(i === index));
      });
      if (caps[index]) restart(caps[index], "on");
    };
    show(0, false);
    caps.forEach((cap, i) => scope.listen(cap, "click", () => show(i, true)));
    if (calm) return;
    scope.listen<AnimationEvent>(cycle, "animationend", (event) => {
      if (event.animationName === "cap-line" && event.target === caps[index]) show(index + 1, true);
    });
    const hold = (on: boolean) => cycle.classList.toggle("hold", on);
    scope.listen(cycle, "mouseenter", () => hold(true));
    scope.listen(cycle, "mouseleave", () => hold(cycle.matches(":has(:focus-visible)")));
    scope.listen(cycle, "focusin", () => hold(true));
    scope.listen<FocusEvent>(cycle, "focusout", (event) => {
      if (!cycle.contains(event.relatedTarget as Node | null) && !cycle.matches(":hover")) hold(false);
    });
  });
}

// Slanted picture frames: each bar swaps to its next photo in turn, wiping in along the slope.
function startBars(scope: Scope, calm: boolean) {
  const groups = $$("[data-bars]");
  watchSeen(scope, groups);
  groups.forEach((group) => {
    const bars = $$(".bar", group);
    const state = bars.map(() => 0);
    // Start from the first photo, also when Next brings back a page it kept.
    bars.forEach((bar) => firstOn($$("img", bar)));
    if (calm) return;
    let turn = 0;
    scope.every(() => {
      if (!group.classList.contains("seen") || document.hidden) return;
      const pics = $$("img", bars[turn]);
      if (pics.length > 1) {
        pics.forEach((pic) => pic.classList.remove("was", "in"));
        pics[state[turn]].classList.replace("on", "was");
        state[turn] = (state[turn] + 1) % pics.length;
        restart(pics[state[turn]], "on", "in");
      }
      turn = (turn + 1) % bars.length;
    }, 3200);
  });
}

// A working day: Morning, Afternoon and End of day each have a picture seen through the bars.
// Hovering or focusing a column (or a bar) shows its picture; otherwise they take turns, and the
// active column's top line is the clock, as in the carousel.
function startDay(scope: Scope, calm: boolean) {
  const days = $$("[data-day]");
  watchSeen(scope, days);
  days.forEach((day) => {
    day.style.setProperty("--every", "5200ms");
    const bars = $$(".day-bars .bar", day);
    const cells = $$(".day-cols .cell", day);
    const pics = bars.map((bar) => $$("img", bar));
    let index = 0;
    // Start on Morning, also when Next brings back a page it kept.
    pics.forEach(firstOn);
    cells.forEach((cell, i) => cell.classList.toggle("on", i === 0));
    bars.forEach((bar, i) => bar.classList.toggle("lit", i === 0));
    const show = (next: number) => {
      next = (next + cells.length) % cells.length;
      if (next === index) return;
      const previous = index;
      index = next;
      for (const list of pics) {
        list.forEach((pic, i) => {
          pic.classList.remove("was", "in");
          pic.classList.toggle("on", i === index);
          if (i === previous) pic.classList.add("was");
        });
        if (!calm) restart(list[index], "in");
      }
      bars.forEach((bar, i) => bar.classList.toggle("lit", i === index));
      cells.forEach((cell, i) => cell.classList.toggle("on", i === index));
    };
    day.classList.add("ready");
    const auto = (on: boolean) => day.classList.toggle("auto", on && !calm);
    auto(true);

    cells.forEach((cell, i) => {
      scope.listen(cell, "mouseenter", () => {
        auto(false);
        show(i);
      });
      scope.listen(cell, "focus", () => {
        auto(false);
        show(i);
      });
      scope.listen(cell, "click", () => show(i));
    });
    bars.forEach((bar, i) =>
      scope.listen(bar, "mouseenter", () => {
        auto(false);
        show(i);
      }),
    );
    scope.listen(day, "mouseleave", () => {
      if (!day.contains(document.activeElement)) auto(true);
    });
    scope.listen<FocusEvent>(day, "focusout", (event) => {
      if (!day.contains(event.relatedTarget as Node | null) && !day.matches(":hover")) auto(true);
    });
    if (calm) return;
    scope.listen<AnimationEvent>(day, "animationend", (event) => {
      if (event.animationName === "cap-line" && event.target === cells[index]) show(index + 1);
    });
  });
}

// Hero lanes: the explainer's steps (.s1, .s2 ...) move each lane through its stages. Each card
// lists the step its stages start at; this marks the current one so the lamp and track follow.
function startHeroLanes(scope: Scope, calm: boolean) {
  const box = document.querySelector<HTMLElement>(".hero-cards");
  if (!box) return;
  const cards = $$(".hc", box);

  if (!calm) {
    const times = (box.dataset.seq ?? "").split(",").map(Number);
    const at = (step: number) => times.slice(0, step).reduce((sum, ms) => sum + ms, 0);
    const lanes = cards.map((card) => ({
      card,
      stages: (card.dataset.stages ?? "0").split(",").map(Number),
      states: (card.dataset.states ?? "").split(","),
      segments: $$(".hc-track i", card),
      stage: -1,
    }));
    const paint = () => {
      if (!box.classList.contains("run")) return;
      let step = 0;
      while (box.classList.contains(`s${step + 1}`)) step += 1;
      for (const lane of lanes) {
        let stage = 0;
        lane.stages.forEach((start, i) => {
          if (start <= step) stage = i;
        });
        if (stage === lane.stage) continue;
        lane.stage = stage;
        const state = lane.states[stage] ?? "work";
        lane.card.dataset.state = state;
        const next = lane.stages[stage + 1];
        const ms = next === undefined ? 0 : at(next) - at(lane.stages[stage]) + (stage === 0 ? 240 : 0);
        lane.segments.forEach((segment, i) => {
          segment.classList.remove("on");
          segment.classList.toggle("done", i < stage || state === "done");
          if (i === stage && state !== "done") {
            segment.style.setProperty("--dur", `${ms}ms`);
            restart(segment, "on");
          }
        });
      }
    };
    const watch = new MutationObserver(paint);
    watch.observe(box, { attributes: true, attributeFilter: ["class"] });
    scope.onStop(() => {
      watch.disconnect();
      // Next keeps the page's DOM when it is left; put the cards back in their finished state.
      cards.forEach((card) => card.removeAttribute("data-state"));
    });
    paint();
  }

  // A little depth: the cards shift with the pointer, the front one the most.
  const hero = box.closest<HTMLElement>(".hero");
  if (!hero || calm || !matchMedia("(pointer: fine)").matches) return;
  let x = 0;
  let y = 0;
  let goalX = 0;
  let goalY = 0;
  let frame = 0;
  const tick = () => {
    x += (goalX - x) * 0.08;
    y += (goalY - y) * 0.08;
    box.style.setProperty("--mx", x.toFixed(3));
    box.style.setProperty("--my", y.toFixed(3));
    frame = Math.abs(goalX - x) + Math.abs(goalY - y) > 0.002 ? requestAnimationFrame(tick) : 0;
  };
  scope.onStop(() => cancelAnimationFrame(frame));
  scope.listen<PointerEvent>(hero, "pointermove", (event) => {
    const box = hero.getBoundingClientRect();
    goalX = ((event.clientX - box.left) / box.width - 0.5) * 2;
    goalY = ((event.clientY - box.top) / Math.min(box.height, innerHeight) - 0.5) * 2;
    frame ||= requestAnimationFrame(tick);
  });
  scope.listen(hero, "pointerleave", () => {
    goalX = 0;
    goalY = 0;
    frame ||= requestAnimationFrame(tick);
  });
}

// Lanes: the paragraph and the two points light up in turn while the recording beside them plays,
// each with a thin line that fills with the video's time. data-sync lists when each beat starts.
function startBeats(scope: Scope, calm: boolean) {
  if (calm) return;
  $$("[data-sync]").forEach((box) => {
    const video = box.closest("section")?.querySelector("video");
    const beats = $$(".beat", box);
    const starts = (box.dataset.sync ?? "0").split(",").map(Number);
    if (!video || beats.length === 0) return;
    let frame = 0;
    let current = -1;
    const paint = () => {
      const t = video.currentTime;
      let index = 0;
      starts.forEach((start, i) => {
        if (t >= start) index = i;
      });
      const end = starts[index + 1] ?? (video.duration || t + 1);
      const progress = Math.min(1, Math.max(0, (t - starts[index]) / (end - starts[index])));
      if (index !== current) {
        current = index;
        beats.forEach((beat, i) => beat.classList.toggle("on", i === index));
      }
      beats[index]?.style.setProperty("--p", progress.toFixed(4));
    };
    const loop = () => {
      paint();
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    scope.listen(video, "playing", () => {
      box.classList.add("synced");
      frame ||= requestAnimationFrame(loop);
    });
    scope.listen(video, "pause", stop);
    scope.onStop(() => {
      stop();
      box.classList.remove("synced");
    });
  });
}
