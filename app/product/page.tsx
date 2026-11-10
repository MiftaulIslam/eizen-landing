import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, Composer, ReadWhatItDid, Usage, Panels, Section6, Git, Accounts, BuiltInGuide, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/product");

export default function Page() {
  return (
    <SitePage path="/product">
      <Hero />
      <Composer />
      <ReadWhatItDid />
      <Usage />
      <Panels />
      <Section6 />
      <Git />
      <Accounts />
      <BuiltInGuide />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
