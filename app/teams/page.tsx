import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { Hero, TheExample, StartToFinish, SharingTheSetup, WhoDoesWhat, ANormalWeek, AWeekAtHarbor, HowItHelps, Limits, AgainstTheAlternatives, StartWithOneTeam } from "./sections";

export const metadata: Metadata = pageMetadata("/teams");

export default function Page() {
  return (
    <SitePage path="/teams" current="/teams">
      <Hero />
      <TheExample />
      <StartToFinish />
      <SharingTheSetup />
      <WhoDoesWhat />
      <ANormalWeek />
      <AWeekAtHarbor />
      <HowItHelps />
      <Limits />
      <AgainstTheAlternatives />
      <StartWithOneTeam />
    </SitePage>
  );
}
