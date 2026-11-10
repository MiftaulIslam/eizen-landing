import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, Section2, AskThisLine, TheNoteArrivesBefore, CorrectionsBecomeRules, BranchHistory, SideChats, Limits, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/memory");

export default function Page() {
  return (
    <SitePage path="/memory" solid>
      <Hero />
      <Section2 />
      <AskThisLine />
      <TheNoteArrivesBefore />
      <CorrectionsBecomeRules />
      <BranchHistory />
      <SideChats />
      <Limits />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
