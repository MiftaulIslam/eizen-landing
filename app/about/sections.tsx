import { VectorField } from "@/components/parts/VectorField";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Hero() {
  return (
    <section className="sec paper" style={{ paddingTop: "calc(var(--head) + clamp(64px,8vw,120px))" }}>
      <div className="wrap stack" style={{ "--s": "24px" }}>
        {" "}
        <p className="kick rise">The idea</p>
        {" "}
        <h1 className="d1 rise" style={{ maxWidth: "15em" }}>In linear algebra, eigen names what a transformation can’t turn</h1>
        {" "}
      </div>
    </section>
  );
}

export function ApplyAMatrixTo() {
  return (
    <section className="sec paper tight">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="body">Apply a matrix to a vector and it usually ends up pointing somewhere new. An eigenvector is one of the exceptions. The matrix can make it longer or shorter, and it stays on the same line. The number that says how much longer is its eigenvalue, written with a lambda.</p>
            {" "}
            <p className="body">Coding agents are transformations too. They take a repository and return a different one, many times an hour. We wanted a tool that keeps the things that should survive that: which branch, whose request, what reason.</p>
            {" "}
            <p className="body">The word eigen is German for "own", which also fits an app that gives each thread its own folder, its own port and its own browser.</p>
            {" "}
          </div>
          <div className="stack rise" style={{ "--s": "12px" }}>
            <div className="win">
              <img src="/assets/img/gemini-laser.webp" srcSet="/assets/img/gemini-laser-m.webp 1200w, /assets/img/gemini-laser.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 40px), min(780px, 51vw)" alt="Star trails around a fixed point" loading="lazy" />
            </div>
            <p className="cap">A long exposure: every star moves and the axis does not</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InMotion() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="split even">
          <div className="med rise">
            <div className="live field">
              <VectorField />
              <p className="ef-t" aria-live="off">Before the matrix</p>
            </div>
          </div>
          <div className="txt stack rise" style={{ "--s": "16px" }}>
            <p className="kick">In motion</p>
            <h2 className="d2">Red arrows keep their heading</h2>
            <p className="body">These arrows start on a circle and a real matrix acts on them. Its eigenvalues are 2.5 and 0.5, so one red pair grows and the other shrinks, and neither leaves its line.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TheMark() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">The mark</p>
            <h2 className="d2">How the logo is drawn</h2>
          </div>
          {" "}
          <p className="lead">The logo is three bars with lengths in the ratio 38, 24 and 38. All three share one slope, and their left ends fall on one straight line. That slope is 0.325 across for every 1 up, and every arrow and slanted edge on this site uses it.</p>
          {" "}
        </div>
        {" "}
        <div className="bars rise" data-bars="" aria-hidden="true">
          <div className="bar">
            <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(1220px, 81vw)" alt="" loading="lazy" />
          </div>
          <div className="bar">
            <img src="/assets/img/rubin-sky.webp" srcSet="/assets/img/rubin-sky-s.webp 900w, /assets/img/rubin-sky-m.webp 1200w, /assets/img/rubin-sky.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(1220px, 81vw)" alt="" loading="lazy" />
          </div>
          <div className="bar">
            <img src="/assets/img/kitt-peak.webp" srcSet="/assets/img/kitt-peak-s.webp 900w, /assets/img/kitt-peak-m.webp 1200w, /assets/img/kitt-peak.webp 2400w" sizes="(max-width: 1080px) calc(100vw - 110px), min(1220px, 81vw)" alt="" loading="lazy" />
          </div>
        </div>
        {" "}
        <div className="btns" style={{ marginTop: "40px" }}>
          <Button href="/assets/brand/mark-lamp.svg" variant="outline" download>Mark on dark</Button>
          <Button href="/assets/brand/mark-lamp-ink.svg" variant="outline" download>Mark on light</Button>
          <Button href="/assets/brand/app-icon.png" variant="outline" download>App icon</Button>
        </div>
      </div>
    </section>
  );
}

