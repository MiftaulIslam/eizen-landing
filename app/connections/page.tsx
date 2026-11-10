import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { NextTeamsSecurity } from "@/components/parts/NextTeamsSecurity";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, OneClick, Hub, ConnectTwoGitHubsOr, Custom, WhereTheSecretsLive } from "./sections";

export const metadata: Metadata = pageMetadata("/connections");

export default function Page() {
  return (
    <SitePage path="/connections">
      <Hero />
      <OneClick />
      <Hub />
      <ConnectTwoGitHubsOr />
      <Custom />
      <WhereTheSecretsLive />
      <NextTeamsSecurity />
      <FinalCta />
    </SitePage>
  );
}
