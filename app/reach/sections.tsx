import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";
import { FlowLine } from "@/components/parts/FlowLine";
import { Tunnel } from "@/components/parts/Tunnel";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <video className="bg" data-auto="" muted loop playsInline preload="none" poster="/assets/video/moon-pass.webp" aria-label="Time-lapse of the moon crossing the sky beside the SOAR telescope dome">
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
          <p className="kick">Reach</p>
          {" "}
          <h1 className="d1">Your PC does the work and you check in from anywhere</h1>
          {" "}
          <p className="lead">Agents keep running on your own machine. Everything here is a way of reaching it.</p>
          {" "}
          <div className="btns" style={{ marginTop: "32px" }}>
            <Link className="btn fill" href="/download">Download for Windows</Link>
          </div>
          {" "}
        </div>
      </div>
      {" "}
    </section>
  );
}

export function Phone() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            <p className="kick">Phone</p>
            <h2 className="d2">Pair once with a QR code</h2>
            <p className="body">Open the pairing page, scan the code and your phone has the same threads, approvals and account meters as the desktop. Unpairing cuts the device off immediately.</p>
            <ul className="ticks">
              <li>Local network, or a Cloudflare Tunnel on your own domain.</li>
              <li>Devices are listed with their status and recent activity.</li>
            </ul>
          </div>
          {" "}
          <div className="med rise" style={{ display: "grid", placeItems: "center" }}>
            <div className="phone">
              <img src="/assets/screens/phone-thread.webp" width="1170" height="2532" alt="A thread on a phone" loading="lazy" />
            </div>
          </div>
          {" "}
        </div>
        <div className="rise" style={{ marginTop: "clamp(48px,6vw,88px)", maxWidth: "760px", marginInline: "auto" }}>
          <div className="live pair-live" data-seq="600,1800,1000,1200" data-hold="2600">
            {" "}
            <div className="ui pad" style={{ textAlign: "center" }}>
              <b>Pair a device</b>
              <div className="m">Scan with your phone. Single use</div>
              <div className="qr" aria-hidden="true">
                <i className="" style={{ "--n": "0" }} />
                <i className="" style={{ "--n": "37" }} />
                <i className="" style={{ "--n": "74" }} />
                <i className="" style={{ "--n": "111" }} />
                <i className="z" style={{ "--n": "148" }} />
                <i className="z" style={{ "--n": "16" }} />
                <i className="" style={{ "--n": "53" }} />
                <i className="z" style={{ "--n": "90" }} />
                <i className="z" style={{ "--n": "127" }} />
                <i className="" style={{ "--n": "164" }} />
                <i className="" style={{ "--n": "32" }} />
                <i className="" style={{ "--n": "69" }} />
                <i className="" style={{ "--n": "106" }} />
                <i className="" style={{ "--n": "143" }} />
                <i className="z" style={{ "--n": "11" }} />
                <i className="" style={{ "--n": "48" }} />
                <i className="z" style={{ "--n": "85" }} />
                <i className="z" style={{ "--n": "122" }} />
                <i className="" style={{ "--n": "159" }} />
                <i className="z" style={{ "--n": "27" }} />
                <i className="z" style={{ "--n": "64" }} />
                <i className="" style={{ "--n": "101" }} />
                <i className="z" style={{ "--n": "138" }} />
                <i className="" style={{ "--n": "6" }} />
                <i className="" style={{ "--n": "43" }} />
                <i className="" style={{ "--n": "80" }} />
                <i className="" style={{ "--n": "117" }} />
                <i className="" style={{ "--n": "154" }} />
                <i className="" style={{ "--n": "22" }} />
                <i className="z" style={{ "--n": "59" }} />
                <i className="z" style={{ "--n": "96" }} />
                <i className="z" style={{ "--n": "133" }} />
                <i className="z" style={{ "--n": "1" }} />
                <i className="z" style={{ "--n": "38" }} />
                <i className="z" style={{ "--n": "75" }} />
                <i className="z" style={{ "--n": "112" }} />
                <i className="" style={{ "--n": "149" }} />
                <i className="" style={{ "--n": "17" }} />
                <i className="" style={{ "--n": "54" }} />
                <i className="" style={{ "--n": "91" }} />
                <i className="z" style={{ "--n": "128" }} />
                <i className="z" style={{ "--n": "165" }} />
                <i className="" style={{ "--n": "33" }} />
                <i className="z" style={{ "--n": "70" }} />
                <i className="z" style={{ "--n": "107" }} />
                <i className="" style={{ "--n": "144" }} />
                <i className="z" style={{ "--n": "12" }} />
                <i className="z" style={{ "--n": "49" }} />
                <i className="" style={{ "--n": "86" }} />
                <i className="z" style={{ "--n": "123" }} />
                <i className="z" style={{ "--n": "160" }} />
                <i className="" style={{ "--n": "28" }} />
                <i className="z" style={{ "--n": "65" }} />
                <i className="z" style={{ "--n": "102" }} />
                <i className="" style={{ "--n": "139" }} />
                <i className="z" style={{ "--n": "7" }} />
                <i className="z" style={{ "--n": "44" }} />
                <i className="" style={{ "--n": "81" }} />
                <i className="z" style={{ "--n": "118" }} />
                <i className="z" style={{ "--n": "155" }} />
                <i className="" style={{ "--n": "23" }} />
                <i className="z" style={{ "--n": "60" }} />
                <i className="z" style={{ "--n": "97" }} />
                <i className="" style={{ "--n": "134" }} />
                <i className="z" style={{ "--n": "2" }} />
                <i className="z" style={{ "--n": "39" }} />
                <i className="z" style={{ "--n": "76" }} />
                <i className="z" style={{ "--n": "113" }} />
                <i className="z" style={{ "--n": "150" }} />
                <i className="z" style={{ "--n": "18" }} />
                <i className="z" style={{ "--n": "55" }} />
                <i className="z" style={{ "--n": "92" }} />
                <i className="z" style={{ "--n": "129" }} />
                <i className="z" style={{ "--n": "166" }} />
                <i className="z" style={{ "--n": "34" }} />
                <i className="z" style={{ "--n": "71" }} />
                <i className="z" style={{ "--n": "108" }} />
                <i className="z" style={{ "--n": "145" }} />
                <i className="" style={{ "--n": "13" }} />
                <i className="z" style={{ "--n": "50" }} />
                <i className="z" style={{ "--n": "87" }} />
                <i className="" style={{ "--n": "124" }} />
                <i className="z" style={{ "--n": "161" }} />
                <i className="z" style={{ "--n": "29" }} />
                <i className="" style={{ "--n": "66" }} />
                <i className="z" style={{ "--n": "103" }} />
                <i className="z" style={{ "--n": "140" }} />
                <i className="" style={{ "--n": "8" }} />
                <i className="z" style={{ "--n": "45" }} />
                <i className="z" style={{ "--n": "82" }} />
                <i className="" style={{ "--n": "119" }} />
                <i className="z" style={{ "--n": "156" }} />
                <i className="z" style={{ "--n": "24" }} />
                <i className="" style={{ "--n": "61" }} />
                <i className="z" style={{ "--n": "98" }} />
                <i className="z" style={{ "--n": "135" }} />
                <i className="" style={{ "--n": "3" }} />
                <i className="z" style={{ "--n": "40" }} />
                <i className="z" style={{ "--n": "77" }} />
                <i className="" style={{ "--n": "114" }} />
                <i className="z" style={{ "--n": "151" }} />
                <i className="z" style={{ "--n": "19" }} />
                <i className="" style={{ "--n": "56" }} />
                <i className="z" style={{ "--n": "93" }} />
                <i className="z" style={{ "--n": "130" }} />
                <i className="z" style={{ "--n": "167" }} />
                <i className="z" style={{ "--n": "35" }} />
                <i className="z" style={{ "--n": "72" }} />
                <i className="z" style={{ "--n": "109" }} />
                <i className="z" style={{ "--n": "146" }} />
                <i className="z" style={{ "--n": "14" }} />
                <i className="z" style={{ "--n": "51" }} />
                <i className="z" style={{ "--n": "88" }} />
                <i className="z" style={{ "--n": "125" }} />
                <i className="z" style={{ "--n": "162" }} />
                <i className="z" style={{ "--n": "30" }} />
                <i className="z" style={{ "--n": "67" }} />
                <i className="" style={{ "--n": "104" }} />
                <i className="z" style={{ "--n": "141" }} />
                <i className="z" style={{ "--n": "9" }} />
                <i className="" style={{ "--n": "46" }} />
                <i className="z" style={{ "--n": "83" }} />
                <i className="z" style={{ "--n": "120" }} />
                <i className="" style={{ "--n": "157" }} />
                <i className="z" style={{ "--n": "25" }} />
                <i className="z" style={{ "--n": "62" }} />
                <i className="" style={{ "--n": "99" }} />
                <i className="z" style={{ "--n": "136" }} />
                <i className="z" style={{ "--n": "4" }} />
                <i className="" style={{ "--n": "41" }} />
                <i className="" style={{ "--n": "78" }} />
                <i className="" style={{ "--n": "115" }} />
                <i className="" style={{ "--n": "152" }} />
                <i className="z" style={{ "--n": "20" }} />
                <i className="z" style={{ "--n": "57" }} />
                <i className="" style={{ "--n": "94" }} />
                <i className="z" style={{ "--n": "131" }} />
                <i className="z" style={{ "--n": "168" }} />
                <i className="" style={{ "--n": "36" }} />
                <i className="z" style={{ "--n": "73" }} />
                <i className="z" style={{ "--n": "110" }} />
                <i className="" style={{ "--n": "147" }} />
                <i className="z" style={{ "--n": "15" }} />
                <i className="" style={{ "--n": "52" }} />
                <i className="z" style={{ "--n": "89" }} />
                <i className="" style={{ "--n": "126" }} />
                <i className="z" style={{ "--n": "163" }} />
                <i className="z" style={{ "--n": "31" }} />
                <i className="z" style={{ "--n": "68" }} />
                <i className="z" style={{ "--n": "105" }} />
                <i className="z" style={{ "--n": "142" }} />
                <i className="z" style={{ "--n": "10" }} />
                <i className="z" style={{ "--n": "47" }} />
                <i className="z" style={{ "--n": "84" }} />
                <i className="z" style={{ "--n": "121" }} />
                <i className="z" style={{ "--n": "158" }} />
                <i className="" style={{ "--n": "26" }} />
                <i className="" style={{ "--n": "63" }} />
                <i className="" style={{ "--n": "100" }} />
                <i className="" style={{ "--n": "137" }} />
                <i className="z" style={{ "--n": "5" }} />
                <i className="z" style={{ "--n": "42" }} />
                <i className="" style={{ "--n": "79" }} />
                <i className="z" style={{ "--n": "116" }} />
                <i className="z" style={{ "--n": "153" }} />
                <i className="" style={{ "--n": "21" }} />
                <i className="z" style={{ "--n": "58" }} />
                <i className="z" style={{ "--n": "95" }} />
                <i className="" style={{ "--n": "132" }} />
              </div>
            </div>
            {" "}
            <FlowLine />
            {" "}
            <div className="phone-mini">
              <div className="a2 m">Paired with workstation</div>
              <div className="ui pad a3" style={{ padding: "10px", borderColor: "var(--hd)" }}>
                <div className="row">
                  <i className="dot hd" />
                  <b>Allow Edit?</b>
                </div>
                <div className="m">app.js</div>
              </div>
              <div className="row a4" style={{ justifyContent: "flex-end" }}>
                <span className="ubtn go">Approve</span>
              </div>
            </div>
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Laptop() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Laptop</p>
            <h2 className="d2">localhost on your PC, at localhost on your laptop</h2>
          </div>
          {" "}
          <p className="lead">Install Eizen on the laptop and add the PC as a machine. Its dev ports are forwarded for as long as the app is open.</p>
          {" "}
        </div>
        {" "}
        <div className="rise" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
          <Tunnel />
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Laptop app with forwarding</th>
                <th scope="col">Plain browser on another device</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">localhost:3000</th>
                <td data-l="Laptop app with forwarding" className="us">Opens at its true address</td>
                <td data-l="Plain browser on another device">Opens through a preview address</td>
              </tr>
              <tr>
                <th scope="row">Images and API calls to other ports</th>
                <td data-l="Laptop app with forwarding" className="us">Work as normal</td>
                <td data-l="Plain browser on another device">Rewritten, and most work</td>
              </tr>
              <tr>
                <th scope="row">Google sign-in back to localhost</th>
                <td data-l="Laptop app with forwarding" className="us">Finishes normally</td>
                <td data-l="Plain browser on another device">Has nowhere to return to</td>
              </tr>
              <tr>
                <th scope="row">Websites in the panel</th>
                <td data-l="Laptop app with forwarding" className="us">Real browser view</td>
                <td data-l="Plain browser on another device">Open in a separate tab</td>
              </tr>
              <tr>
                <th scope="row">A dev server started later</th>
                <td data-l="Laptop app with forwarding" className="us">Appears within a few seconds</td>
                <td data-l="Plain browser on another device">Open it by address</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tbl-note small">A port already in use on the laptop is left alone, and the panel says so. One computer can be forwarded at a time.</p>
      </div>
    </section>
  );
}

