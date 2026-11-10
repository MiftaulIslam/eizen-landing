import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <img className="bg" src="/assets/img/la-silla.webp" alt="A row of observatory domes along a snowy ridge at night" style={{ objectPosition: "30% 70%" }} />
      {" "}
      <div className="scrim left" />
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">For teams</p>
          {" "}
          <h1 className="d1">How a team adopts Eizen, from the first install to the daily merge</h1>
          {" "}
          <p className="lead">One person sets it up on one machine and everyone else imports a file.</p>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function TheExample() {
  return (
    <section className="sec night tight">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">The example</p>
            <h2 className="d2">Harbor, a freight billing company</h2>
          </div>
          <div className="stack rise">
            <p className="lead">Harbor is invented for this page: nine engineers, a web app, an API and a lot of overdue invoices. The steps are what the app really does, and the screens come from a demo workspace set up this way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StartToFinish() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Start to finish</p>
            <h2 className="d2">Ten steps from install to routine</h2>
          </div>
          {" "}
        </div>
        <div className="steps" data-steps="">
          {" "}
          <div className="pin">
            <div className="pics">
              <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="min(560px, 40vw)" alt="A thread in the harbor-web project" loading="lazy" />
              <img src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="min(560px, 40vw)" alt="The first screen after setup" loading="lazy" />
              <img src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="min(560px, 40vw)" alt="Settings" loading="lazy" />
              <img src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes="min(560px, 40vw)" alt="The project menu" loading="lazy" />
              <img src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="min(560px, 40vw)" alt="Settings for a project" loading="lazy" />
              <img src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="min(560px, 40vw)" alt="The Add connection dialog" loading="lazy" />
              <img src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="min(560px, 40vw)" alt="A lane running with its browser open" loading="lazy" />
              <img src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="min(560px, 40vw)" alt="Export and import in settings" loading="lazy" />
              <img src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes="min(560px, 40vw)" alt="The Night shift queue" loading="lazy" />
              <img src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="min(560px, 40vw)" alt="Tasks panel" loading="lazy" />
            </div>
          </div>
          {" "}
          <div>
            <article className="step">
              {" "}
              <span className="n">01</span>
              {" "}
              <h3 className="d3">Pick one team and one repository</h3>
              {" "}
              <p>Start where parallel work already hurts: a repo with a queue of small tickets and a test suite you trust. Harbor chose the billing web app.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">02</span>
              {" "}
              <h3 className="d3">Install on one machine</h3>
              {" "}
              <p>Run the setup file. A checklist installs Claude Code, signs you in and checks Git, with no terminal involved. Codex, OpenCode and GitHub sign-in are optional.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">03</span>
              {" "}
              <h3 className="d3">Add the accounts you pay for</h3>
              {" "}
              <p>Add each Claude plan under Settings. Choose a default for new threads, or let new threads go to whichever account has the most room. Each engineer can do this with their own plan.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">04</span>
              {" "}
              <h3 className="d3">Add the repositories</h3>
              {" "}
              <p>Add each repository as a project. Lanes need the project folder to be the top of a git repository, so a folder holding several checkouts works better as one project per checkout.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">05</span>
              {" "}
              <h3 className="d3">Set the limits</h3>
              {" "}
              <p>Decide how much the agent may do unattended.</p>
              {" "}
              <ul className="ticks">
                <li>
                  <b>Permission mode.</b>
                  {" "}Start on Ask before edits.
                </li>
                <li>
                  <b>Safety net.</b>
                  {" "}Turn on Ask before risky commands in every mode.
                </li>
                <li>
                  <b>Protected files.</b>
                  {" "}For example .env*, migrations/** and infra/**.
                </li>
                <li>
                  <b>Project checks.</b>
                  {" "}{"pnpm typecheck && pnpm test, with three tries."}
                </li>
              </ul>
              {" "}
              <img className="inline-pic" src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">06</span>
              {" "}
              <h3 className="d3">Connect the tools</h3>
              {" "}
              <p>Add the tracker, GitHub and the database. Give database connections to the accounts that need them and to nobody else. Harbor uses a Neon branch per lane for anything that writes.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">07</span>
              {" "}
              <h3 className="d3">Spend a week on lanes</h3>
              {" "}
              <p>Run two lanes at once on real tickets, then three. Commit in the lane and merge from the breadcrumb. This is where a team finds out which services are still shared between lanes.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">08</span>
              {" "}
              <h3 className="d3">Share the setup</h3>
              {" "}
              <p>Export settings from the lead's machine. The file holds preferences, projects, their checks and schedules. Teammates import it and add their own accounts and tokens, which the file never contains.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">09</span>
              {" "}
              <h3 className="d3">Settle into a daily rhythm</h3>
              {" "}
              <p>Read what ran overnight, start lanes from the day's tickets, merge what passes the checks and queue the slow jobs for tonight. Non-engineers comment through review links.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">10</span>
              {" "}
              <h3 className="d3">Check what it costs</h3>
              {" "}
              <p>Usage shows tokens per day and per model, with cost at API prices. The Tasks panel shows which sub agents used what, which tells you where a smaller model would do.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function SharingTheSetup() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Sharing the setup</p>
            {" "}
            <h2 className="d2">One file, and each person keeps their own keys</h2>
            {" "}
            <p className="body">The lead exports settings once. Everyone imports the same preferences, projects, checks and schedules, then signs in with their own accounts.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="800,1200,1100,1100" data-hold="2600">
              <div className="ui pad" style={{ display: "grid", gap: "12px" }}>
                {" "}
                <div className="row b">
                  <b>eizen-settings-2026-11-10.json</b>
                  <span className="m">Preferences, projects, checks, schedules</span>
                </div>
                {" "}
                <div className="row a2">
                  <i className="dot ok" />
                  <span className="grow">Priya imported it</span>
                  <span className="m">Adds their own accounts and tokens</span>
                </div>
                <div className="row a3">
                  <i className="dot ok" />
                  <span className="grow">Tomasz imported it</span>
                  <span className="m">Adds their own accounts and tokens</span>
                </div>
                <div className="row a4">
                  <i className="dot ok" />
                  <span className="grow">Maya imported it</span>
                  <span className="m">Adds their own accounts and tokens</span>
                </div>
                {" "}
                <div className="m" style={{ color: "var(--hd)" }}>Tokens never leave the machine they were entered on</div>
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

export function WhoDoesWhat() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Who does what</p>
            <h2 className="d2">What each person touches</h2>
          </div>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">Role</th>
                <th scope="col">Sets up</th>
                <th scope="col">Uses day to day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tech lead</th>
                <td data-l="Sets up">Projects, checks, protected files, the shared settings file</td>
                <td data-l="Uses day to day">Reviews merges, reads the Night shift summary</td>
              </tr>
              <tr>
                <th scope="row">Engineer</th>
                <td data-l="Sets up">Their own accounts and tokens</td>
                <td data-l="Uses day to day">Lanes, the browser, Ask this line</td>
              </tr>
              <tr>
                <th scope="row">Designer</th>
                <td data-l="Sets up">Nothing, or their own install</td>
                <td data-l="Uses day to day">Right-click to change, compare with a design</td>
              </tr>
              <tr>
                <th scope="row">Product manager</th>
                <td data-l="Sets up">Nothing</td>
                <td data-l="Uses day to day">Comments through review links, meeting summaries</td>
              </tr>
              <tr>
                <th scope="row">Client</th>
                <td data-l="Sets up">Nothing</td>
                <td data-l="Uses day to day">A review link that expires</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ANormalWeek() {
  return (
    <section className="full">
      {" "}
      <video className="bg" data-auto="" muted loop playsInline preload="none" poster="/assets/video/moon-pass.webp" aria-label="Time-lapse of the moon crossing the sky beside an observatory dome">
        <source src="/assets/video/moon-pass.mp4" type="video/mp4" />
      </video>
      {" "}
      <div className="scrim low" />
      {" "}
      <button type="button" className="vid-toggle" data-video-toggle="">Pause</button>
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">A normal week</p>
          {" "}
          <h2 className="d2">Mornings start with what ran overnight</h2>
          {" "}
          <p className="lead">Harbor queues the slow jobs at the end of the day: test backfills, dependency work and small refactors. By morning there is a list of what finished, what needs a decision and what was left waiting.</p>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function AWeekAtHarbor() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">A week at Harbor</p>
            <h2 className="d2">Where the time goes</h2>
          </div>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Morning</th>
                <th scope="col">Afternoon</th>
                <th scope="col">Evening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td data-l="Morning">Planning meeting, recorded and transcribed</td>
                <td data-l="Afternoon">Three lanes from the action items</td>
                <td data-l="Evening">Queue test backfill</td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td data-l="Morning">Merge what passed overnight</td>
                <td data-l="Afternoon">Try 3 ways on the export redesign</td>
                <td data-l="Evening">Queue date library upgrade</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td data-l="Morning">Review link goes to the client</td>
                <td data-l="Afternoon">Comments become messages to the agent</td>
                <td data-l="Evening">Nothing queued</td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td data-l="Morning">Ask this line on a confusing retry</td>
                <td data-l="Afternoon">Fix it in a lane, with the original reason in view</td>
                <td data-l="Evening">Queue flaky test fixes</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td data-l="Morning">Check usage by model</td>
                <td data-l="Afternoon">Move routine work to a smaller model</td>
                <td data-l="Evening">Close the week's lanes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function HowItHelps() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">How it helps</p>
            <h2 className="d2">What changes compared with what you run today</h2>
          </div>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Parallel work stops colliding</h3>
            <p>Every thread has its own folder and branch, so reviewing one change no longer means untangling three.</p>
          </div>
          <div className="cell rise">
            <h3>Review happens against a running app</h3>
            <p>The agent checks the page itself, and you pick elements and record bugs in the same window.</p>
          </div>
          <div className="cell rise">
            <h3>You can still find out why</h3>
            <p>Six months on, a line still points at the conversation that produced it.</p>
          </div>
          <div className="cell rise">
            <h3>Spare plan capacity gets used</h3>
            <p>Night shift runs in hours that would otherwise go unused.</p>
          </div>
          <div className="cell rise">
            <h3>Rules carry over</h3>
            <p>A rule said once ends up in the project file for every later thread.</p>
          </div>
          <div className="cell rise">
            <h3>You keep your CLIs</h3>
            <p>Claude Code, Codex and OpenCode keep working in a terminal, with the same sessions.</p>
          </div>
        </div>
        {" "}
        <p style={{ marginTop: "32px" }}>
          <Link className="lnk" href="/compare">
            Compare with other tools
            <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}

export function Limits() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Limits</p>
            <h2 className="d2">What Eizen doesn’t do for a team yet</h2>
            <p className="body">If any of these is a requirement today, plan around it before you start.</p>
          </div>
          <ul className="ticks rise">
            <li>
              <b>No admin console.</b>
              {" "}Settings are shared by file, and nothing enforces them.
            </li>
            <li>
              <b>No single sign-on.</b>
              {" "}People use their own provider accounts.
            </li>
            <li>
              <b>No shared threads.</b>
              {" "}A thread belongs to one computer.
            </li>
            <li>
              <b>No central audit log.</b>
              {" "}Remote activity is listed per machine.
            </li>
            <li>
              <b>Windows first.</b>
              {" "}Windows 10 and 11 are what we build and test.
            </li>
            <li>
              <b>Needs the PC on.</b>
              {" "}Everything runs on it.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AgainstTheAlternatives() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/compare">
        <img src="/assets/img/gemini-swirl.webp" srcSet="/assets/img/gemini-swirl-s.webp 900w, /assets/img/gemini-swirl-m.webp 1200w, /assets/img/gemini-swirl.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Against the alternatives</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Compare
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

export function StartWithOneTeam() {
  return (
    <section className="final night deep">
      {" "}
      <div className="wrap grid2">
        {" "}
        <div className="stack rise" style={{ "--s": "20px" }}>
          {" "}
          <h2 className="d2">Start with one team and one repository</h2>
          {" "}
          <p className="lead">The setup checklist handles Claude Code, sign-in and Git, so you won't need a terminal.</p>
          {" "}
          <div className="btns" style={{ marginTop: "16px" }}>
            <Link className="btn fill" href="/download">Download for Windows</Link>
            <Link className="btn line" href="/teams">Plan a team rollout</Link>
          </div>
          {" "}
        </div>
        {" "}
        <div className="bars rise" data-bars="" aria-hidden="true">
          <div className="bar">
            <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
            <img src="/assets/img/kitt-peak.webp" srcSet="/assets/img/kitt-peak-s.webp 900w, /assets/img/kitt-peak-m.webp 1200w, /assets/img/kitt-peak.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
          </div>
          <div className="bar">
            <img src="/assets/img/rubin-sky.webp" srcSet="/assets/img/rubin-sky-s.webp 900w, /assets/img/rubin-sky-m.webp 1200w, /assets/img/rubin-sky.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
            <img src="/assets/img/la-silla.webp" srcSet="/assets/img/la-silla-s.webp 900w, /assets/img/la-silla-m.webp 1200w, /assets/img/la-silla.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
          </div>
          <div className="bar">
            <img src="/assets/img/blanco-soar.webp" srcSet="/assets/img/blanco-soar-s.webp 900w, /assets/img/blanco-soar-m.webp 1200w, /assets/img/blanco-soar.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
            <img src="/assets/img/gemini-swirl.webp" srcSet="/assets/img/gemini-swirl-s.webp 900w, /assets/img/gemini-swirl-m.webp 1200w, /assets/img/gemini-swirl.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(470px, 32vw)" alt="" loading="lazy" />
          </div>
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
