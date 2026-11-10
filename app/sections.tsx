import Link from "@/components/ui/Link";
import { Faq, type FaqItem } from "@/components/ui/Faq";
import { FeatureScenes } from "@/components/ui/FeatureScenes";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ApprovalScene, ChecksScene, ProtectedFilesScene, SafetyNetScene } from "@/components/scenes/security";
import { IconApproval, IconChecks, IconLock, IconSafetyNet } from "@/components/scenes/icons";
import { Approval } from "@/components/parts/Approval";
import { Arrow } from "@/components/parts/Arrow";
import { AskLine } from "@/components/parts/AskLine";
import { DemoLane } from "@/components/parts/DemoLane";
import { LaneMap } from "@/components/parts/LaneMap";
import { NightDial } from "@/components/parts/NightDial";
import { Orbit } from "@/components/parts/Orbit";
import { Pointer } from "@/components/parts/Pointer";
import { Tunnel } from "@/components/parts/Tunnel";
import { VectorField } from "@/components/parts/VectorField";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Hero() {
  return (
    <section className="hero">
      {" "}
      <div className="sky">
        {" "}
        <video data-auto="" muted loop playsInline preload="none" poster="/assets/video/sky-turns.webp" aria-label="Time-lapse of stars circling the sky above an observatory dome">
          <source src="/assets/video/sky-turns-m.mp4" type="video/mp4" media="(max-width: 800px)" />
          <source src="/assets/video/sky-turns.mp4" type="video/mp4" />
        </video>
        {" "}
        <button type="button" className="vid-toggle" data-video-toggle="">Pause</button>
        {" "}
      </div>
      {" "}
      <div className="inner">
        {" "}
        <div className="copy stack rise" style={{ "--s": "24px" }}>
          {" "}
          <h1 className="d1">Stop your coding agents overwriting each other</h1>
          {" "}
          <p className="lead">Eizen is a desktop app for Claude Code, Codex and OpenCode. Each thread gets its own git worktree, dev server port and browser, so several can work on one repo at once and you merge the ones that worked.</p>
          {" "}
          <div className="btns" style={{ marginTop: "32px" }}>
            <Button href="/download">Download for Windows</Button>
            <Button href="/teams" variant="outline">How a team rolls it out</Button>
          </div>
          {" "}
          <p className="note kick">Windows 10 and 11. Uses the accounts you already have.</p>
          {" "}
        </div>
        {" "}
        <div className="hero-cards live" aria-hidden="true" data-seq="1400,1500,1500,1700,1500,1700,1400" data-hold="3200">
          {" "}
          {/* data-stages: the step each stage starts at. data-states: what the lamp shows during it. */}
          <div className="ui hc" style={{ "--n": 0 }} data-stages="0,1,3,4,6" data-states="work,work,wait,work,done">
            <div className="hc-top">
              <i className="lamp" />
              <b className="trunc">Days overdue column</b>
              <span className="hc-file">
                <span className="sw">
                  <span className="o3">app.js</span>
                  <span className="a3 o4">Allow Bash?</span>
                  <span className="a4">npm test</span>
                </span>
              </span>
            </div>
            <div className="m">eizen/lane-5c1a87 on port 4100</div>
            <div className="st">
              <span className="sw">
                <span className="o1">Reading app.js</span>
                <span className="a1 o3">Editing app.js</span>
                <span className="a3 o4">Waiting for approval</span>
                <span className="a4 o6">Running the checks</span>
                <span className="a6">Checks passed</span>
              </span>
            </div>
            <div className="hc-track">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          {" "}
          <div className="ui hc" style={{ "--n": 1 }} data-stages="0,2,5" data-states="work,work,done">
            <div className="hc-top">
              <i className="lamp" />
              <b className="trunc">Status pills</b>
              <span className="hc-file">
                <span className="sw">
                  <span className="o2">app.js</span>
                  <span className="a2">localhost:4101</span>
                </span>
              </span>
            </div>
            <div className="m">eizen/lane-a48476 on port 4101</div>
            <div className="st">
              <span className="sw">
                <span className="o2">Editing app.js</span>
                <span className="a2 o5">Checking the page in its browser</span>
                <span className="a5">Ready to merge</span>
              </span>
            </div>
            <div className="hc-track">
              <i />
              <i />
              <i />
            </div>
          </div>
          {" "}
          <div className="ui hc" style={{ "--n": 2 }} data-stages="0,2,3,7" data-states="work,wait,work,done">
            <div className="hc-top">
              <i className="lamp" />
              <b className="trunc">Pre-ship review</b>
              <span className="hc-file">
                <span className="sw">
                  <span className="o2">app.js</span>
                  <span className="a2 o3">Allow Bash?</span>
                  <span className="a3">app.js</span>
                </span>
              </span>
            </div>
            <div className="m">eizen/lane-9bb061 on port 4102</div>
            <div className="st">
              <span className="sw">
                <span className="o2">Reading app.js</span>
                <span className="a2 o3">Waiting for approval</span>
                <span className="a3 o7">Two sub agents working</span>
                <span className="a7">Checks passed</span>
              </span>
            </div>
            <div className="hc-track">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          {" "}
        </div>
        {" "}
        <div className="stage rise" style={{ "--d": "120ms" }}>
          {" "}
          <div className="cycle" data-cycle="3800">
            {" "}
            <div className="win">
              <div className="slides">
                <img src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="An Eizen thread showing the invoice change it just made, with its lane branch in the header" fetchPriority="high" />
                <img src="/assets/screens/agents-tasks.webp" srcSet="/assets/screens/agents-tasks-m.webp 1100w, /assets/screens/agents-tasks.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="A thread beside the Tasks panel listing two finished sub agents" loading="lazy" fetchPriority="low" />
                <img src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="A thread beside its browser panel showing the running invoice page" loading="lazy" fetchPriority="low" />
                <img src="/assets/screens/history.webp" srcSet="/assets/screens/history-m.webp 1100w, /assets/screens/history.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="Branch history showing the diff of one turn" loading="lazy" fetchPriority="low" />
                <img src="/assets/screens/new-thread.webp" srcSet="/assets/screens/new-thread-m.webp 1100w, /assets/screens/new-thread.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1210px, 81vw)" alt="The new thread screen with token usage charts below the composer" loading="lazy" fetchPriority="low" />
              </div>
            </div>
            {" "}
            <div className="cycle-caps">
              <button type="button">A thread in its lane</button>
              <button type="button">Sub agents</button>
              <button type="button">Its own browser</button>
              <button type="button">Every turn saved</button>
              <button type="button">Usage</button>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}

export function WorksWith() {
  return (
    <section className="sec night tight">
      <div className="wrap">
        <div className="split even start">
          {" "}
          <p className="kick rise">Works with</p>
          {" "}
          <div className="stack rise" style={{ "--s": "12px" }}>
            {" "}
            <p className="d3">Claude Code, Codex and OpenCode</p>
            {" "}
            <p className="body">Eizen runs the agent CLIs you already use and reads the same sessions, so you can start a thread in the app and resume it in a terminal, or the other way round.</p>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AgentsWriteCodeFaster() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <p className="statement" data-words="">Agents write code faster than anyone can read it. Two of them in one checkout will undo each other's work before lunch, and a month later nobody can say why a line is there.</p>
      </div>
    </section>
  );
}

export function OneRepository() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">One repository</p>
            <h2 className="d2">Three lanes leave main. Two come back</h2>
          </div>
          {" "}
          <p className="lead">Each dot is an agent working on its own branch. A merge that would conflict stops before it touches anything.</p>
          {" "}
        </div>
        <LaneMap />
      </div>
    </section>
  );
}

