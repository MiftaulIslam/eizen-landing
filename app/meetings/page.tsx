import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, HowItRuns, Section3, WhileItRuns, ASampleTranscript, Privacy, SetUp, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/meetings");

export default function Page() {
  return (
    <SitePage path="/meetings">
      <Hero />
      <HowItRuns />
      <Section3 />
      <WhileItRuns />
      <ASampleTranscript />
      <Privacy />
      <SetUp />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
