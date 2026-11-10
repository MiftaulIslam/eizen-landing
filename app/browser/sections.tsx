import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";
import { Pointer } from "@/components/parts/Pointer";
import { Button } from "@/components/ui/Button";
import { Drawer } from "@/components/ui/Drawer";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <img className="bg" src="/assets/img/rubin-sky.webp" alt="The Rubin Observatory under the Milky Way" style={{ objectPosition: "50% 60%" }} />
      {" "}
      <div className="scrim low" />
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">Browser</p>
          {" "}
          <h1 className="d1">A browser in every thread, driven by the agent or by you</h1>
          {" "}
          <p className="lead">An agent that can only read code has to guess whether the page looks right. In Eizen it opens the page and checks.</p>
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

export function OnePerThread() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">One per thread</p>
            {" "}
            <h2 className="d2">Switch threads and the page keeps working</h2>
            {" "}
            <p className="body">Each thread keeps its own tabs. A thread that is off screen can still load pages, click through them and capture screenshots, so a test in one thread never lands on the page another thread was using. Six stay loaded at a time, and the least recently used one closes first.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="1200,1500,1500" data-hold="2200">
              <div className="ui pad" style={{ display: "grid", gap: "10px" }}>
                <div>
                  <div className="row b">
                    <div className="row">
                      <i className="dot mv" />
                      <b>Invoice table</b>
                    </div>
                    <span className="m">On screen</span>
                  </div>
                  <div className="m">Taking a screenshot of /invoices</div>
                  <div className="bar" style={{ marginTop: "6px" }}>
                    <i style={{ "--v": "0.82" }} />
                  </div>
                </div>
                <div>
                  <div className="row b">
                    <div className="row">
                      <i className="dot mv" />
                      <b>Status pills</b>
                    </div>
                    <span className="m">Off screen</span>
                  </div>
                  <div className="m">Clicking through the filters</div>
                  <div className="bar" style={{ marginTop: "6px" }}>
                    <i style={{ "--v": "0.54" }} />
                  </div>
                </div>
                <div>
                  <div className="row b">
                    <div className="row">
                      <i className="dot mv" />
                      <b>Pre-ship review</b>
                    </div>
                    <span className="m">Off screen</span>
                  </div>
                  <div className="m">Reading console errors</div>
                  <div className="bar" style={{ marginTop: "6px" }}>
                    <i style={{ "--v": "0.28" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function WatchItWork() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Watch it work</p>
            {" "}
            <h2 className="d2">A pointer you can follow</h2>
            {" "}
            <p className="body">As the agent works, a pointer moves across the page, the element it is about to touch gets an outline, and a chip says what it is doing.</p>
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
                <div className="mb-page" style={{ "--h": "340px", containerType: "inline-size" }}>
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

export function TwoKindsOfTab() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Two kinds of tab</p>
            <h2 className="d2">Real sign-ins for websites and dev tools for localhost</h2>
          </div>
          {" "}
          <p className="lead">Local pages and websites have different needs, so Eizen opens them differently.</p>
          {" "}
        </div>
        {" "}
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">What it is</th>
                <th scope="col">What you get</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Websites</th>
                <td data-l="What it is">A real WebView2 view placed over the panel</td>
                <td data-l="What you get">OAuth, cookies, captchas and logins work as they do in Edge</td>
              </tr>
              <tr>
                <th scope="row">Local dev pages</th>
                <td data-l="What it is">A proxied view you can inspect</td>
                <td data-l="What you get">Element picker, tweaks, accessibility checks and error capture</td>
              </tr>
              <tr>
                <th scope="row">Pages the agent opens</th>
                <td data-l="What it is">A real view at the true address</td>
                <td data-l="What you get">Screenshots off screen, and a developer view one click away</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ItWorksThePage() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">What the agent can do</p>
            <h2 className="d2">It works the page the way you would</h2>
          </div>
          {" "}
          <p className="lead">A pointer moves across the page as the agent works, with an outline on the element and a chip that says what it is doing.</p>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "3" }}>
          <div className="cell rise">
            <h3>Open and manage tabs</h3>
            <p>Goes to a URL, opens more tabs, switches between them.</p>
          </div>
          <div className="cell rise">
            <h3>Read the page</h3>
            <p>Gets the text and structure of what is showing.</p>
          </div>
          <div className="cell rise">
            <h3>Click, type, press, scroll</h3>
            <p>Acts on the page the same way a person would.</p>
          </div>
          <div className="cell rise">
            <h3>Take screenshots</h3>
            <p>Looks at the page, and it works off screen.</p>
          </div>
          <div className="cell rise">
            <h3>Read errors</h3>
            <p>Console errors and failed requests from the page.</p>
          </div>
          <div className="cell rise">
            <h3>Ask first, if you want</h3>
            <p>One setting decides whether the agent opens the browser freely or asks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatYouCanDo() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">What you can do</p>
            <h2 className="d2">Point at the problem so you can stop describing it</h2>
          </div>
          {" "}
          <p className="lead">Pick a tool to see it work.</p>
          {" "}
        </div>
        <div className="explore" data-explore="">
          {" "}
          <div>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Pick an element</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Mark up an area</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Tweak it live</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Record a bug</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Check accessibility</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Compare before and after</button>
            <button type="button" className="ex-row" data-drawer-open="browser-tool" data-drawer-title="">Device sizes</button>
          </div>
          {" "}
          <Drawer id="browser-tool" label="Tool demo" from={721}>
            <div className="ex-panes live">
              <div className="ex-pane">
                <div className="ui">
                  <div className="mb-page" style={{ "--h": "240px", containerType: "inline-size" }}>
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
                    <div className="mb-outline" style={{ opacity: "1", left: "112px", top: "14px", width: "92px", height: "26px", animation: "outline-move 4.2s var(--ease) infinite" }} />
                  </div>
                </div>
                <p className="ex-note">Sends its selector, markup, source file and a crop to the agent.</p>
              </div>
              <div className="ex-pane">
                <div className="ui">
                  <div className="mb-page" style={{ "--h": "240px", containerType: "inline-size" }}>
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
                    <svg style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }} viewBox="0 0 500 240" preserveAspectRatio="none">
                      <path d="M250 150C300 110 350 70 430 44" fill="none" stroke="#e8553d" strokeWidth="3" strokeDasharray="420" strokeDashoffset="420" style={{ animation: "draw 2.4s var(--ease) infinite alternate" }} />
                      <rect x="340" y="20" width="130" height="40" rx="4" fill="none" stroke="#e8553d" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <p className="ex-note">Arrows, boxes and labels, flattened into your message.</p>
              </div>
              <div className="ex-pane">
                <div className="ui pad" style={{ minHeight: "240px", display: "grid", placeItems: "center", background: "#f6f7f9" }}>
                  <span style={{ background: "#10233a", color: "#fff", borderRadius: "6px", padding: "6px 10px", animation: "pad 3.2s var(--ease) infinite", outline: "1px dashed #5ec48a", outlineOffset: "2px" }}>New invoice</span>
                </div>
                <p className="ex-note">Drag padding or edit text, then send the exact changes.</p>
              </div>
              <div className="ex-pane">
                <div className="ui pad" style={{ minHeight: "240px" }}>
                  <div className="row" style={{ padding: "7px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 0s infinite both" }}>
                    <span className="m">1</span>
                    Click New invoice
                  </div>
                  <div className="row" style={{ padding: "7px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 0.7s infinite both" }}>
                    <span className="m">2</span>
                    Type Calder Steel in Customer
                  </div>
                  <div className="row" style={{ padding: "7px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 1.4s infinite both" }}>
                    <span className="m">3</span>
                    Press Enter
                  </div>
                  <div className="row" style={{ padding: "7px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 2.0999999999999996s infinite both", color: "var(--st)" }}>
                    <span className="m">4</span>
                    TypeError: cents is undefined
                  </div>
                </div>
                <p className="ex-note">Clicks, keys and errors become numbered steps, or a Playwright test.</p>
              </div>
              <div className="ex-pane">
                <div className="ui pad" style={{ minHeight: "240px" }}>
                  <div className="row" style={{ padding: "10px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 0s infinite both" }}>
                    <i className="dot hd" />
                    <span className="m" style={{ width: "72px" }}>Serious</span>
                    Status pill text contrast is 3.1 to 1
                  </div>
                  <div className="row" style={{ padding: "10px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 0.8s infinite both" }}>
                    <i className="dot hd" />
                    <span className="m" style={{ width: "72px" }}>Moderate</span>
                    New invoice button has no accessible name
                  </div>
                  <div className="row" style={{ padding: "10px 0", borderTop: "1px solid var(--uh)", animation: "tick-in 6s var(--ease) 1.6s infinite both" }}>
                    <i className="dot " />
                    <span className="m" style={{ width: "72px" }}>Minor</span>
                    Table is missing a caption
                  </div>
                </div>
                <p className="ex-note">Runs axe-core in the page and lists problems by impact.</p>
              </div>
              <div className="ex-pane">
                <div className="ui" style={{ position: "relative" }}>
                  <div className="mb-page" style={{ "--h": "240px", containerType: "inline-size" }}>
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
                  </div>
                  <div style={{ position: "absolute", inset: "0", animation: "wipe 5s var(--ease) infinite" }}>
                    <div className="mb-page" style={{ "--h": "240px", containerType: "inline-size" }}>
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
                      <div style={{ position: "absolute", inset: "0", background: "rgb(232 85 61 / 0.1)" }} />
                    </div>
                  </div>
                  <i style={{ position: "absolute", top: "0", bottom: "0", width: "2px", background: "#e8553d", animation: "wipe-line 5s var(--ease) infinite" }} />
                </div>
                <p className="ex-note">Pin a screenshot and drag a divider against the current page.</p>
              </div>
              <div className="ex-pane">
                <div className="ui pad" style={{ minHeight: "240px", display: "flex", gap: "12px", alignItems: "end", justifyContent: "center" }}>
                  <div style={{ width: "210px", height: "150px", background: "#f6f7f9", borderRadius: "6px", padding: "6px", display: "grid", gap: "4px", alignContent: "start" }}>
                    <i style={{ height: "10px", background: "#10233a", borderRadius: "2px", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block", width: "70%" }} />
                  </div>
                  <div style={{ width: "110px", height: "170px", background: "#f6f7f9", borderRadius: "6px", padding: "6px", display: "grid", gap: "4px", alignContent: "start" }}>
                    <i style={{ height: "10px", background: "#10233a", borderRadius: "2px", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block", width: "70%" }} />
                  </div>
                  <div style={{ width: "64px", height: "130px", background: "#f6f7f9", borderRadius: "6px", padding: "6px", display: "grid", gap: "4px", alignContent: "start" }}>
                    <i style={{ height: "10px", background: "#10233a", borderRadius: "2px", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block" }} />
                    <i style={{ height: "6px", background: "#dfe4ea", display: "block", width: "70%" }} />
                  </div>
                </div>
                <p className="ex-note">Desktop, tablet and phone widths, or capture all three.</p>
              </div>
            </div>
          </Drawer>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Errors() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">Errors</p>
            {" "}
            <h2 className="d2">Page errors arrive with your next message</h2>
            {" "}
            <p className="body">Errors from the page collect in a chip above the composer. Send your message and they go along with it, so the agent starts from the stack trace you were about to paste.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="win rise">
              <img src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="A thread and its browser panel side by side" width="2200" height="1375" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/memory">
        <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Memory
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
