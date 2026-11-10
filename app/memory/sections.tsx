import Link from "@/components/ui/Link";
import { Arrow } from "@/components/parts/Arrow";
import { AskLine } from "@/components/parts/AskLine";

export function Hero() {
  return (
    <section className="sec paper" style={{ paddingTop: "calc(var(--head) + clamp(64px,8vw,120px))" }}>
      <div className="wrap stack" style={{ "--s": "24px" }}>
        {" "}
        <p className="kick rise">Memory</p>
        {" "}
        <h1 className="d1 rise" style={{ maxWidth: "15em" }}>Every line can tell you why it exists</h1>
        {" "}
        <p className="lead rise">AI-written code comes with an awkward problem: a month later, nobody remembers asking for it. Eizen keeps the reason next to the line.</p>
        {" "}
        <div className="rise" style={{ marginTop: "clamp(32px,4vw,56px)", maxWidth: "860px" }}>
          <AskLine />
        </div>
        {" "}
      </div>
    </section>
  );
}

export function Section2() {
  return (
    <section className="sec night tight">
      <div className="wrap">
        <div className="win rise">
          <img src="/assets/screens/ask-line.webp" srcSet="/assets/screens/ask-line-m.webp 1100w, /assets/screens/ask-line.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1410px, 100vw)" alt="The real editor: a card over line 9 of app.js naming the thread, the request and the reason" width="2200" height="1375" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function AskThisLine() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Ask this line</p>
            <h2 className="d2">Read the conversation behind any line</h2>
          </div>
          {" "}
          <p className="lead">Put the cursor on a line and press Alt+L, or use the context menu in the editor.</p>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "4" }}>
          <div className="cell rise">
            <h3>Recorded as it happens</h3>
            <p>Each turn records which lines it wrote, from the edits the agent actually made.</p>
          </div>
          <div className="cell rise">
            <h3>Follows the line</h3>
            <p>When later turns move a line, the record moves with it.</p>
          </div>
          <div className="cell rise">
            <h3>Outlives old snapshots</h3>
            <p>The index has its own storage, so clearing branch history leaves it alone.</p>
          </div>
          <div className="cell rise">
            <h3>Falls back to git blame</h3>
            <p>Anything written outside Eizen shows a normal blame, labelled as that.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TheNoteArrivesBefore() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">The agent reads it too</p>
            {" "}
            <h2 className="d2">The note arrives before the edit</h2>
            {" "}
            <p className="body">Before an agent edits lines that an earlier turn wrote, Eizen tells it what those lines were for. It adds a few hundred characters at most and never holds the edit up. You can turn it off in Settings.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="ui-card rise" style={{ fontFamily: "var(--mono)", fontSize: "14px", lineHeight: "1.6" }}>
              Eizen line history for app.js: an earlier turn wrote the lines you are about to replace. If they are a deliberate workaround, keep what they do unless the user asked otherwise.
              <br />
              <br />
              Line 9, today. Asked: "Add a Days overdue column to the invoice table. Terms are 30 days from the issued date..."
            </div>
            <p className="cap">The note an agent receives before the edit</p>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function CorrectionsBecomeRules() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Corrections become rules</p>
            {" "}
            <h2 className="d2">Correct it once</h2>
            {" "}
            <p className="body">When a message reads like a correction, Eizen distils it to one line and offers it as a project rule. Add writes it to CLAUDE.md, or AGENTS.md for Codex and OpenCode. Nothing is written until you press Add, and a dismissed rule isn't offered again.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="600,1200,1100,1200" data-hold="2800" style={{ display: "grid", gap: "12px" }}>
              {" "}
              <div className="ui pad">
                <div className="m">You wrote</div>
                <div data-type="1">No, don't rely on colour alone. Always keep the word next to the dot.</div>
              </div>
              {" "}
              <div className="ui pad a2" style={{ borderColor: "var(--hd)" }}>
                <div className="m">Keep this as a rule in CLAUDE.md</div>
                <div className="row b" style={{ marginTop: "4px" }}>
                  <b>Keep the word next to the status dot</b>
                  <div className="row">
                    <span className="ubtn go">Add</span>
                    <span className="ubtn">Edit</span>
                    <span className="ubtn">Dismiss</span>
                  </div>
                </div>
              </div>
              {" "}
              <div className="ui pad m a3">
                <div>CLAUDE.md</div>
                <div style={{ color: "var(--ut2)", marginTop: "6px" }}>## Rules from corrections</div>
                <div className="a4" style={{ color: "var(--ok)" }}>- Keep the word next to the status dot</div>
              </div>
              {" "}
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function BranchHistory() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Branch history</p>
            {" "}
            <h2 className="d2">Go back to any turn without touching your git log</h2>
            {" "}
            <p className="body">Eizen saves a snapshot after every turn in a separate repository of its own. You can read any turn as a diff, scrub through screenshots of the page as it was, and restore. Restoring saves your current state first.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/history.webp" srcSet="/assets/screens/history-m.webp 1100w, /assets/screens/history.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Branch history with the turns on the left and a diff on the right" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function SideChats() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Side chats</p>
            {" "}
            <h2 className="d2">Ask a side question without derailing the thread</h2>
            {" "}
            <p className="body">Select any text in a reply. Ask quotes it in the composer. Start side chat branches the thread at that reply into a new one beside it, with the text already quoted, and the original carries on untouched.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise crop" style={{ "--ar": "1440 / 700", "--pos": "50% 0" }}>
              <img src="/assets/screens/selection.webp" srcSet="/assets/screens/selection-m.webp 1100w, /assets/screens/selection.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="A selection in a thread with Ask and Start side chat above it" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Limits() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Limits</p>
            <h2 className="d2">What it can’t know</h2>
          </div>
          <ul className="ticks rise">
            <li>Code written outside Eizen has no origin, so you get git blame.</li>
            <li>Changes made by a shell command rather than an edit tool are not attributed to a turn.</li>
            <li>Corrections are detected from wording. Some will be missed and you can always write the rule yourself.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/automation">
        <img src="/assets/img/kitt-peak.webp" srcSet="/assets/img/kitt-peak-s.webp 900w, /assets/img/kitt-peak-m.webp 1200w, /assets/img/kitt-peak.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Automation
          <Arrow />
        </span>
      </Link>
      <Link href="/teams">
        <img src="/assets/img/la-silla.webp" srcSet="/assets/img/la-silla-s.webp 900w, /assets/img/la-silla-m.webp 1200w, /assets/img/la-silla.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Rolling it out</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          For teams
          <Arrow />
        </span>
      </Link>
    </nav>
  );
}
