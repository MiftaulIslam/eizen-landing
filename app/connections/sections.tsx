import { Orbit } from "@/components/parts/Orbit";

export function Hero() {
  return (
    <section className="hero">
      <div className="sky">
        <img src="/assets/img/gemini-swirl.webp" alt="Star trails above the Gemini North telescope" style={{ objectPosition: "60% 60%" }} />
      </div>
      <div className="inner">
        {" "}
        <div className="copy stack rise" style={{ "--s": "20px" }}>
          <p className="kick">Connections</p>
          <h1 className="d1">Your tracker, your database and your cloud, inside the thread</h1>
          <p className="lead">Add a service, choose which Claude accounts may use it, and its tools appear in the next message.</p>
        </div>
        {" "}
        <div className="stage rise" style={{ "--d": "120ms" }}>
          <div className="win rise">
            <img src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="The Add connection dialog listing services" width="2200" height="1375" fetchPriority="high" />
          </div>
        </div>
        {" "}
      </div>
      <div style={{ height: "clamp(64px,8vw,120px)" }} />
    </section>
  );
}

export function OneClick() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">One click</p>
            <h2 className="d2">Fifteen presets</h2>
          </div>
          {" "}
          <p className="lead">Most connect with a normal sign-in. GitHub takes a token you create.</p>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">What the agent gets</th>
                <th scope="col">How you connect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">GitHub</th>
                <td data-l="What the agent gets">Repositories, issues, pull requests, Actions</td>
                <td data-l="How you connect">Paste a token</td>
              </tr>
              <tr>
                <th scope="row">Linear</th>
                <td data-l="What the agent gets">Issues and projects</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Atlassian</th>
                <td data-l="What the agent gets">Jira issues and Confluence pages</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Notion</th>
                <td data-l="What the agent gets">Pages and databases</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Gmail</th>
                <td data-l="What the agent gets">Read, search, label and draft email</td>
                <td data-l="How you connect">Your own Google client</td>
              </tr>
              <tr>
                <th scope="row">Neon</th>
                <td data-l="What the agent gets">Postgres projects, branches, queries</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Supabase</th>
                <td data-l="What the agent gets">Projects, tables, queries, logs</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Vercel</th>
                <td data-l="What the agent gets">Projects, deployments, build logs</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Cloudflare</th>
                <td data-l="What the agent gets">Workers, DNS, R2, D1 and the rest of its API</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">AWS</th>
                <td data-l="What the agent gets">API calls and documentation</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Apify</th>
                <td data-l="What the agent gets">Scrapers and automation Actors</td>
                <td data-l="How you connect">Sign in</td>
              </tr>
              <tr>
                <th scope="row">Figma</th>
                <td data-l="What the agent gets">Frames, styles, variables from the desktop app</td>
                <td data-l="How you connect">Local</td>
              </tr>
              <tr>
                <th scope="row">Context7</th>
                <td data-l="What the agent gets">Current docs for the libraries you use</td>
                <td data-l="How you connect">No account</td>
              </tr>
              <tr>
                <th scope="row">DeepWiki</th>
                <td data-l="What the agent gets">Answers about public GitHub repositories</td>
                <td data-l="How you connect">No account</td>
              </tr>
              <tr>
                <th scope="row">Microsoft Learn</th>
                <td data-l="What the agent gets">Official Microsoft and Azure docs</td>
                <td data-l="How you connect">No account</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tbl-note small">Vercel only lets approved apps sign in, so it may refuse. Neon recommends its MCP server for development and testing.</p>
      </div>
    </section>
  );
}

export function Hub() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split even">
          <div className="txt stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Hub</p>
            <h2 className="d2">Everything the agent can reach, in one list</h2>
            <p className="body">Turn a connection off and the next message no longer has it. A test button lists the tools a server offers before you rely on them.</p>
          </div>
          <Orbit />
        </div>
      </div>
    </section>
  );
}

export function ConnectTwoGitHubsOr() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">More than one of each</p>
            <h2 className="d2">Connect two GitHubs or two Linear workspaces</h2>
          </div>
          {" "}
          <p className="lead">Add the same service again and you get a second connection with its own login. Each one lists the Claude accounts that may use it.</p>
          {" "}
        </div>
        <div style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
          <div className="rise" data-matrix="">
            <table className="mx">
              <thead>
                <tr>
                  <th />
                  <th scope="col">Work</th>
                  <th scope="col">Client</th>
                  <th scope="col">Personal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">GitHub Work</th>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="GitHub Work for account 1" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="GitHub Work for account 2" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="GitHub Work for account 3" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">GitHub Personal</th>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="GitHub Personal for account 1" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="GitHub Personal for account 2" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="GitHub Personal for account 3" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Linear</th>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="Linear for account 1" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="Linear for account 2" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="Linear for account 3" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Neon staging</th>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="Neon staging for account 1" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="true" aria-label="Neon staging for account 2" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="Neon staging for account 3" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">AWS</th>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="AWS for account 1" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="AWS for account 2" />
                  </td>
                  <td>
                    <button type="button" aria-pressed="false" aria-label="AWS for account 3" />
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="small" style={{ marginTop: "12px" }}>
              Try the switches.{" "}
              <span className="mx-count">6</span>
              {" "}connections on, across three Claude accounts.
            </p>
          </div>
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Separate logins</h3>
            <p>GitHub Work and GitHub Personal hold different tokens.</p>
          </div>
          <div className="cell rise">
            <h3>Chosen per account</h3>
            <p>Your work Claude account gets the work tools only.</p>
          </div>
          <div className="cell rise">
            <h3>Separate tool names</h3>
            <p>A thread with both sees github and github-2 and you say which.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Custom() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Custom</p>
            {" "}
            <h2 className="d2">Any other MCP server</h2>
            {" "}
            <p className="body">Paste a remote URL or give a local command. Remote servers can use their own sign-in, a bearer token, or a client you registered yourself.</p>
            {" "}
            <ul className="ticks">
              <li>Test shows the tools a server offers before you rely on it.</li>
              <li>Open threads pick up changes on their next message once idle.</li>
            </ul>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise crop" style={{ "--ar": "16 / 9", "--pos": "50% 0" }}>
              <img src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="The connections dialog" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function WhereTheSecretsLive() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Where the secrets live</p>
            <h2 className="d2">Local, encrypted, per Windows user</h2>
          </div>
          <p className="lead rise">Tokens and client secrets stay in an encrypted file on this computer and never appear in the settings file. They are not part of your Claude account, so anyone else signed in to that account elsewhere can't see them.</p>
        </div>
      </div>
    </section>
  );
}
