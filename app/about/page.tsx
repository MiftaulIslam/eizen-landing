import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { NextTeamsDownload } from "@/components/parts/NextTeamsDownload";
import { Hero, ApplyAMatrixTo, InMotion, TheMark, BuiltOn, Credits } from "./sections";

export const metadata: Metadata = pageMetadata("/about");

export default function Page() {
  return (
    <SitePage path="/about" solid>
      <Hero />
      <ApplyAMatrixTo />
      <InMotion />
      <TheMark />
      <BuiltOn />
      <Credits />
      <NextTeamsDownload />
    </SitePage>
  );
}
