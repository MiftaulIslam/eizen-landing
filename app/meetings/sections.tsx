import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="full">
      {" "}
      <img className="bg" src="/assets/img/rubin-dome.webp" alt="The side of a large observatory dome against the Milky Way" style={{ objectPosition: "50% 50%" }} />
      {" "}
      <div className="scrim left" />
      {" "}
      <div className="inner">
        <div className="copy stack rise">
          {" "}
          <p className="kick">Meetings</p>
          {" "}
          <h1 className="d1">Decisions from the meeting, already in a thread</h1>
          {" "}
          <p className="lead">Drop in a recording of any length. Eizen transcribes it on your computer, works out who said what and opens a thread where Claude summarises it and you can ask questions.</p>
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

export function HowItRuns() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">How it runs</p>
            <h2 className="d2">Four steps, three of them local</h2>
          </div>
          {" "}
        </div>
        {" "}
        <div className="grid" style={{ "--n": "4" }}>
          <div className="cell rise">
            <h3>1. Extract</h3>
            <p>Pulls out the audio. For video it also keeps the frames where the screen changes, such as slides.</p>
          </div>
          <div className="cell rise">
            <h3>2. Transcribe</h3>
            <p>Runs Whisper or Parakeet on your machine, using the GPU when there is one.</p>
          </div>
          <div className="cell rise">
            <h3>3. Tell speakers apart</h3>
            <p>Separates voices and recognises the ones you have named before.</p>
          </div>
          <div className="cell rise">
            <h3>4. Open a thread</h3>
            <p>Claude gets the transcript and frames, and writes the summary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section3() {
  return (
    <section className="sec night tight">
      <div className="wrap">
        <div className="rise">
          <div className="win rise">
            <img src="/assets/screens/meetings.webp" srcSet="/assets/screens/meetings-m.webp 1100w, /assets/screens/meetings.webp 2200w" sizes="(max-width: 1080px) calc(100vw - 40px), min(1410px, 100vw)" alt="The Meetings page in Eizen, ready for a recording" width="2200" height="1375" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhileItRuns() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split flip">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">While it runs</p>
            {" "}
            <h2 className="d2">From a recording to a thread you can question</h2>
            {" "}
            <p className="body">Progress shows on each meeting as it moves through the steps. When it finishes, the thread is waiting with a summary and you can ask for the action items.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="900,1200,1200,1400" data-hold="2800">
              <div className="ui pad">
                {" "}
                <div className="row b">
                  <b>Billing planning</b>
                  <span className="m">42 min recording</span>
                </div>
                {" "}
                <div className="wave" style={{ marginTop: "10px" }} aria-hidden="true">
                  <i style={{ "--n": "0" }} />
                  <i style={{ "--n": "13" }} />
                  <i style={{ "--n": "26" }} />
                  <i style={{ "--n": "10" }} />
                  <i style={{ "--n": "23" }} />
                  <i style={{ "--n": "7" }} />
                  <i style={{ "--n": "20" }} />
                  <i style={{ "--n": "4" }} />
                  <i style={{ "--n": "17" }} />
                  <i style={{ "--n": "1" }} />
                  <i style={{ "--n": "14" }} />
                  <i style={{ "--n": "27" }} />
                  <i style={{ "--n": "11" }} />
                  <i style={{ "--n": "24" }} />
                  <i style={{ "--n": "8" }} />
                  <i style={{ "--n": "21" }} />
                  <i style={{ "--n": "5" }} />
                  <i style={{ "--n": "18" }} />
                  <i style={{ "--n": "2" }} />
                  <i style={{ "--n": "15" }} />
                  <i style={{ "--n": "28" }} />
                  <i style={{ "--n": "12" }} />
                  <i style={{ "--n": "25" }} />
                  <i style={{ "--n": "9" }} />
                  <i style={{ "--n": "22" }} />
                  <i style={{ "--n": "6" }} />
                  <i style={{ "--n": "19" }} />
                  <i style={{ "--n": "3" }} />
                  <i style={{ "--n": "16" }} />
                  <i style={{ "--n": "0" }} />
                  <i style={{ "--n": "13" }} />
                  <i style={{ "--n": "26" }} />
                  <i style={{ "--n": "10" }} />
                  <i style={{ "--n": "23" }} />
                  <i style={{ "--n": "7" }} />
                  <i style={{ "--n": "20" }} />
                  <i style={{ "--n": "4" }} />
                  <i style={{ "--n": "17" }} />
                  <i style={{ "--n": "1" }} />
                  <i style={{ "--n": "14" }} />
                  <i style={{ "--n": "27" }} />
                  <i style={{ "--n": "11" }} />
                  <i style={{ "--n": "24" }} />
                  <i style={{ "--n": "8" }} />
                  <i style={{ "--n": "21" }} />
                  <i style={{ "--n": "5" }} />
                  <i style={{ "--n": "18" }} />
                  <i style={{ "--n": "2" }} />
                  <i style={{ "--n": "15" }} />
                  <i style={{ "--n": "28" }} />
                  <i style={{ "--n": "12" }} />
                  <i style={{ "--n": "25" }} />
                  <i style={{ "--n": "9" }} />
                  <i style={{ "--n": "22" }} />
                  <i style={{ "--n": "6" }} />
                  <i style={{ "--n": "19" }} />
                </div>
                {" "}
                <div className="pipe">
                  <span className="p1">Extract</span>
                  <span className="p2">Transcribe</span>
                  <span className="p3">Speakers</span>
                  <span className="p4">Thread</span>
                </div>
                {" "}
                <div style={{ marginTop: "12px" }}>
                  <div className="tr-row a2">
                    <span className="m">00:41</span>
                    <span>
                      <b>Maya</b>
                      {" "}The overdue number is wrong for 60-day terms.
                    </span>
                  </div>
                  <div className="tr-row a3">
                    <span className="m">01:02</span>
                    <span>
                      <b>Tomasz</b>
                      {" "}Terms are per customer now.
                    </span>
                  </div>
                  <div className="tr-row a4">
                    <span className="m">01:15</span>
                    <span>
                      <b>Claude</b>
                      {" "}Two action items found. Open them as threads?
                    </span>
                  </div>
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

export function ASampleTranscript() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split even">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">A sample transcript</p>
            {" "}
            <h2 className="d2">Named speakers, in order, with times</h2>
            {" "}
            <p className="body">The transcript is plain text in the meeting folder, so an agent can read it and so can you.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <ul className="transcript rise">
              {" "}
              <li>
                <span className="m">00:41</span>
                <b>Maya</b>
                <span>The overdue number on the invoice page is wrong for anything on 60-day terms.</span>
              </li>
              {" "}
              <li>
                <span className="m">01:02</span>
                <b>Tomasz</b>
                <span>Terms are per customer now, so it needs to read them from the account.</span>
              </li>
              {" "}
              <li>
                <span className="m">01:15</span>
                <b>Maya</b>
                <span>Can we also get the CSV out before Friday? Finance keeps asking.</span>
              </li>
              {" "}
              <li>
                <span className="m">01:24</span>
                <b>Tomasz</b>
                <span>That one is small. I'll give it to an agent this afternoon.</span>
              </li>
              {" "}
            </ul>
            <p className="cap">Sample conversation. The people are made up.</p>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Privacy</p>
            <h2 className="d2">The audio stays on your computer</h2>
          </div>
          {" "}
          <p className="lead">Only the transcript and the screen frames reach Claude.</p>
          {" "}
        </div>
        {" "}
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Where it goes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Audio</th>
                <td data-l="Where it goes">Stays on this computer</td>
              </tr>
              <tr>
                <th scope="row">Transcript</th>
                <td data-l="Where it goes">Sent to Claude for the summary and your questions</td>
              </tr>
              <tr>
                <th scope="row">Screen frames</th>
                <td data-l="Where it goes">Sent to Claude when the recording is a video</td>
              </tr>
              <tr>
                <th scope="row">Voice profiles</th>
                <td data-l="Where it goes">Kept on this computer, under names you give them</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function SetUp() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split even">
          <div className="stack rise" style={{ "--s": "16px" }}>
            <p className="kick">Set-up</p>
            <h2 className="d2">The speech engine is a separate download</h2>
          </div>
          <div className="stack rise">
            <p className="lead">It downloads the first time you ask for it, and every Eizen install on the computer shares it.</p>
            <p className="small">Models include Whisper and NVIDIA Parakeet, and a Bangla fine-tune of Whisper.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Next() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/reach">
        <img src="/assets/img/la-silla.webp" srcSet="/assets/img/la-silla-s.webp 900w, /assets/img/la-silla-m.webp 1200w, /assets/img/la-silla.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Next</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Reach
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
