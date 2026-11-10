import Link from "@/components/ui/Link";
import { Arrow } from "@/components/parts/Arrow";
import { FlowLine } from "@/components/parts/FlowLine";
import { NightDial } from "@/components/parts/NightDial";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <video className="bg" data-auto="" muted loop playsInline preload="none" poster="/assets/video/red-lamp.webp" aria-label="Time-lapse of a small observatory lit by red lamps under a moving sky">
        <source src="/assets/video/red-lamp-m.mp4" type="video/mp4" media="(max-width: 800px)" />
        <source src="/assets/video/red-lamp.mp4" type="video/mp4" />
      </video>
      {" "}
      <div className="scrim left" />
      {" "}
      <button type="button" className="vid-toggle" data-video-toggle="">Pause</button>
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">Automation</p>
          {" "}
          <h1 className="d1">Let it work while you sleep, and read the results at breakfast</h1>
          {" "}
          <p className="lead">Observatories light their walkways red so nobody loses their night vision, and the instruments keep working until morning. Night shift is the same arrangement for your Claude accounts.</p>
          {" "}
          <div className="btns" style={{ marginTop: "32px" }}>
            <Button href="/download">Download for Windows</Button>
          </div>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function NightShift() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Night shift</p>
            {" "}
            <h2 className="d2">A queue that waits for spare headroom</h2>
            {" "}
            <p className="body">Add tasks with a project, a prompt, a permission mode, one account and a model. When the window opens, Eizen starts them in order, one at a time per project, as long as that account is under both limits.</p>
            {" "}
            <ul className="ticks">
              <li>
                <b>Window.</b>
                {" "}23:00 to 07:00 local time by default.
              </li>
              <li>
                <b>Headroom.</b>
                {" "}5-hour use under 50% and weekly use under 80% by default.
              </li>
              <li>
                <b>One account per task.</b>
                {" "}A task never moves to another account, even with Relay on.
              </li>
              <li>
                <b>Approvals.</b>
                {" "}A task that waits too long on a prompt, 15 minutes by default, is stopped and reported.
              </li>
            </ul>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Three queued Night shift tasks and their settings" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function HowANightRuns() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">How a night runs</p>
            <h2 className="d2">Move the sliders and watch the queue</h2>
          </div>
          {" "}
          <p className="lead">The hand sweeps a night. Tasks run inside the red arc, and wait whenever the account is over either limit.</p>
          {" "}
        </div>
        <NightDial />
      </div>
    </section>
  );
}

export function InTheMorning() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">In the morning</p>
            <h2 className="d2">A summary of what happened to every task</h2>
          </div>
          {" "}
          <p className="lead">A card in Schedules, and a desktop notification when the window closes. Quiet hours and phone alerts are respected.</p>
          {" "}
        </div>
        {" "}
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">Result</th>
                <th scope="col">What you see</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Done</th>
                <td data-l="What you see">Files changed, tokens used, the last message, and a link to the thread</td>
              </tr>
              <tr>
                <th scope="row">Needed approval</th>
                <td data-l="What you see">What it was waiting for when it was stopped</td>
              </tr>
              <tr>
                <th scope="row">Reached a limit</th>
                <td data-l="What you see">Left in the queue for the next night</td>
              </tr>
              <tr>
                <th scope="row">Interrupted</th>
                <td data-l="What you see">The app restarted during the task. It is reported and never re-run on its own</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Schedules() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Schedules</p>
            <h2 className="d2">Start a thread on a clock or on an event</h2>
          </div>
          {" "}
        </div>
        {" "}
        <div className="rise" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
          <div className="live trg" data-seq="900,1200,900,1200,900,1200" data-hold="1600">
            {" "}
            <div className="trg-src">
              <div className="ui t1">
                <b>Files change</b>
                <div className="m">src/**/*.ts</div>
              </div>
              <div className="ui t2">
                <b>A commit lands</b>
                <div className="m">main</div>
              </div>
              <div className="ui t3">
                <b>CI fails</b>
                <div className="m">GitHub Actions</div>
              </div>
            </div>
            {" "}
            <FlowLine />
            {" "}
            <div className="trg-out">
              {" "}
              <div className="ui pad a2">
                <div className="row">
                  <i className="dot ok" />
                  <b>Update the API docs</b>
                </div>
                <div className="m">Started by a file change</div>
              </div>
              {" "}
              <div className="ui pad a4">
                <div className="row">
                  <i className="dot ok" />
                  <b>Review the new commit</b>
                </div>
                <div className="m">Started by a commit on main</div>
              </div>
              {" "}
              <div className="ui pad a6">
                <div className="row">
                  <i className="dot mv" />
                  <b>Fix the failing build</b>
                </div>
                <div className="m">Started by CI</div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Once or on repeat</h3>
            <p>Every day, weekdays, chosen days, or every few minutes or hours.</p>
          </div>
          <div className="cell rise">
            <h3>When files change</h3>
            <p>Give patterns such as src/**/*.ts. Ignored files never count.</p>
          </div>
          <div className="cell rise">
            <h3>When a commit lands</h3>
            <p>On one branch or the current one. Claude's own commits are skipped.</p>
          </div>
          <div className="cell rise">
            <h3>When CI fails</h3>
            <p>Watches GitHub Actions and starts a thread on the failure.</p>
          </div>
          <div className="cell rise">
            <h3>Missed runs</h3>
            <p>Run when Eizen next starts, or skip.</p>
          </div>
          <div className="cell rise">
            <h3>After a restart</h3>
            <p>Eizen can start with Windows and wait in the tray.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectChecks() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Project checks</p>
            {" "}
            <h2 className="d2">The turn ends when your tests pass</h2>
            {" "}
            <p className="body">{"Give a project a command such as pnpm typecheck && pnpm test. After the agent edits files, Eizen runs it. A failure goes back to the agent with the output, up to the number of tries you set, and then comes to you."}</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="700,1100,1100,1100,1100" data-hold="2400">
              <div className="ui pad">
                {" "}
                <div className="row b">
                  <b>{"pnpm typecheck && pnpm test"}</b>
                  <span className="m">
                    <span className="sw">
                      <span className="o3">Try 1 of 3</span>
                      <span className="a3">Try 2 of 3</span>
                    </span>
                  </span>
                </div>
                {" "}
                <div className="log">
                  <div className="a1">The agent edited app.js</div>
                  <div className="a2" style={{ color: "var(--st)" }}>FAIL days overdue is NaN for paid invoices</div>
                  <div className="a3">The output went back to the agent</div>
                  <div className="a4">The agent fixed daysOverdue</div>
                  <div className="a5" style={{ color: "var(--ok)" }}>All 14 tests passed. The turn can finish</div>
                </div>
                {" "}
              </div>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AwayMode() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Away mode</p>
            <h2 className="d2">Get a ping when an agent needs you</h2>
          </div>
          <p className="lead rise">Point Eizen at a private ntfy topic and your phone hears when a turn finishes or an agent asks for approval. Quiet hours hold back the sound.</p>
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/meetings">
        <img src="/assets/img/rubin-dome.webp" srcSet="/assets/img/rubin-dome-s.webp 900w, /assets/img/rubin-dome-m.webp 1200w, /assets/img/rubin-dome.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Meetings
          <Arrow />
        </span>
      </Link>
      <Link href="/security">
        <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">What stays where</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Security
          <Arrow />
        </span>
      </Link>
    </nav>
  );
}
