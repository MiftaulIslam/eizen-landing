import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { NextTeamsDownload } from "@/components/parts/NextTeamsDownload";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, Eizen, SideBySide, AgainstATerminalAgent, AgainstAnAIEditor, AgainstAHostedAgent, AgainstYourOwnScripts } from "./sections";

export const metadata: Metadata = pageMetadata("/compare");

export default function Page() {
  return (
    <SitePage path="/compare" solid current="/compare">
      <Hero />
      <Eizen />
      <SideBySide />
      <AgainstATerminalAgent />
      <AgainstAnAIEditor />
      <AgainstAHostedAgent />
      <AgainstYourOwnScripts />
      <NextTeamsDownload />
      <FinalCta />
    </SitePage>
  );
}
