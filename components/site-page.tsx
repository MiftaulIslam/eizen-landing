import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { SiteEffects } from "@/components/site-effects";
import { pageGraph } from "@/lib/seo";

export function SitePage({
  path,
  solid,
  current,
  after,
  children,
}: {
  /** The registered route, for structured data. Leave it out on pages that should not be indexed. */
  path?: string;
  solid?: boolean;
  current?: string;
  after?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {path ? <JsonLd data={pageGraph(path)} /> : null}
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header solid={solid} current={current} />
      <main id="main">{children}</main>
      <Footer />
      {after}
      <SiteEffects />
    </>
  );
}
