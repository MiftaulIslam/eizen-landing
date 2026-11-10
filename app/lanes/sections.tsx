import Link from "@/components/ui/Link";
import { Faq, type FaqItem } from "@/components/ui/Faq";
import { Arrow } from "@/components/parts/Arrow";
import { Collide } from "@/components/parts/Collide";
import { DemoLane } from "@/components/parts/DemoLane";
import { LaneMap } from "@/components/parts/LaneMap";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="sky">
        <img src="/assets/img/blanco-soar.webp" alt="Two observatory domes side by side under star trails" style={{ objectPosition: "50% 34%" }} />
      </div>
      <div className="inner">
        {" "}
        <div className="copy stack rise" style={{ "--s": "20px" }}>
          <p className="kick">Lanes</p>
          <h1 className="d1">Give each thread its own copy of the repo</h1>
          <p className="lead">Two agents in one folder read each other's half-finished edits, run each other's broken tests and fight over port 3000. A lane keeps them apart.</p>
          <div className="btns" style={{ marginTop: "24px" }}>
            <Button href="/download">Download for Windows</Button>
          </div>
        </div>
        {" "}
        <div className="stage rise" style={{ "--d": "120ms" }}>
          <div className="win rise" style={{ aspectRatio: "1440 / 900" }}>
            <video data-auto="" muted loop playsInline preload="none" poster="/assets/video/lane-run.webp" aria-label="Screen recording of a new lane starting and the agent beginning its work" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
              <source src="/assets/video/lane-run.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {" "}
      </div>
      <div style={{ height: "clamp(64px,8vw,120px)" }} />
    </section>
  );
}

export function TheMap() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">The map</p>
            <h2 className="d2">Agents on their own lines</h2>
          </div>
          {" "}
          <p className="lead">Every lane has its own branch, folder and port. A merge that would conflict stops before anything changes.</p>
          {" "}
        </div>
        <LaneMap />
      </div>
    </section>
  );
}

export function TwoAgentsOneFolder() {
  return (
    <section className="sec night deep tight">
      <div className="wrap">
        <Collide />
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">How it works</p>
            <h2 className="d2">From one button to a merged branch</h2>
          </div>
          {" "}
        </div>
        <div className="steps" data-steps="">
          {" "}
          <div className="pin">
            <div className="pics">
              <img src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="min(560px, 40vw)" alt="The composer on a new thread with the Lane button" loading="lazy" />
              <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="min(560px, 40vw)" alt="A thread running in its lane with the lane branch in the header" loading="lazy" />
              <img src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="min(560px, 40vw)" alt="The browser panel on the dev server for this lane" loading="lazy" />
              <img src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="min(560px, 40vw)" alt="A lane thread and its Tasks panel" loading="lazy" />
              <img src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes="min(560px, 40vw)" alt="The project menu with Merge and Remove lane" loading="lazy" />
            </div>
          </div>
          {" "}
          <div>
            <article className="step">
              {" "}
              <span className="n">01</span>
              {" "}
              <h3 className="d3">Press Lane and send</h3>
              {" "}
              <p>The Lane button sits next to the permission mode on a new thread and stays on until you press it again. The project folder must be the top of a git repository.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">02</span>
              {" "}
              <h3 className="d3">Eizen prepares the folder</h3>
              {" "}
              <p>A git worktree appears beside your repository on a new branch, starting from your last commit. Your .env files are copied in and node_modules is linked to the main checkout.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">03</span>
              {" "}
              <h3 className="d3">The agent gets a port</h3>
              {" "}
              <p>Each lane has its own dev server port, starting at 4100. Claude gets it as PORT and is told to stay inside its folder and commit on its branch.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">04</span>
              {" "}
              <h3 className="d3">Everything follows the lane</h3>
              {" "}
              <p>Files, the diff panel, the terminal, branch history and the browser all belong to that lane. You can open the others in split view and watch them side by side.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
            <article className="step">
              {" "}
              <span className="n">05</span>
              {" "}
              <h3 className="d3">Merge it or remove it</h3>
              {" "}
              <p>Commit with the usual button, then click the project name in the breadcrumb and choose Merge. A merge that would conflict changes nothing and names the files. Remove lane deletes the folder and keeps unmerged commits on the branch.</p>
              {" "}
              <img className="inline-pic" src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
              {" "}
            </article>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Try3Ways() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Try 3 ways</p>
            {" "}
            <h2 className="d2">Send one task three ways and keep the best</h2>
            {" "}
            <p className="body">Open the "..." menu on a new thread and choose Try 3 ways in lanes. The same message starts in three lanes, each with its own thread and port. You judge by using the three running apps, and it costs three times the usage.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live three" data-seq="1300,1600,1500" data-hold="2800">
              {" "}
              <div className="ui pad">
                <div className="row b">
                  <b>Attempt 1</b>
                  <span className="m">:4100</span>
                </div>
                <div className="tm">
                  <i className="b1" />
                  <i />
                  <i style={{ width: "70%" }} />
                  <i />
                </div>
                <div className="bar" style={{ marginTop: "10px" }}>
                  <i style={{ "--v": "1" }} />
                </div>
              </div>
              {" "}
              <div className="ui pad win2">
                <div className="row b">
                  <b>Attempt 2</b>
                  <span className="m">:4101</span>
                </div>
                <div className="tm">
                  <i className="b3" />
                  <i style={{ width: "82%" }} />
                  <i />
                  <i className="b2" />
                </div>
                <div className="bar" style={{ marginTop: "10px" }}>
                  <i style={{ "--v": "1" }} />
                </div>
              </div>
              {" "}
              <div className="ui pad">
                <div className="row b">
                  <b>Attempt 3</b>
                  <span className="m">:4102</span>
                </div>
                <div className="tm">
                  <i style={{ width: "38%", height: "14px" }} />
                  <i />
                  <i />
                  <i style={{ width: "60%" }} />
                </div>
                <div className="bar" style={{ marginTop: "10px" }}>
                  <i style={{ "--v": "1" }} />
                </div>
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

export function TryItHere() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split">
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            <p className="kick">Try it here</p>
            <h2 className="d2">Run a lane in this page</h2>
            <p className="body">The demo follows the same steps as the app. Tick the box to see how a conflict is handled.</p>
          </div>
          <DemoLane />
        </div>
      </div>
    </section>
  );
}

