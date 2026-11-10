import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="final night deep">
      {" "}
      <div className="wrap grid2">
        {" "}
        <div className="stack rise" style={{ "--s": "20px" }}>
          {" "}
          <h2 className="d2">Open a lane on the repo you were going to work on anyway</h2>
          {" "}
          <p className="lead">The setup checklist handles Claude Code, sign-in and Git, so you won't need a terminal.</p>
          {" "}
          <div className="btns" style={{ marginTop: "16px" }}>
            <Button href="/download">Download for Windows</Button>
            <Button href="/teams" variant="outline">Plan a team rollout</Button>
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
