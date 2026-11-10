import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { PeekLayer } from "@/components/peek-layer";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, WorksWith, AgentsWriteCodeFaster, OneRepository, Lanes, WhatEveryThreadGets, TryItHere, AlsoInTheApp, TheIdeaBehindIt, TheMaths, Browser, Memory, ANormalDay, NightShift, TheRuleItFollows, ForTeams, ComparedWith, Reach, Security, Connections, Questions } from "./sections";

export const metadata: Metadata = pageMetadata("/");

export default function Page() {
  return (
    <SitePage path="/" after={<PeekLayer />}>
      <Hero />
      <WorksWith />
      <AgentsWriteCodeFaster />
      <OneRepository />
      <Lanes />
      <WhatEveryThreadGets />
      <TryItHere />
      <AlsoInTheApp />
      <TheIdeaBehindIt />
      <TheMaths />
      <Browser />
      <Memory />
      <ANormalDay />
      <NightShift />
      <TheRuleItFollows />
      <ForTeams />
      <ComparedWith />
      <Reach />
      <Security />
      <Connections />
      <Questions />
      <FinalCta />
    </SitePage>
  );
}
