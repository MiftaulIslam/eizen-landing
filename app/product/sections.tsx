import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";

export function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        {" "}
        <div className="copy stack rise" style={{ "--s": "20px" }}>
          <p className="kick">Tour</p>
          <h1 className="d1">Threads, diffs, terminals and a browser in one window</h1>
          <p className="lead">Move over the dots to see what each part of the window does.</p>
        </div>
        {" "}
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          <div className="spots win rise">
            <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1410px, 100vw)" alt="An Eizen window with a thread open" width="2200" height="1375" fetchPriority="high" />
            <button type="button" className="spot edge-l" style={{ left: "9%", top: "19%" }} aria-label="Threads with lamps">
              <i />
              <span className="tip">
                <b>Threads with lamps</b>
                Blue is working, amber is waiting for you, green has finished.
              </span>
            </button>
            <button type="button" className="spot edge-l" style={{ left: "28%", top: "7%" }} aria-label="Breadcrumb menus">
              <i />
              <span className="tip">
                <b>Breadcrumb menus</b>
                Click the computer, project or thread to jump to another one or act on it.
              </span>
            </button>
            <button type="button" className="spot " style={{ left: "78%", top: "7%" }} aria-label="Git, in the header">
              <i />
              <span className="tip">
                <b>Git, in the header</b>
                Branch, commit, and the state of GitHub Actions.
              </span>
            </button>
            <button type="button" className="spot edge-r" style={{ left: "93%", top: "7%" }} aria-label="Panels">
              <i />
              <span className="tip">
                <b>Panels</b>
                Diff, tasks, browser, terminal and editor each open beside the thread.
              </span>
            </button>
            <button type="button" className="spot up edge-l" style={{ left: "38%", top: "94%" }} aria-label="The composer">
              <i />
              <span className="tip">
                <b>The composer</b>
                Account, model, effort and permission mode, always in sight.
              </span>
            </button>
            <button type="button" className="spot edge-r" style={{ left: "91%", top: "2%" }} aria-label="Account meters">
              <i />
              <span className="tip">
                <b>Account meters</b>
                How much of each usage window every account has left.
              </span>
            </button>
          </div>
          <div className="spot-list">
            <ul className="ticks">
              <li>
                <b>Threads with lamps.</b>
                {" "}Blue is working, amber is waiting for you, green has finished.
              </li>
              <li>
                <b>Breadcrumb menus.</b>
                {" "}Click the computer, project or thread to jump to another one or act on it.
              </li>
              <li>
                <b>Git, in the header.</b>
                {" "}Branch, commit, and the state of GitHub Actions.
              </li>
              <li>
                <b>Panels.</b>
                {" "}Diff, tasks, browser, terminal and editor each open beside the thread.
              </li>
              <li>
                <b>The composer.</b>
                {" "}Account, model, effort and permission mode, always in sight.
              </li>
              <li>
                <b>Account meters.</b>
                {" "}How much of each usage window every account has left.
              </li>
            </ul>
          </div>
        </div>
        {" "}
      </div>
      <div style={{ height: "clamp(64px,8vw,120px)" }} />
    </section>
  );
}

export function Composer() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Composer</p>
            {" "}
            <h2 className="d2">Steer a running agent or queue the next message</h2>
            {" "}
            <p className="body">While an agent works, Enter sends your message straight in or holds it for the end of the turn, whichever you set as the default. Ctrl+Enter does the other one.</p>
            {" "}
            <ul className="ticks">
              <li>
                <b>@</b>
                {" "}finds files and folders in the project.
              </li>
              <li>
                <b>/</b>
                {" "}lists the commands the agent knows.
              </li>
              <li>Paste or drop images and files.</li>
              <li>Select text in the thread and ask about it, or branch a side chat from there.</li>
            </ul>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="800,1400,1400,1200" data-hold="2200">
              <div className="ui pad">
                {" "}
                <div className="row">
                  <i className="dot mv" />
                  <b>Working on the export button</b>
                </div>
                {" "}
                <div className="ui pad a2" style={{ marginTop: "12px", background: "var(--ui2)" }}>
                  <div className="row b">
                    <span className="m">Queued for the end of this turn</span>
                    <span className="ubtn">Send now</span>
                  </div>
                  Also add the date to the file name
                </div>
                {" "}
                <div className="ui pad a4" style={{ marginTop: "8px", background: "var(--ui2)", borderColor: "var(--mv)" }}>
                  <div className="m">Sent straight in</div>
                  Use the same formatter as the table
                </div>
                {" "}
                <div className="dl-input" style={{ marginTop: "12px", color: "var(--ut3)" }}>
                  <span data-type="1">Enter queues. Ctrl+Enter sends now</span>
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