// Heading words as spans, so they can rise in one after another. The text stays in the HTML.
function Words({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 && " "}
      <span className="wd" style={{ "--i": i }}>{word}</span>
    </span>
  ));
}

export function Lanes() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split">
          {" "}
          {/* data-sync: the beats light up in turn with the recording beside them (lib/effects/home.ts). */}
          <div className="txt stack rise lanes-txt" style={{ "--s": "20px" }} data-sync="0,10.5,17.5">
            {" "}
            <p className="kick">Lanes</p>
            {" "}
            <h2 className="d2 words">
              <Words text="One worktree, one port and one browser per thread" />
            </h2>
            {" "}
            <p className="body beat">Press Lane before you send. The thread starts in its own git worktree on its own branch, with your .env files copied in and node_modules shared with the main checkout. It gets a dev server port from 4100 up, and the agent is told to use it.</p>
            {" "}
            <ul className="ticks">
              <li className="beat">
                <b>Merge from the breadcrumb.</b>
                {" "}If it would conflict, nothing changes and Eizen names the files.
              </li>
              <li className="beat">
                <b>Try 3 ways.</b>
                {" "}One message goes to three lanes, and you keep whichever works best when you use it.
              </li>
            </ul>
            <p className="lanes-more" style={{ marginTop: "24px" }}>
              <ArrowLink href="/lanes">
                How lanes work
              </ArrowLink>
            </p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise" style={{ aspectRatio: "1440 / 900" }}>
              <video data-auto="" muted loop playsInline preload="none" poster="/assets/video/lane-run.webp" aria-label="Screen recording: a prompt is typed, Eizen creates a lane, and the agent starts working on its own branch" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src="/assets/video/lane-run.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function WhatEveryThreadGets() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">What every thread gets</p>
            <h2 className="d2">Six things that used to be your job</h2>
          </div>
          {" "}
        </div>
        <div className="bento">
          {" "}
          <article className="cardx rise" style={{ "--c": "7" }}>
            <h3>Its own folder and branch</h3>
            <p>A git worktree beside your repository, so two threads can't touch the same file.</p>
            <div className="demo">
              <div className="live" data-seq="500,500,600,600" data-hold="3200">
                <div className="ui pad">
                  <ul className="tree">
                    {" "}
                    <li>
                      <i className="dot ok" />
                      <span>harbor-web/</span>
                      <span className="n">main</span>
                    </li>
                    {" "}
                    <li className="a1">
                      <i className="dot" />
                      <span>.eizen-lanes/harbor-web/</span>
                    </li>
                    {" "}
                    <li className="a2" style={{ paddingLeft: "16px" }}>
                      <i className="dot mv" />
                      <span>5c1a87/</span>
                      <span className="n">eizen/lane-5c1a87</span>
                    </li>
                    {" "}
                    <li className="a3" style={{ paddingLeft: "16px" }}>
                      <i className="dot mv" />
                      <span>a48476/</span>
                      <span className="n">eizen/lane-a48476</span>
                    </li>
                    {" "}
                    <li className="a4" style={{ paddingLeft: "16px" }}>
                      <i className="dot mv" />
                      <span>9bb061/</span>
                      <span className="n">eizen/lane-9bb061</span>
                    </li>
                    {" "}
                  </ul>
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="cardx rise" style={{ "--c": "5", "--d": "60ms" }}>
            <h3>Its own port</h3>
            <p>Each lane gets the next free port, and the agent is told to use it.</p>
            <div className="demo">
              <div className="live" data-seq="400,1600,1600" data-hold="2400">
                <div className="ui pad">
                  <div className="row b">
                    <span className="m">PORT</span>
                    <span className="chip">
                      <span className="sw">
                        <span className="o2">First lane</span>
                        <span className="a2 o3">Second lane</span>
                        <span className="a3">Third lane</span>
                      </span>
                    </span>
                  </div>
                  <div className="port-big">
                    <span className="sw">
                      <span className="o2">4100</span>
                      <span className="a2 o3">4101</span>
                      <span className="a3">4102</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="cardx rise" style={{ "--c": "5" }}>
            <h3>Approvals that say why</h3>
            <p>The exact command, the reason it's risky, and a clock if you set one.</p>
            <div className="demo">
              <Approval />
            </div>
          </article>
          {" "}
          <article className="cardx rise" style={{ "--c": "7", "--d": "60ms" }}>
            <h3>Its own browser</h3>
            <p>The agent moves a visible pointer, reads the page and catches console errors.</p>
            <div className="demo">
              <div className="live ab" data-seq="500,900,1100,900,1100,1000" data-hold="1200">
                <div className="ui">
                  {" "}
                  <div className="mb-tabs">
                    <span className="on">Invoices</span>
                    <span>Shipments</span>
                  </div>
                  {" "}
                  <div className="mb-bar">http://localhost:4100/</div>
                  {" "}
                  <div className="mb-page" style={{ "--h": "200px", containerType: "inline-size" }}>
                    {" "}
                    <div className="mb-side">
                      <b>Harbor</b>
                      <span className="on">Invoices</span>
                      <span>Shipments</span>
                      <span>Carriers</span>
                    </div>
                    {" "}
                    <div className="mb-main">
                      <div className="mb-h">
                        Invoices
                        <span className="mb-new">New invoice</span>
                      </div>
                      {" "}
                      <table className="mb-t">
                        <tbody>
                          <tr>
                            <td>INV-20418</td>
                            <td>Northwind Foods</td>
                            <td>$12,840.00</td>
                            <td>
                              <span className="pill l">late</span>
                            </td>
                          </tr>
                          <tr>
                            <td>INV-20431</td>
                            <td>Calder Steel</td>
                            <td>$6,420.50</td>
                            <td>
                              <span className="pill o">open</span>
                            </td>
                          </tr>
                          <tr>
                            <td>INV-20437</td>
                            <td>Ostrava Glass</td>
                            <td>$3,189.00</td>
                            <td>
                              <span className="pill p">paid</span>
                            </td>
                          </tr>
                          <tr>
                            <td>INV-20452</td>
                            <td>Lindqvist Timber</td>
                            <td>$9,774.25</td>
                            <td>
                              <span className="pill o">open</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {" "}
                    <div className="mb-outline out1" style={{ right: "14px", top: "12px", width: "82px", height: "28px" }} />
                    <div className="mb-outline out2" style={{ left: "112px", right: "16px", top: "74px", height: "30px" }} />
                    <Pointer />
                    <div className="ab-chip a1">
                      <span className="sw">
                        <span className="o3">Claude: clicking New invoice</span>
                        <span className="a3 o5">Claude: reading the first row</span>
                        <span className="a5">Claude: taking a screenshot</span>
                      </span>
                    </div>
                    <div className="ab-err a6">1 console error</div>
                  </div>
                  {" "}
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="cardx rise" style={{ "--c": "6" }}>
            <h3>Every turn saved</h3>
            <p>A snapshot after each turn that you can read as a diff and restore.</p>
            <div className="demo">
              <div className="live" data-seq="900,900,900,900" data-hold="2400">
                <div className="ui pad">
                  {" "}
                  <div className="scrub at100">
                    <i style={{ left: "0" }} />
                    <i style={{ left: "25%" }} />
                    <i style={{ left: "50%" }} />
                    <i style={{ left: "75%" }} />
                    <i style={{ left: "100%" }} />
                    <b />
                  </div>
                  {" "}
                  <div className="diffl" style={{ marginTop: "10px" }}>
                    <div className="m">
                      <span className="sw">
                        <span className="o2">Turn 2: read the invoice data</span>
                        <span className="a2 o3">Turn 3: add the column</span>
                        <span className="a3 o4">Turn 4: fix the terms</span>
                        <span className="a4">Turn 5: the current files</span>
                      </span>
                    </div>
                    {" "}
                    <div className="d">- const TERMS_DAYS = 45</div>
                    <div className="a">+ const TERMS_DAYS = 30</div>
                    <div className="a a2">+ const DAY_MS = 86400000</div>
                    <div className="a a3">+ function daysOverdue(item, today)</div>
                  </div>
                  {" "}
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="cardx rise" style={{ "--c": "6", "--d": "60ms" }}>
            <h3>A count of what it used</h3>
            <p>Tokens for the thread and for each sub agent, while they run.</p>
            <div className="demo">
              <div className="live" data-seq="300" data-hold="5200">
                <div className="ui pad">
                  <div className="row b">
                    <b>app.js pre-ship review</b>
                    <span className="m">Total 271k</span>
                  </div>
                  <div className="meter">
                    <span className="trunc">Main thread</span>
                    <div className="bar">
                      <i style={{ "--v": "0.82", "--to": "0.82" }} />
                    </div>
                    <span className="m" style={{ textAlign: "right" }}>184k</span>
                  </div>
                  <div className="meter">
                    <span className="trunc">Money check</span>
                    <div className="bar">
                      <i style={{ "--v": "0.3", "--to": "0.3" }} />
                    </div>
                    <span className="m" style={{ textAlign: "right" }}>52k</span>
                  </div>
                  <div className="meter">
                    <span className="trunc">HTML escaping</span>
                    <div className="bar">
                      <i style={{ "--v": "0.2", "--to": "0.2" }} />
                    </div>
                    <span className="m" style={{ textAlign: "right" }}>35k</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
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
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            <p className="kick">Try it here</p>
            <h2 className="d2">Press the buttons</h2>
            <p className="body">This is the lane flow with the real steps in the real order. Turn Lane off to see what it prevents, or tick the box before you merge.</p>
          </div>
          {" "}
          <DemoLane />
          {" "}
        </div>
      </div>
    </section>
  );
}

