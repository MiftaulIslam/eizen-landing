import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, OnePerThread, WatchItWork, TwoKindsOfTab, ItWorksThePage, WhatYouCanDo, Errors, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/browser");

export default function Page() {
  return (
    <SitePage path="/browser">
      <Hero />
      <OnePerThread />
      <WatchItWork />
      <TwoKindsOfTab />
      <ItWorksThePage />
      <WhatYouCanDo />
      <Errors />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
