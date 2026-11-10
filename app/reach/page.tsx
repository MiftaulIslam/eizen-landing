import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/parts/FinalCta";
import { Hero, Phone, Laptop, ReviewLinks, OneComputerDoesThe, Next } from "./sections";

export const metadata: Metadata = pageMetadata("/reach");

export default function Page() {
  return (
    <SitePage path="/reach">
      <Hero />
      <Phone />
      <Laptop />
      <ReviewLinks />
      <OneComputerDoesThe />
      <Next />
      <FinalCta />
    </SitePage>
  );
}
