import { Collide } from "@/components/parts/Collide";

export function Hero() {
  return (
    <section className="sec paper" style={{ paddingTop: "calc(var(--head) + clamp(64px,8vw,120px))" }}>
      <div className="wrap stack" style={{ "--s": "24px" }}>
        {" "}
        <p className="kick rise">Compare</p>
        {" "}
        <h1 className="d1 rise" style={{ maxWidth: "14em" }}>What you gain, and what you give up</h1>
        {" "}
        <p className="lead rise">Eizen is a poor fit for some teams. If you need autocomplete, central admin or work that keeps running with every laptop shut, start with the last three rows.</p>
        {" "}
      </div>
    </section>
  );
}

export function Eizen() {
  return (
    <section className="sec paper tight">
      <div className="wrap">
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Eizen</th>
                <th scope="col">Terminal agent alone</th>
                <th scope="col">AI editor</th>
                <th scope="col">Hosted agent</th>
                <th scope="col">Worktrees and scripts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Several agents on one repo</th>
                <td data-l="Eizen" className="us">A worktree per thread, set up for you</td>
                <td data-l="Terminal agent alone">One checkout unless you script it</td>
                <td data-l="AI editor">Usually one workspace per window</td>
                <td data-l="Hosted agent">Separate cloud environments</td>
                <td data-l="Worktrees and scripts">Yes, once you build it</td>
              </tr>
              <tr>
                <th scope="row">A dev server per agent</th>
                <td data-l="Eizen" className="us">Port assigned and passed in</td>
                <td data-l="Terminal agent alone">By hand</td>
                <td data-l="AI editor">By hand</td>
                <td data-l="Hosted agent">Inside the environment</td>
                <td data-l="Worktrees and scripts">Your script decides</td>
              </tr>
              <tr>
                <th scope="row">Seeing the running app</th>
                <td data-l="Eizen" className="us">A browser per thread that the agent drives</td>
                <td data-l="Terminal agent alone">Add a browser tool</td>
                <td data-l="AI editor">Varies</td>
                <td data-l="Hosted agent">Screenshots from the environment</td>
                <td data-l="Worktrees and scripts">Add a browser tool</td>
              </tr>
              <tr>
                <th scope="row">Real logins and OAuth</th>
                <td data-l="Eizen" className="us">Real browser view</td>
                <td data-l="Terminal agent alone">Depends on your tool</td>
                <td data-l="AI editor">Varies</td>
                <td data-l="Hosted agent">Limited by the environment</td>
                <td data-l="Worktrees and scripts">Depends on your tool</td>
              </tr>
              <tr>
                <th scope="row">Local services and databases</th>
                <td data-l="Eizen" className="us">Yes</td>
                <td data-l="Terminal agent alone">Yes</td>
                <td data-l="AI editor">Yes</td>
                <td data-l="Hosted agent">Only what you expose</td>
                <td data-l="Worktrees and scripts">Yes</td>
              </tr>
              <tr>
                <th scope="row">Why a line exists</th>
                <td data-l="Eizen" className="us">Ask this line</td>
                <td data-l="Terminal agent alone">Git blame</td>
                <td data-l="AI editor">Git blame</td>
                <td data-l="Hosted agent">The pull request</td>
                <td data-l="Worktrees and scripts">Git blame</td>
              </tr>
              <tr>
                <th scope="row">Overnight queue</th>
                <td data-l="Eizen" className="us">Night shift, within account headroom</td>
                <td data-l="Terminal agent alone">Cron and your own script</td>
                <td data-l="AI editor">Rarely</td>
                <td data-l="Hosted agent">Runs whenever you ask</td>
                <td data-l="Worktrees and scripts">Cron and your own script</td>
              </tr>
              <tr>
                <th scope="row">From your phone</th>
                <td data-l="Eizen" className="us">Paired to your PC</td>
                <td data-l="Terminal agent alone">Over SSH</td>
                <td data-l="AI editor">Rarely</td>
                <td data-l="Hosted agent">Yes</td>
                <td data-l="Worktrees and scripts">Over SSH</td>
              </tr>
              <tr>
                <th scope="row">Inline autocomplete</th>
                <td data-l="Eizen" className="us">None</td>
                <td data-l="Terminal agent alone">None</td>
                <td data-l="AI editor">Yes</td>
                <td data-l="Hosted agent">None</td>
                <td data-l="Worktrees and scripts">None</td>
              </tr>
              <tr>
                <th scope="row">Works with your PC off</th>
                <td data-l="Eizen" className="us">No</td>
                <td data-l="Terminal agent alone">No</td>
                <td data-l="AI editor">No</td>
                <td data-l="Hosted agent">Yes</td>
                <td data-l="Worktrees and scripts">No</td>
              </tr>
              <tr>
                <th scope="row">Team admin and SSO</th>
                <td data-l="Eizen" className="us">No</td>
                <td data-l="Terminal agent alone">Depends on your plan</td>
                <td data-l="AI editor">Often</td>
                <td data-l="Hosted agent">Often</td>
                <td data-l="Worktrees and scripts">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tbl-note small">Categories describe the usual setup and products change quickly. Check the current docs for anything you are seriously weighing.</p>
      </div>
    </section>
  );
}

export function SideBySide() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Side by side</p>
            <h2 className="d2">What happens when two agents share a folder</h2>
          </div>
          {" "}
        </div>
        <Collide />
      </div>
    </section>
  );
}

export function AgainstATerminalAgent() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Against a terminal agent</p>
            {" "}
            <h2 className="d2">Keep the agent and add a workbench</h2>
            {" "}
            <p className="body">Eizen drives the same CLIs and shares their sessions. You give up nothing in the terminal and gain lanes, a browser the agent can use, approvals in one place, branch history and a phone view.</p>
            {" "}
            <p className="small" style={{ marginTop: "12px" }}>Stay in the terminal if you run one agent at a time and like it that way.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="A thread in Eizen" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AgainstAnAIEditor() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Against an AI editor</p>
            {" "}
            <h2 className="d2">An editor is better when you are the one typing</h2>
            {" "}
            <p className="body">Inline completion and tight in-file editing are what editors do well, and Eizen has none of that. Eizen suits the times you hand over whole tasks and want to supervise several at once. Plenty of people will want both.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/editor.webp" srcSet="/assets/screens/editor-m.webp 1100w, /assets/screens/editor.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The built-in editor, for reading and small changes" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AgainstAHostedAgent() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Against a hosted agent</p>
            {" "}
            <h2 className="d2">Hosted agents run while your laptop is shut</h2>
            {" "}
            <p className="body">Eizen can't do that. It does run against your real local services, your own database and your own login sessions, and your code goes to one fewer company.</p>
            {" "}
            <p className="small" style={{ marginTop: "12px" }}>Choose a hosted agent if your work needs to continue with no machine of yours switched on.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Night shift queue" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AgainstYourOwnScripts() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Against your own scripts</p>
            {" "}
            <h2 className="d2">You could build most of the lane part</h2>
            {" "}
            <p className="body">A shell script can make a worktree. It takes more care to copy env files, link dependencies, assign ports, tell the agent, handle merge conflicts without leaving a mess, and delete a folder full of junctions without emptying your main checkout. Eizen does all of it.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The lane menu" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}
