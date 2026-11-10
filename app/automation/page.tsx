import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, NightShift, HowANightRuns, InTheMorning, Schedules, ProjectChecks, AwayMode, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/automation");

export default function Page() {
  return (
    <SitePage path="/automation">
      <Hero />
      <NightShift />
      <HowANightRuns />
      <InTheMorning />
      <Schedules />
      <ProjectChecks />
      <AwayMode />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
