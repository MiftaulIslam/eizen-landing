import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { NextTeamsSecurity } from "@/components/parts/NextTeamsSecurity";
import { Hero, FirstRun, Install, Requirements, Updating } from "./sections";

export const metadata: Metadata = pageMetadata("/download");

export default function Page() {
  return (
    <SitePage path="/download">
      <Hero />
      <FirstRun />
      <Install />
      <Requirements />
      <Updating />
      <NextTeamsSecurity />
    </SitePage>
  );
}