export function ReviewLinks() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            <p className="kick">Review links</p>
            <h2 className="d2">Show a client the running app with no deploy</h2>
            <p className="body">Send a link to one port on your PC. They enter a name, click any element and leave a comment, and it arrives in the thread with the selector and a crop.</p>
            <ul className="ticks">
              <li>
                <b>Expires.</b>
                {" "}4 hours by default, up to 7 days, and you can revoke it.
              </li>
              <li>
                <b>One port only.</b>
                {" "}Guests can reach nothing else on your machine.
              </li>
              <li>
                <b>You decide what Claude sees.</b>
                {" "}A comment waits as a card until you press Send to Claude.
              </li>
            </ul>
            <p className="small" style={{ marginTop: "12px" }}>Off by default. Whoever holds the link can use that dev server while the link lasts, and your PC has to stay on.</p>
          </div>
          {" "}
          <div className="med rise">
            <div className="live" data-seq="800,900,1000,1200" data-hold="3000">
              <div className="ui">
                <div className="mb-bar">https://desk-4100.yourdomain.com/</div>
                <div className="pins">
                  <div className="mb-page" style={{ "--h": "300px", containerType: "inline-size" }}>
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
                    <div className="pin a1" style={{ right: "64px", top: "18px" }}>
                      <span>1</span>
                    </div>
                    <div className="pin a2" style={{ left: "42%", top: "74px" }}>
                      <span>2</span>
                    </div>
                    <div className="pins-card a3">
                      <div className="row b">
                        <b>Dana, reviewing</b>
                        <span className="m">Waiting for you</span>
                      </div>
                      <div style={{ color: "var(--ut2)" }} data-type="3">The overdue total should sit before Paid.</div>
                      <div className="row a4" style={{ justifyContent: "flex-end", marginTop: "6px" }}>
                        <span className="ubtn">Dismiss</span>
                        <span className="ubtn go">Send to Claude</span>
                      </div>
                    </div>
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

