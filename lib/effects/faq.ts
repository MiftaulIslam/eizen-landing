import { $$, prefersCalm, type Scope } from "../scope";

// The FAQ thread (components/ui/Faq.tsx). Picking a question sends it: the question lands as
// your message, the agent thinks for a moment, then the answer streams in word by word while
// the lamp goes from blue to green. A thread keeps streaming after you switch away, as threads
// do in the app. Nothing moves while the FAQ is off screen or the tab is hidden.

type Stage = "sent" | "think" | "stream" | "done";

const SEND = 380; // question bubble settles
const THINK = 720; // thinking indicator
const WORD = 34; // ms per word while streaming
const TICK = 32;

export function start(scope: Scope) {
  const calm = prefersCalm();
  $$("[data-faq]").forEach((root) => thread(scope, root, calm));
}

function thread(scope: Scope, root: HTMLElement, calm: boolean) {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', root);
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls") ?? "") as HTMLElement | null);
  const list = root.querySelector<HTMLElement>(".fq-list");
  const comp = root.querySelector<HTMLButtonElement>(".fq-comp");
  const preview = root.querySelector<HTMLElement>(".fq-ph");
  if (!tabs.length || panels.some((p) => !p)) return;

  const runs = tabs.map(() => ({ stage: null as Stage | null, t: 0, words: [] as HTMLElement[], shown: 0 }));
  let current = 0;
  let onScreen = false;
  let started = false;
  let timer = 0;

  const set = (i: number, stage: Stage) => {
    runs[i].stage = stage;
    panels[i]!.dataset.s = stage;
    tabs[i].dataset.s = stage === "done" ? "done" : "work";
  };

  const nextIndex = () => {
    for (let k = 1; k <= tabs.length; k++) {
      const i = (current + k) % tabs.length;
      if (!runs[i].stage) return i;
    }
    return (current + 1) % tabs.length;
  };

  const showPreview = () => {
    if (!preview) return;
    const i = runs[current].stage ? nextIndex() : current;
    preview.textContent = tabs[i].textContent;
    preview.classList.remove("swap");
    void preview.offsetWidth;
    preview.classList.add("swap");
  };

  const select = (i: number, focus: boolean) => {
    current = i;
    tabs.forEach((tab, k) => {
      const on = k === i;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[k]!.classList.toggle("on", on);
    });
    if (focus) tabs[i].focus({ preventScroll: true });
    reveal(i);
  };

  // Keep the picked question in view inside the phone strip without moving the page.
  const reveal = (i: number) => {
    if (!list || list.scrollWidth <= list.clientWidth + 1) return;
    const tab = tabs[i];
    const left = tab.offsetLeft - list.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    list.scrollTo({ left, behavior: calm ? "auto" : "smooth" });
  };

  // Wrap each word of the answer once so it can appear on its own. Space stays reserved
  // because hidden words keep their size.
  const split = (i: number) => {
    const answer = panels[i]!.querySelector<HTMLElement>(".fq-a");
    if (!answer || runs[i].words.length) return;
    const walker = document.createTreeWalker(answer, NodeFilter.SHOW_TEXT);
    const texts: Text[] = [];
    while (walker.nextNode()) texts.push(walker.currentNode as Text);
    for (const text of texts) {
      const parts = (text.nodeValue ?? "").split(/(\s+)/);
      const frag = document.createDocumentFragment();
      for (const part of parts) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.append(part);
        } else {
          const word = document.createElement("span");
          word.className = "w";
          word.textContent = part;
          frag.append(word);
          runs[i].words.push(word);
        }
      }
      text.replaceWith(frag);
    }
  };

  const send = (i: number, focus = false) => {
    started = true;
    select(i, focus);
    if (!runs[i].stage) {
      if (calm) {
        set(i, "done");
      } else {
        split(i);
        runs[i].t = 0;
        set(i, "sent");
        loop();
      }
    }
    showPreview();
  };

  const step = () => {
    let busy = false;
    runs.forEach((run, i) => {
      if (!run.stage || run.stage === "done") return;
      busy = true;
      run.t += TICK;
      if (run.stage === "sent" && run.t >= SEND) set(i, "think");
      if (run.stage === "think" && run.t >= SEND + THINK) set(i, "stream");
      if (run.stage === "stream") {
        // Tokens arrive in small uneven bursts, like a real stream.
        const due = Math.min(run.words.length, Math.floor((run.t - SEND - THINK) / WORD) + 1);
        if (due > run.shown && (run.shown === 0 || Math.random() < 0.55 || due - run.shown > 3)) {
          run.words[run.shown - 1]?.classList.remove("tip");
          for (; run.shown < due; run.shown++) run.words[run.shown].classList.add("on");
          run.words[run.shown - 1]?.classList.add("tip");
        }
        if (run.shown >= run.words.length) {
          run.words[run.shown - 1]?.classList.remove("tip");
          set(i, "done");
        }
      }
    });
    if (!busy) halt();
  };

  const loop = () => {
    if (timer || !onScreen || document.hidden) return;
    timer = window.setInterval(step, TICK);
  };
  const halt = () => {
    clearInterval(timer);
    timer = 0;
  };
  scope.onStop(halt);

  tabs.forEach((tab, i) => scope.listen(tab, "click", () => send(i)));
  if (comp) scope.listen(comp, "click", () => send(runs[current].stage ? nextIndex() : current));

  if (list) {
    scope.listen<KeyboardEvent>(list, "keydown", (event) => {
      const n = tabs.length;
      const at = tabs.indexOf(document.activeElement as HTMLButtonElement);
      if (at < 0) return;
      const to =
        event.key === "ArrowDown" || event.key === "ArrowRight" ? (at + 1) % n
        : event.key === "ArrowUp" || event.key === "ArrowLeft" ? (at - 1 + n) % n
        : event.key === "Home" ? 0
        : event.key === "End" ? n - 1
        : -1;
      if (to < 0) return;
      event.preventDefault();
      send(to, true);
    });
  }

  // The list is a row on phones (faq.css), so tell assistive tech which arrows apply.
  if (list) {
    const row = matchMedia("(max-width: 860px)");
    const orient = () => list.setAttribute("aria-orientation", row.matches ? "horizontal" : "vertical");
    orient();
    scope.listen(row, "change", orient);
  }

  root.classList.add("ready");

  const io = scope.observer(
    (entries) => {
      for (const entry of entries) {
        onScreen = entry.isIntersecting;
        root.classList.toggle("vis", onScreen);
        if (onScreen && !started && entry.intersectionRatio >= 0.35) {
          started = true;
          window.setTimeout(() => {
            if (scope.alive() && !runs[current].stage) send(current);
          }, calm ? 0 : 450);
        }
        if (onScreen) loop();
        else halt();
      }
    },
    { threshold: [0, 0.35] },
  );
  io.observe(root);

  scope.listen(document, "visibilitychange", () => (document.hidden ? halt() : loop()));
}