export function Limits() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Limits</p>
            <h2 className="d2">What a lane doesn’t separate</h2>
          </div>
          {" "}
          <p className="lead">A worktree separates files. Anything your app keeps outside its folder is still shared, and it pays to know which parts before you start five at once.</p>
          {" "}
        </div>
        {" "}
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">What happens</th>
                <th scope="col">What to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Databases</th>
                <td data-l="What happens">Every lane talks to the same database unless your config says otherwise.</td>
                <td data-l="What to do">Use a database per branch, such as a Neon branch, for anything that writes.</td>
              </tr>
              <tr>
                <th scope="row">Hard-coded ports</th>
                <td data-l="What happens">A dev server that ignores PORT will clash.</td>
                <td data-l="What to do">Point its port option at the one shown in the project menu.</td>
              </tr>
              <tr>
                <th scope="row">node_modules</th>
                <td data-l="What happens">Linked to the main checkout, so an install in a lane changes it for everyone.</td>
                <td data-l="What to do">Do dependency upgrades in a normal thread.</td>
              </tr>
              <tr>
                <th scope="row">Uncommitted work</th>
                <td data-l="What happens">A lane starts from the last commit.</td>
                <td data-l="What to do">Commit or stash first if the lane needs it.</td>
              </tr>
              <tr>
                <th scope="row">Codex, OpenCode, terminals</th>
                <td data-l="What happens">Claude gets the port automatically and these do not yet.</td>
                <td data-l="What to do">Set PORT yourself in those.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const QUESTIONS: FaqItem[] = [
  { q: "Why not run git worktree myself?", a: "You can. Eizen also copies env files, links dependencies, picks a port, tells the agent where it is, and removes links safely before deleting the folder, so a delete can never empty your main node_modules." },
  { q: "How much disk does a lane use?", a: "About the size of your checked-out files. Git history is shared between worktrees." },
  { q: "Can a lane start from another branch?", a: "Lanes start from the commit your main checkout is on. Switch branch there first." },
  { q: "What happens to the thread when I remove a lane?", a: "It leaves the sidebar. The transcript stays with your Claude history on disk." },
];

export function Questions() {
  return (
    <section className="sec night">
      <div className="wrap">
        <div className="sec-head solo rise">
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Questions</p>
            <h2 className="d2">About lanes</h2>
          </div>
        </div>
        <Faq id="lanes-faq" items={QUESTIONS} />
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/browser">
        <img src="/assets/img/rubin-sky.webp" srcSet="/assets/img/rubin-sky-s.webp 900w, /assets/img/rubin-sky-m.webp 1200w, /assets/img/rubin-sky.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Browser
          <Arrow />
        </span>
      </Link>
      <Link href="/compare">
        <img src="/assets/img/gemini-swirl.webp" srcSet="/assets/img/gemini-swirl-s.webp 900w, /assets/img/gemini-swirl-m.webp 1200w, /assets/img/gemini-swirl.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Against the alternatives</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Compare
          <Arrow />
        </span>
      </Link>
    </nav>
  );
}
