import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Search engines and AI search crawlers are all welcome: the site exists to be found and quoted.
// To keep the copy out of model training, add a Disallow rule for GPTBot, CCBot, Google-Extended or anthropic-ai.
const AI_SEARCH = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_SEARCH, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