export function AlsoInTheApp() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Also in the app</p>
            <h2 className="d2">The rest of the workbench</h2>
          </div>
          {" "}
        </div>
        {" "}
        <div className="index">
          <Link href="/product" data-peek="tour">
            <span className="t">Tour</span>
            <span className="s">Threads, diffs, terminal, editor and usage in one place</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
          </Link>
          <Link href="/browser" data-peek="browser">
            <span className="t">Browser</span>
            <span className="s">One real browser per thread, usable while it is off screen</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
          </Link>
          <Link href="/memory" data-peek="memory">
            <span className="t">Memory</span>
            <span className="s">Ask a line who wrote it, then tell the agent the rule once</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/ask-line.webp" srcSet="/assets/screens/ask-line-m.webp 1100w, /assets/screens/ask-line.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
          </Link>
          <Link href="/automation" data-peek="automation">
            <span className="t">Automation</span>
            <span className="s">Work that starts on a clock, on a commit or on spare headroom</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
          </Link>
          <Link href="/meetings" data-peek="meetings">
            <span className="t">Meetings</span>
            <span className="s">Transcribed on your computer, then handed to Claude</span>
            <Arrow />
            <img className="thumb" src="/assets/img/rubin-dome-s.webp" alt="" loading="lazy" />
          </Link>
          <Link href="/reach" data-peek="reach">
            <span className="t">Reach</span>
            <span className="s">Your PC does the work and you check in from anywhere</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/phone-thread.webp" alt="" loading="lazy" />
          </Link>
          <Link href="/connections" data-peek="connections">
            <span className="t">Connections</span>
            <span className="s">GitHub, Linear, Neon, Supabase, AWS and the rest</span>
            <Arrow />
            <img className="thumb" src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes="calc(100vw - 40px)" alt="" loading="lazy" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TheIdeaBehindIt() {
  return (
    <section className="full">
      {" "}
      <img className="bg" src="/assets/img/gemini-laser.webp" alt="Long exposure of star trails circling a fixed point above the Gemini North telescope, crossed by its laser beam" style={{ objectPosition: "40% 40%" }} loading="lazy" />
      {" "}
      <div className="scrim left" />
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">The idea behind it</p>
          {" "}
          <h2 className="d2">Star trails all turn around one point</h2>
          {" "}
          <p className="lead">Leave a camera open under a clear sky and each star sweeps an arc around the same spot. Agents rewrite your files all day, and we wanted the branch and the reason for each change to stay put in the same way.</p>
          {" "}
          <div className="btns" style={{ marginTop: "32px" }}>
            <ArrowLink href="/about">
              More on the idea
            </ArrowLink>
          </div>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function TheMaths() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split even">
          {" "}
          <div className="med rise">
            <div className="live field">
              <VectorField />
              <p className="ef-t" aria-live="off">Before the matrix</p>
            </div>
          </div>
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            <p className="kick">The maths</p>
            <h2 className="d2">An eigenvector is the direction a matrix can stretch and cannot turn</h2>
            <p className="body">Watch the arrows. The matrix swings most of them to a new heading. The red ones stay on their own line and only change length, by a factor called the eigenvalue.</p>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Browser() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Browser</p>
            {" "}
            <h2 className="d2">The agent can see what it built</h2>
            {" "}
            <p className="body">Claude opens your dev server in the thread's own browser, clicks through it, reads the console and takes screenshots, even when that thread is off screen. Websites open in a real WebView2 view, so OAuth and logins behave the way they do in Edge.</p>
            {" "}
            <p style={{ marginTop: "24px" }}>
              <ArrowLink href="/browser">
                See the browser tools
              </ArrowLink>
            </p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live ab" data-seq="500,900,1100,900,1100,1000" data-hold="1200">
              <div className="ui">
                {" "}
                <div className="mb-tabs">
                  <span className="on">Invoices</span>
                  <span>Shipments</span>
                </div>
                {" "}
                <div className="mb-bar">http://localhost:4100/</div>
                {" "}
                <div className="mb-page" style={{ "--h": "320px", containerType: "inline-size" }}>
                  {" "}
                  <div className="mb-side">
                    <b>Harbor</b>
                    <span className="on">Invoices</span>
                    <span>Shipments</span>
                    <span>Carriers</span>
                  </div>
                  {" "}
                  <div className="mb-main">
                    <div className="mb-h">
                      Invoices
                      <span className="mb-new">New invoice</span>
                    </div>
                    {" "}
                    <table className="mb-t">
                      <tbody>
                        <tr>
                          <td>INV-20418</td>
                          <td>Northwind Foods</td>
                          <td>$12,840.00</td>
                          <td>
                            <span className="pill l">late</span>
                          </td>
                        </tr>
                        <tr>
                          <td>INV-20431</td>
                          <td>Calder Steel</td>
                          <td>$6,420.50</td>
                          <td>
                            <span className="pill o">open</span>
                          </td>
                        </tr>
                        <tr>
                          <td>INV-20437</td>
                          <td>Ostrava Glass</td>
                          <td>$3,189.00</td>
                          <td>
                            <span className="pill p">paid</span>
                          </td>
                        </tr>
                        <tr>
                          <td>INV-20452</td>
                          <td>Lindqvist Timber</td>
                          <td>$9,774.25</td>
                          <td>
                            <span className="pill o">open</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {" "}
                  <div className="mb-outline out1" style={{ right: "14px", top: "12px", width: "82px", height: "28px" }} />
                  <div className="mb-outline out2" style={{ left: "112px", right: "16px", top: "74px", height: "30px" }} />
                  <Pointer />
                  <div className="ab-chip a1">
                    <span className="sw">
                      <span className="o3">Claude: clicking New invoice</span>
                      <span className="a3 o5">Claude: reading the first row</span>
                      <span className="a5">Claude: taking a screenshot</span>
                    </span>
                  </div>
                  <div className="ab-err a6">1 console error</div>
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

export function Memory() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Memory</p>
            {" "}
            <h2 className="d2">Click a line and read why it’s there</h2>
            {" "}
            <p className="body">Git blame can tell you Claude changed something three weeks ago. Eizen records which turn wrote each line, so Alt+L shows the thread, what you asked for and what the agent said about it. Before the agent edits that line again, it gets the same note.</p>
            {" "}
            <p style={{ marginTop: "24px" }}>
              <ArrowLink href="/memory">
                How Eizen remembers
              </ArrowLink>
            </p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <AskLine />
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function ANormalDay() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">A normal day</p>
            <h2 className="d2">A working day on one repo</h2>
          </div>
          {" "}
          <p className="lead">The logo is three bars of different lengths pointing the same way. It's also a fair picture of a day with Eizen: several threads moving at different speeds toward the same main branch.</p>
          {" "}
        </div>
        {" "}
        {/* One picture per moment, seen through the three bars of the mark. Hovering or focusing a
            column shows its picture; otherwise they take turns (lib/effects/home.ts). */}
        <div className="day" data-day="">
          <div className="bars day-bars rise" aria-hidden="true">
            {[0, 1, 2].map((bar) => (
              <div className="bar" key={bar}>
                {DAY_PICS.map((pic, i) => (
                  <img key={pic.src} className={i === 0 ? "on" : undefined} src={`/assets/screens/${pic.src}-m.webp`} srcSet={`/assets/screens/${pic.src}-m.webp 1100w, /assets/screens/${pic.src}.webp 2200w`} sizes="(max-width: 1080px) calc(100vw - 40px), min(1410px, 92vw)" style={{ "--pos": pic.pos }} alt="" loading="lazy" />
                ))}
              </div>
            ))}
          </div>
          {" "}
          <div className="grid day-cols" style={{ "--n": "3", marginTop: "clamp(40px,5vw,72px)" }}>
            {" "}
            <div className="cell rise on" tabIndex={0}>
              <h3>Morning</h3>
              <p>Read what ran overnight. Start three lanes on the billing repo, one for each ticket that came out of yesterday's review.</p>
            </div>
            {" "}
            <div className="cell rise" style={{ "--d": "60ms" }} tabIndex={0}>
              <h3>Afternoon</h3>
              <p>Approve the odd command from your phone. Pick an element in the browser and tell the agent what is wrong with it.</p>
            </div>
            {" "}
            <div className="cell rise" style={{ "--d": "120ms" }} tabIndex={0}>
              <h3>End of day</h3>
              <p>Merge the lanes that passed the project checks and queue the slow jobs for tonight.</p>
            </div>
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}

// Morning: the branch history of what ran. Afternoon: the thread's browser. End of day: the lane menu with Merge.
const DAY_PICS = [
  { src: "history", pos: "60% 0%" },
  { src: "browser", pos: "100% 0%" },
  { src: "lane-menu", pos: "30% 0%" },
];

export function NightShift() {
  return (
    <section className="full">
      {" "}
      <video className="bg" data-auto="" muted loop playsInline preload="none" poster="/assets/video/red-lamp.webp" aria-label="Time-lapse of a small observatory lit by red lamps while stars move overhead">
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
          <p className="kick">Night shift</p>
          {" "}
          <h2 className="d2">Queue work for the hours your accounts sit idle</h2>
          {" "}
          <p className="lead">Add tasks before you leave. Between 23:00 and 07:00 Eizen starts them one at a time per project, only while the account you chose has headroom. A task that stops for an approval is parked and reported, and the summary is there in the morning.</p>
          {" "}
          <div className="btns" style={{ marginTop: "32px" }}>
            <ArrowLink href="/automation">
              How Night shift works
            </ArrowLink>
          </div>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function TheRuleItFollows() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">The rule it follows</p>
            <h2 className="d2">Move the sliders</h2>
          </div>
          {" "}
          <p className="lead">The hand sweeps one night. Tasks run inside the red arc, and only while the account is under both limits.</p>
          {" "}
        </div>
        <NightDial />
      </div>
    </section>
  );
}

export function ForTeams() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split start">
          {" "}
          <div className="stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">For teams</p>
            {" "}
            <h2 className="d2">From first install to a daily merge</h2>
            {" "}
            <p className="body">Eizen has no admin console. A lead sets it up once on one machine and exports the settings, and everyone else imports that file. Tokens stay on each person's computer.</p>
            {" "}
            <p style={{ marginTop: "24px" }}>
              <ArrowLink href="/teams">
                Read the full rollout
              </ArrowLink>
            </p>
            {" "}
          </div>
          {" "}
          <ol className="ticks rise" style={{ "--d": "80ms" }}>
            {" "}
            <li>
              <b>Day 1.</b>
              {" "}One engineer installs it and adds accounts and two repos.
            </li>
            {" "}
            <li>
              <b>Day 1.</b>
              {" "}Set the permission mode, protected files and a check command.
            </li>
            {" "}
            <li>
              <b>Day 2.</b>
              {" "}Connect the tracker, GitHub and the database.
            </li>
            {" "}
            <li>
              <b>Week 1.</b>
              {" "}Run two lanes at once on real tickets.
            </li>
            {" "}
            <li>
              <b>Week 2.</b>
              {" "}Export the settings and bring in the rest of the team.
            </li>
            {" "}
            <li>
              <b>After that.</b>
              {" "}Night shift for slow jobs, review links for people outside engineering.
            </li>
            {" "}
          </ol>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function ComparedWith() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Compared with</p>
            <h2 className="d2">How it sits next to what you use now</h2>
          </div>
          {" "}
          <p className="lead">Most teams already use a terminal agent, an AI editor or a hosted agent. Eizen sits on top of the first and alongside the other two.</p>
          {" "}
        </div>
        {" "}
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Eizen</th>
                <th scope="col">Terminal agent alone</th>
                <th scope="col">AI editor</th>
                <th scope="col">Hosted agent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Several agents on one repo</th>
                <td data-l="Eizen" className="us">One worktree per thread, set up for you</td>
                <td data-l="Terminal agent alone">One checkout unless you script worktrees</td>
                <td data-l="AI editor">Usually one workspace per window</td>
                <td data-l="Hosted agent">Separate cloud environments</td>
              </tr>
              <tr>
                <th scope="row">Seeing the running app</th>
                <td data-l="Eizen" className="us">A browser per thread that the agent drives</td>
                <td data-l="Terminal agent alone">Add a browser tool yourself</td>
                <td data-l="AI editor">Varies by editor</td>
                <td data-l="Hosted agent">Screenshots from the cloud environment</td>
              </tr>
              <tr>
                <th scope="row">Where it runs</th>
                <td data-l="Eizen" className="us">Your computer, against your local services</td>
                <td data-l="Terminal agent alone">Your computer</td>
                <td data-l="AI editor">Your computer</td>
                <td data-l="Hosted agent">The vendor's servers</td>
              </tr>
              <tr>
                <th scope="row">Inline autocomplete</th>
                <td data-l="Eizen" className="us">None</td>
                <td data-l="Terminal agent alone">None</td>
                <td data-l="AI editor">Yes</td>
                <td data-l="Hosted agent">None</td>
              </tr>
              <tr>
                <th scope="row">Works with your PC off</th>
                <td data-l="Eizen" className="us">No</td>
                <td data-l="Terminal agent alone">No</td>
                <td data-l="AI editor">No</td>
                <td data-l="Hosted agent">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        {" "}
        <p className="tbl-note small">
          Descriptions of other tools cover the usual setup and may change.{" "}
          <ArrowLink href="/compare">
            Full comparison
          </ArrowLink>
        </p>
      </div>
    </section>
  );
}

