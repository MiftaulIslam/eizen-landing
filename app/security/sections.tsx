import { Approval } from "@/components/parts/Approval";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <img className="bg" src="/assets/img/gemini-trails.webp" alt="Star trails circling one point above the Gemini North telescope" style={{ objectPosition: "50% 60%" }} />
      {" "}
      <div className="scrim low" />
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">Security</p>
          {" "}
          <h1 className="d1">Know exactly what stays and what leaves</h1>
          {" "}
          <p className="lead">Eizen has no account system and no server of its own in the path between you and your model provider.</p>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function TheBoundary() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">The boundary</p>
            <h2 className="d2">What crosses it</h2>
          </div>
          {" "}
          <p className="lead">Two kinds of traffic leave your computer in normal use. Everything inside the line stays there.</p>
          {" "}
        </div>
        <div className="live bound">
          <svg viewBox="0 0 1000 400" role="img" aria-label="Your computer holds threads, tokens, snapshots and audio. Prompts go out to the model provider and tool calls to connected services.">
            {" "}
            <rect className="bd-box" x="10" y="20" width="560" height="360" rx="18" />
            {" "}
            <text className="bd-s" x="34" y="52">This computer</text>
            {" "}
            <rect className="bd-item" x="34" y="62" width="330" height="62" rx="10" />
            <text className="bd-t" x="54" y="88">Threads</text>
            <text className="bd-s" x="54" y="110">The same files as the CLI</text>
            <rect className="bd-item" x="34" y="142" width="330" height="62" rx="10" />
            <text className="bd-t" x="54" y="168">Tokens</text>
            <text className="bd-s" x="54" y="190">Encrypted for your Windows user</text>
            <rect className="bd-item" x="34" y="222" width="330" height="62" rx="10" />
            <text className="bd-t" x="54" y="248">Branch history</text>
            <text className="bd-s" x="54" y="270">Stored outside your repository</text>
            <rect className="bd-item" x="34" y="302" width="330" height="62" rx="10" />
            <text className="bd-t" x="54" y="328">Meeting audio</text>
            <text className="bd-s" x="54" y="350">Transcribed here</text>
            {" "}
            <rect className="bd-item" x="694" y="70" width="290" height="96" rx="12" />
            <text className="bd-t" x="716" y="110">Model provider</text>
            <text className="bd-s" x="716" y="134">Prompts and code the agent reads</text>
            {" "}
            <rect className="bd-item" x="694" y="230" width="290" height="96" rx="12" />
            <text className="bd-t" x="716" y="270">Connected services</text>
            <text className="bd-s" x="716" y="294">Only the tools you added</text>
            {" "}
            <path className="flow" d="M380 120H694" />
            <path className="flow" d="M380 278H694" style={{ animationDuration: "2.1s" }} />
            {" "}
          </svg>
        </div>
      </div>
    </section>
  );
}

