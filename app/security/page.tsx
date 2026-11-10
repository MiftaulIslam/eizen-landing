import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { NextTeamsDownload } from "@/components/parts/NextTeamsDownload";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, TheBoundary, StaysOnThisComputer, LeavesThisComputer, Approvals, LimitingTheAgent, RemoteAccess, BeCarefulWith } from "./sections";

export const metadata: Metadata = pageMetadata("/security");

export default function Page() {
  return (
    <SitePage path="/security" current="/security">
      <Hero />
      <TheBoundary />
      <StaysOnThisComputer />
      <LeavesThisComputer />
      <Approvals />
      <LimitingTheAgent />
      <RemoteAccess />
      <BeCarefulWith />
      <NextTeamsDownload />
      <FinalCta />
    </SitePage>
  );
}