export function Reach() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Reach</p>
            {" "}
            <h2 className="d2">Approve the next step from your phone</h2>
            {" "}
            <p className="body">Pair a phone with a QR code and keep driving threads running on your PC. Install Eizen on a laptop and your PC's dev ports appear at the same localhost addresses there, so sign-in redirects finish normally.</p>
            {" "}
            <p style={{ marginTop: "24px" }}>
              <ArrowLink href="/reach">
                Phone, laptop and review links
              </ArrowLink>
            </p>
            {" "}
          </div>
          {" "}
          <div className="med rise" style={{ display: "grid", placeItems: "center" }}>
            <div className="phone">
              <img src="/assets/screens/phone-thread.webp" width="1170" height="2532" alt="An Eizen thread on a phone" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
        <div style={{ marginTop: "clamp(48px,6vw,88px)" }}>
          <Tunnel />
        </div>
      </div>
    </section>
  );
}

export function Security() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <FeatureScenes
          lead={
            <div className="txt stack rise" style={{ "--s": "16px" }}>
              <p className="kick">Security</p>
              <h2 className="d2">Your threads and tokens stay on your computer</h2>
              <p className="body">Eizen has no server of its own. Prompts and the code an agent reads go to the model provider you chose, as they do with the CLI. Connection secrets are encrypted for your Windows user.</p>
            </div>
          }
          items={[
            { title: "Approvals with reasons", text: "A prompt shows the exact command and, when it is risky, why.", icon: <IconApproval />, scene: <ApprovalScene /> },
            { title: "A safety net you can turn on", text: "With it on, force pushes and recursive deletes still stop and ask, even in Bypass permissions.", icon: <IconSafetyNet />, scene: <SafetyNetScene /> },
            { title: "Protected files", text: "List the paths agents may read and never edit.", icon: <IconLock />, scene: <ProtectedFilesScene /> },
            { title: "Project checks", text: "A failing test run goes back to the agent before the turn can finish.", icon: <IconChecks />, scene: <ChecksScene /> },
          ]}
        />
        {" "}
        <p style={{ marginTop: "32px" }}>
          <ArrowLink href="/security">
            What stays and what leaves
          </ArrowLink>
        </p>
      </div>
    </section>
  );
}

