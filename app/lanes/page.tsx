import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, TheMap, TwoAgentsOneFolder, HowItWorks, Try3Ways, TryItHere, Limits, Questions, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/lanes");

export default function Page() {
  return (
    <SitePage path="/lanes" current="/lanes">
      <Hero />
      <TheMap />
      <TwoAgentsOneFolder />
      <HowItWorks />
      <Try3Ways />
      <TryItHere />
      <Limits />
      <Questions />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