export function OneComputerDoesThe() {
  return (
    <section className="sec night deep tight">
      <div className="wrap">
        <div className="reel">
          <figure className="w2">
            <img src="/assets/img/la-silla.webp" srcSet="/assets/img/la-silla-s.webp 900w, /assets/img/la-silla-m.webp 1200w, /assets/img/la-silla.webp 2400w" sizes="clamp(331px, 54vw, 890px)" alt="Several observatory domes on a snowy ridge at night" loading="lazy" />
            <figcaption>One computer does the work and the others connect to it.</figcaption>
          </figure>
          <figure className="">
            <img src="/assets/img/kitt-peak.webp" srcSet="/assets/img/kitt-peak-s.webp 900w, /assets/img/kitt-peak-m.webp 1200w, /assets/img/kitt-peak.webp 2400w" sizes="clamp(280px, 38vw, 620px)" alt="Star trails above Kitt Peak" loading="lazy" />
            <figcaption>Pairing works on your local network or through your own tunnel.</figcaption>
          </figure>
          <figure className="w2">
            <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="clamp(320px, 52vw, 860px)" alt="Star trails above Gemini North" loading="lazy" />
            <figcaption>Connections end the moment you unpair.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/connections">
        <img src="/assets/img/gemini-swirl.webp" srcSet="/assets/img/gemini-swirl-s.webp 900w, /assets/img/gemini-swirl-m.webp 1200w, /assets/img/gemini-swirl.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Connections
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