export function Connections() {
  return (
    <section className="sec tight night" aria-label="Connections">
      <div className="wrap split even" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
        <div className="txt stack rise" style={{ "--s": "16px" }}>
          <p className="kick">Connections</p>
          <h2 className="d2">Fifteen services one click away</h2>
          <p className="body">Sign in, pick which Claude accounts may use it, and the tools appear in the next message. Any other MCP server works through Custom.</p>
        </div>
        <Orbit />
      </div>
      {" "}
      <div className="ticker" aria-hidden="true">
        <div>
          <span>
            <ServiceIcon name="GitHub" />
            GitHub
          </span>
          <span>
            <ServiceIcon name="Linear" />
            Linear
          </span>
          <span>
            <ServiceIcon name="Jira" />
            Jira
          </span>
          <span>
            <ServiceIcon name="Confluence" />
            Confluence
          </span>
          <span>
            <ServiceIcon name="Notion" />
            Notion
          </span>
          <span>
            <ServiceIcon name="Gmail" />
            Gmail
          </span>
          <span>
            <ServiceIcon name="Neon" />
            Neon
          </span>
          <span>
            <ServiceIcon name="Supabase" />
            Supabase
          </span>
          <span>
            <ServiceIcon name="Vercel" />
            Vercel
          </span>
          <span>
            <ServiceIcon name="Cloudflare" />
            Cloudflare
          </span>
          <span>
            <ServiceIcon name="AWS" />
            AWS
          </span>
          <span>
            <ServiceIcon name="Apify" />
            Apify
          </span>
          <span>
            <ServiceIcon name="Figma" />
            Figma
          </span>
          <span>
            <ServiceIcon name="Context7" />
            Context7
          </span>
          <span>
            <ServiceIcon name="DeepWiki" />
            DeepWiki
          </span>
          <span>
            <ServiceIcon name="Microsoft Learn" />
            Microsoft Learn
          </span>
          <span>
            <ServiceIcon name="GitHub" />
            GitHub
          </span>
          <span>
            <ServiceIcon name="Linear" />
            Linear
          </span>
          <span>
            <ServiceIcon name="Jira" />
            Jira
          </span>
          <span>
            <ServiceIcon name="Confluence" />
            Confluence
          </span>
          <span>
            <ServiceIcon name="Notion" />
            Notion
          </span>
          <span>
            <ServiceIcon name="Gmail" />
            Gmail
          </span>
          <span>
            <ServiceIcon name="Neon" />
            Neon
          </span>
          <span>
            <ServiceIcon name="Supabase" />
            Supabase
          </span>
          <span>
            <ServiceIcon name="Vercel" />
            Vercel
          </span>
          <span>
            <ServiceIcon name="Cloudflare" />
            Cloudflare
          </span>
          <span>
            <ServiceIcon name="AWS" />
            AWS
          </span>
          <span>
            <ServiceIcon name="Apify" />
            Apify
          </span>
          <span>
            <ServiceIcon name="Figma" />
            Figma
          </span>
          <span>
            <ServiceIcon name="Context7" />
            Context7
          </span>
          <span>
            <ServiceIcon name="DeepWiki" />
            DeepWiki
          </span>
          <span>
            <ServiceIcon name="Microsoft Learn" />
            Microsoft Learn
          </span>
        </div>
      </div>
      {" "}
      <div className="wrap" style={{ marginTop: "32px" }}>
        <ArrowLink href="/connections">
          All connections
        </ArrowLink>
      </div>
    </section>
  );
}

