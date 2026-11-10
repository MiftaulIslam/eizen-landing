import type { MetadataRoute } from "next";
import { absolute, PAGES, UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: absolute(page.path),
    lastModified: UPDATED,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : page.path === "/download" ? 0.9 : 0.7,
    images: [absolute(`/og/${page.og}.jpg`)],
  }));
}
