import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#0b0d14",
    theme_color: "#0b0d14",
    icons: [
      { src: "/assets/brand/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/assets/brand/app-icon.png", type: "image/png", sizes: "1024x1024" },
    ],
  };
}