const QUESTIONS: FaqItem[] = [
  { q: "What is Eizen?", a: "Eizen is a Windows desktop app for running Claude Code, Codex and OpenCode. Each thread gets its own git worktree, dev server port and browser, so several agents can work on one repository without overwriting each other. It also records which turn wrote each line, runs queued tasks overnight and lets you approve the next step from your phone." },
  { q: "Where does my code go?", a: "Prompts and the code an agent reads go to the model provider you chose, as they do with the CLI. Eizen has no server of its own and sends no analytics. Tool calls go to the services you connected, and their tokens stay in an encrypted file for your Windows user." },
  { q: "Does it replace Claude Code?", a: "No. Eizen runs Claude Code through its SDK and uses the same sessions. Keep your terminal if you like it." },
  { q: "Does a lane copy the whole repository?", a: "Git worktrees share one object store, so a lane costs about the size of your checked-out files. node_modules is linked to the main checkout." },
  { q: "What happens when my PC is off?", a: "Nothing runs. Your phone and laptop talk to the PC, and Night shift needs it awake." },
  { q: "What happens at a usage limit?", a: "The thread stops and says so. Pick another account and send again, and queued messages move with it. Relay can do that for you if you turn it on, but check your plan's terms first." },
  { q: "Which systems does it run on?", a: "Windows 10 and 11 are what we build and test." },
  { q: "Can two people work in one thread?", a: "No. Threads belong to one computer. Review links let people outside the team comment on a running page." },
];

export function Questions() {
  return (
    <section className="sec night">
      <div className="wrap">
        <div className="sec-head solo rise">
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Questions</p>
            <h2 className="d2">Before you install</h2>
          </div>
        </div>
        <Faq id="faq" items={QUESTIONS} />
      </div>
    </section>
  );
}