export function BuiltOn() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise">
            <p className="kick">Built on</p>
            <h2 className="d2">Open source underneath</h2>
          </div>
          <div className="stack rise">
            <p className="body">
              Eizen began as a Tauri port of{" "}
              <ArrowLink href="https://github.com/NazmusSayad/offsite" external>
                an open-source project
              </ArrowLink>
              {" "}by Nazmus Sayad, released under the MIT license, and it keeps that project's approach of using the same sessions as the CLIs.
            </p>
            <p className="body">The site's type is Newsreader, Schibsted Grotesk and JetBrains Mono.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Credits() {
  return (
    <section className="sec paper " id="credits">
      <div className="wrap">
        <div className="sec-head rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Credits</p>
            <h2 className="d2">Photographs and footage</h2>
          </div>
          {" "}
          <p className="lead">The sky on this site is real. Everything below is used under a Creative Commons Attribution 4.0 licence.</p>
          {" "}
        </div>
        <div className="rise">
          <table className="tbl stack-m">
            <thead>
              <tr>
                <th scope="col">Work</th>
                <th scope="col">Credit</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Star trails above the Blanco telescope (video)</th>
                <td data-l="Credit">CTIO/NOIRLab/NSF/AURA/D. Munizaga</td>
                <td data-l="Source">
                  <ArrowLink href="https://noirlab.edu/public/videos/CTIO_4m_Startrails_CometMode_DMunizaga-001-CC/" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Starry sky above the Visitor Center telescope (video)</th>
                <td data-l="Credit">KPNO/NOIRLab/NSF/AURA/R. Sparks</td>
                <td data-l="Source">
                  <ArrowLink href="https://noirlab.edu/public/videos/Rob-VC-Telescope-TL-9-27-24-CC/" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Milky Way and Moon over SOAR (video)</th>
                <td data-l="Credit">NOIRLab/NSF/AURA/P. Horálek</td>
                <td data-l="Source">
                  <ArrowLink href="https://noirlab.edu/public/videos/2025_04_20-21_Pachon_TLS_15mm_SOAR_Moon_MT-CC1/" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Lights of the Night Show</th>
                <td data-l="Credit">International Gemini Observatory/NOIRLab/NSF/AURA/J. Pollard</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Lights_of_the_Night_Show_(iotw2525a).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Star Trails Above Gemini North</th>
                <td data-l="Credit">International Gemini Observatory/NOIRLab/NSF/AURA/T. Matsopoulos</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Star_Trails_Above_Gemini_North_(iotw2506a).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Stars Swirl above Gemini North</th>
                <td data-l="Credit">NOIRLab/NSF/AURA</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Stars_Swirl_above_Gemini_North_(5D-54206-seq-CC5).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Trails Through the Night Sky</th>
                <td data-l="Credit">KPNO/NOIRLab/NSF/AURA</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Trails_Through_the_Night_Sky_(iotw2033a).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Trails Near and Far</th>
                <td data-l="Credit">CTIO/NOIRLab/NSF/AURA/D. Munizaga</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Trails_Near_and_Far_(iotw2009a).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Rubin Observatory Under the Milky Way</th>
                <td data-l="Credit">Hernán Stockebrand</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Rubin_Observatory_Under_the_Milky_Way_(noirlab2409b).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Milky Way Reflections</th>
                <td data-l="Credit">RubinObs/NOIRLab/SLAC/DOE/NSF/AURA/B. Quint</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Milky_Way_Reflections_(rubin-20250523-Rubin-Patio-2-0001).jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
              <tr>
                <th scope="row">Milky Way Shines over Snowy La Silla</th>
                <td data-l="Credit">ESO/José Francisco Salgado</td>
                <td data-l="Source">
                  <ArrowLink href="https://commons.wikimedia.org/wiki/File:Milky_Way_Shines_over_Snowy_La_Silla.jpg" external>
                    Source
                  </ArrowLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tbl-note small">
          Colour on the Blanco and SOAR footage has been adjusted, and clips are trimmed and shortened.{" "}
          <ArrowLink href="https://creativecommons.org/licenses/by/4.0/" external>
            CC BY 4.0
          </ArrowLink>
        </p>
      </div>
    </section>
  );
}