export function StaysOnThisComputer() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Stays on this computer</p>
            <h2 className="d2">Local by default</h2>
          </div>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">What</th>
                <th scope="col">Where</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Threads</th>
                <td data-l="Where">The same transcript files as the CLI</td>
                <td data-l="Notes">Your existing Claude history shows up in the app</td>
              </tr>
              <tr>
                <th scope="row">Settings</th>
                <td data-l="Where">Your Windows app data folder</td>
                <td data-l="Notes">Never includes tokens</td>
              </tr>
              <tr>
                <th scope="row">Connection tokens</th>
                <td data-l="Where">An encrypted file</td>
                <td data-l="Notes">Encrypted for your Windows user</td>
              </tr>
              <tr>
                <th scope="row">Branch history</th>
                <td data-l="Where">A snapshot store outside your repository</td>
                <td data-l="Notes">Has a storage limit you set</td>
              </tr>
              <tr>
                <th scope="row">Line origins</th>
                <td data-l="Where">A local database</td>
                <td data-l="Notes">Lasts after snapshots are cleared</td>
              </tr>
              <tr>
                <th scope="row">Meeting audio</th>
                <td data-l="Where">Your disk</td>
                <td data-l="Notes">Transcribed locally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function LeavesThisComputer() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Leaves this computer</p>
            <h2 className="d2">Only what you send</h2>
          </div>
          {" "}
          <p className="lead">Each of these happens because you set it up. Eizen itself sends no analytics.</p>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">What</th>
                <th scope="col">Goes to</th>
                <th scope="col">When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Prompts and the code an agent reads</th>
                <td data-l="Goes to">The model provider you chose</td>
                <td data-l="When">Every turn, as with the CLI</td>
              </tr>
              <tr>
                <th scope="row">Tool calls</th>
                <td data-l="Goes to">Each connected MCP service</td>
                <td data-l="When">When the agent uses that connection</td>
              </tr>
              <tr>
                <th scope="row">Meeting transcript and frames</th>
                <td data-l="Goes to">Claude</td>
                <td data-l="When">When a meeting finishes processing</td>
              </tr>
              <tr>
                <th scope="row">Remote access traffic</th>
                <td data-l="Goes to">Your own Cloudflare Tunnel</td>
                <td data-l="When">Only if you turn it on</td>
              </tr>
              <tr>
                <th scope="row">A dev server, to a reviewer</th>
                <td data-l="Goes to">Whoever holds the review link</td>
                <td data-l="When">Only if you create one</td>
              </tr>
              <tr>
                <th scope="row">Phone alerts</th>
                <td data-l="Goes to">The ntfy topic you chose</td>
                <td data-l="When">Only with away mode on</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Approvals() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Approvals</p>
            {" "}
            <h2 className="d2">You see the command before it runs</h2>
            {" "}
            <p className="body">A prompt shows the exact command and, when it is risky, what it could do. With the safety net on, force pushes and recursive deletes still stop and ask in every mode.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <Approval />
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function LimitingTheAgent() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Limiting the agent</p>
            <h2 className="d2">Controls for what an agent may do</h2>
          </div>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Permission modes</h3>
            <p>From asking before every edit to Bypass permissions, shown in the composer at all times.</p>
          </div>
          <div className="cell rise">
            <h3>Approvals</h3>
            <p>The exact command, and why it is risky when it is.</p>
          </div>
          <div className="cell rise">
            <h3>Risky command safety net</h3>
            <p>An optional setting that makes recursive deletes, force pushes and publishing stop and ask in every mode.</p>
          </div>
          <div className="cell rise">
            <h3>Learned rules</h3>
            <p>Requests you approve repeatedly are offered as rules. Risky commands are never offered.</p>
          </div>
          <div className="cell rise">
            <h3>Protected files</h3>
            <p>Patterns that agents can read and never edit, in Eizen or in the CLI.</p>
          </div>
          <div className="cell rise">
            <h3>Project checks</h3>
            <p>Your tests must pass before a turn that edited files can finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RemoteAccess() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Remote access</p>
            {" "}
            <h2 className="d2">Off until you turn it on</h2>
            {" "}
            <p className="body">Devices pair with a one-time link and hold their own token. Unpairing cuts them off, including any forwarded connections.</p>
            {" "}
            <ul className="ticks">
              <li>
                <b>Review links</b>
                {" "}use a random 128-bit token, stored hashed, for one port and one thread.
              </li>
              <li>
                <b>Guests</b>
                {" "}can reach nothing on the machine except that port.
              </li>
              <li>
                <b>Comments</b>
                {" "}are treated as untrusted and wait for you before reaching an agent.
              </li>
            </ul>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/img/rubin-dome.webp" srcSet="/assets/img/rubin-dome-s.webp 900w, /assets/img/rubin-dome-m.webp 1200w, /assets/img/rubin-dome.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Detail of an observatory dome at night" loading="lazy" style={{ aspectRatio: "16/10", objectFit: "cover" }} />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function BeCarefulWith() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise">
            <p className="kick">Be careful with</p>
            <h2 className="d2">The risks that come with the job</h2>
          </div>
          <ul className="ticks rise">
            <li>
              <b>Connections carry your access.</b>
              {" "}A database or cloud connection gives the agent what you can do, so keep approvals on and stay away from production.
            </li>
            <li>
              <b>Bypass permissions means what it says.</b>
              {" "}Use it in a lane, with the safety net on.
            </li>
            <li>
              <b>Web pages can contain instructions.</b>
              {" "}Anything an agent reads may try to steer it. Review links hold outside comments for that reason.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