export function ReadWhatItDid() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="stepper" data-stepper="5200">
          {" "}
          <div role="tablist">
            <button type="button" role="tab" className="st-tab">
              <b>Read what it did</b>
              <span>Every tool call collapses into a line you can open.</span>
            </button>
            <button type="button" role="tab" className="st-tab">
              <b>Check the sub agents</b>
              <span>The Tasks panel lists each agent with its tokens and output.</span>
            </button>
            <button type="button" role="tab" className="st-tab">
              <b>Review the diff</b>
              <span>See what changed before you commit, per repository.</span>
            </button>
            <button type="button" role="tab" className="st-tab">
              <b>Ask about a selection</b>
              <span>Select text in a reply to quote it, or branch a side chat.</span>
            </button>
          </div>
          {" "}
          <div className="st-panes">
            <div className="st-pane">
              <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="A thread" loading="lazy" />
            </div>
            <div className="st-pane">
              <img src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The Tasks panel" loading="lazy" />
            </div>
            <div className="st-pane">
              <img src="/assets/screens/diff.webp" srcSet="/assets/screens/diff-m.webp 1100w, /assets/screens/diff.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The diff panel" loading="lazy" />
            </div>
            <div className="st-pane">
              <img src="/assets/screens/selection.webp" srcSet="/assets/screens/selection-m.webp 1100w, /assets/screens/selection.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="A selection with Ask and Start side chat" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Usage() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Usage</p>
            {" "}
            <h2 className="d2">See what each model and each agent used</h2>
            {" "}
            <p className="body">The new-thread screen shows tokens for today, 7 days and 30 days, your most used model and what those tokens would cost at API prices. The Tasks panel breaks a thread down by sub agent.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The new-thread screen with token totals and charts below the composer" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Panels() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Panels</p>
            <h2 className="d2">Everything opens beside the thread</h2>
          </div>
          {" "}
        </div>
        <div className="reel">
          <figure className="w2">
            <img src="/assets/screens/diff.webp" srcSet="/assets/screens/diff-m.webp 1100w, /assets/screens/diff.webp 2200w" sizes="clamp(320px, 52vw, 860px)" alt="Uncommitted changes in the diff panel" loading="lazy" />
            <figcaption>
              <b>Diff.</b>
              {" "}See what changed before you commit, per repository.
            </figcaption>
          </figure>
          <figure className="">
            <img src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="clamp(280px, 38vw, 620px)" alt="Tasks panel" loading="lazy" />
            <figcaption>
              <b>Tasks.</b>
              {" "}Sub agents and background commands, with tokens and output.
            </figcaption>
          </figure>
          <figure className="w2">
            <img src="/assets/screens/editor.webp" srcSet="/assets/screens/editor-m.webp 1100w, /assets/screens/editor.webp 2200w" sizes="clamp(320px, 52vw, 860px)" alt="The built-in code editor" loading="lazy" />
            <figcaption>
              <b>Editor.</b>
              {" "}Monaco, with a file explorer and search.
            </figcaption>
          </figure>
          <figure className="">
            <img src="/assets/screens/history.webp" srcSet="/assets/screens/history-m.webp 1100w, /assets/screens/history.webp 2200w" sizes="clamp(280px, 38vw, 620px)" alt="Branch history" loading="lazy" />
            <figcaption>
              <b>Branch history.</b>
              {" "}Every turn, as a diff you can restore.
            </figcaption>
          </figure>
          <figure className="">
            <img src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="clamp(280px, 38vw, 620px)" alt="Settings" loading="lazy" />
            <figcaption>
              <b>Settings.</b>
              {" "}Searchable, with editable shortcuts and eleven colour schemes.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Section6() {
  return (
    <section className="sec night tight">
      <div className="wrap">
        <div className="facts" style={{ "--n": "4" }}>
          <div className="rise">
            <b>3</b>
            <span>agent CLIs: Claude Code, Codex and OpenCode</span>
          </div>
          <div className="rise">
            <b>3</b>
            <span>threads side by side in split view</span>
          </div>
          <div className="rise">
            <b>6</b>
            <span>thread browsers kept loaded at once</span>
          </div>
          <div className="rise">
            <b>15</b>
            <span>connection presets, plus any MCP server</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Git() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Git</p>
            <h2 className="d2">Commit, branch and open the pull request from here</h2>
          </div>
          {" "}
          <p className="lead">The usual git work stays in the window, including the parts people go to GitHub for.</p>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Commit</h3>
            <p>Commit with your own message, or have one written from the diff.</p>
          </div>
          <div className="cell rise">
            <h3>Branches</h3>
            <p>Switch, create and delete. A merge preview lists what would conflict.</p>
          </div>
          <div className="cell rise">
            <h3>Pull requests</h3>
            <p>Write the title and body from the branch, then open it.</p>
          </div>
          <div className="cell rise">
            <h3>GitHub Actions</h3>
            <p>A spinner in the header follows the runs on your branch.</p>
          </div>
          <div className="cell rise">
            <h3>Repositories</h3>
            <p>Projects with several checkouts get one view of all of them.</p>
          </div>
          <div className="cell rise">
            <h3>Branch history</h3>
            <p>A snapshot after every turn, kept outside your repository.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Accounts() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Accounts</p>
            {" "}
            <h2 className="d2">Keep work and personal plans side by side</h2>
            {" "}
            <p className="body">Add every Claude account you pay for and pick one per thread. The meters at the top show what's left in each usage window. New threads can go to whichever account has the most room.</p>
            {" "}
            <p className="small" style={{ marginTop: "16px" }}>Relay can move a thread to another account at a limit. It's off by default, because rotating between personal accounts may conflict with a plan's terms.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="cycle" data-cycle="4200">
              {" "}
              <div className="win">
                <div className="slides">
                  <img src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Usage across accounts" loading="lazy" />
                  <img src="/assets/screens/settings.webp" srcSet="/assets/screens/settings-m.webp 1100w, /assets/screens/settings.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Settings page" loading="lazy" />
                  <img src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Connections dialog" loading="lazy" />
                </div>
              </div>
              {" "}
              <div className="cycle-caps">
                <button type="button">Usage</button>
                <button type="button">Settings</button>
                <button type="button">Connections</button>
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

export function BuiltInGuide() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Built-in guide</p>
            <h2 className="d2">Ask the app how the app works</h2>
          </div>
          <p className="lead rise">Eizen ships with a user guide that the agent can read. Ask in any thread how to add an account or where the logs live, and it answers from the guide using the labels you see on screen.</p>
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/lanes">
        <img src="/assets/img/blanco-soar.webp" srcSet="/assets/img/blanco-soar-s.webp 900w, /assets/img/blanco-soar-m.webp 1200w, /assets/img/blanco-soar.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Lanes
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
