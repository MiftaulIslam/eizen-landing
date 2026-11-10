import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Eizen" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SitePage solid>
      <section className="sec night">
        <div className="wrap">
          <div className="stack" style={{ "--s": "24px", paddingTop: "clamp(48px,10vh,120px)" }}>
            <p className="kick">404</p>
            <h1 className="d1">There is no page at this address</h1>
            <p className="lead">It may have moved when the site changed. The tour and the download page are good places to start.</p>
            <div className="btns" style={{ marginTop: "16px" }}>
              <Button href="/">
                Go to the home page
              </Button>
              <Button href="/product" variant="outline">
                Take the tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
