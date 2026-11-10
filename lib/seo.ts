import type { Metadata } from "next";
import { absolute, DOWNLOAD_PATH, FEATURES, pageFor, SITE_DESCRIPTION, SITE_NAME, SITE_URL, UPDATED, VERSION } from "./site";

export function pageMetadata(path: string): Metadata {
  const page = pageFor(path);
  const image = { url: `/og/${page.og}.jpg`, width: 1200, height: 630, alt: page.title };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: page.title,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image.url],
    },
  };
}

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

/** The schema.org graph for one page: who publishes it, what it is about, and where it sits. */
export function pageGraph(path: string) {
  const page = pageFor(path);
  const url = absolute(path);
  const nodes: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absolute("/assets/brand/app-icon.png"), width: 1024, height: 1024 },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "SoftwareApplication",
      "@id": APP_ID,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "AI coding agent workbench",
      operatingSystem: "Windows 10, Windows 11",
      softwareVersion: VERSION,
      fileSize: "70MB",
      downloadUrl: absolute(DOWNLOAD_PATH),
      softwareRequirements: "64-bit Windows 10 or 11 with WebView2; Git for lanes and branch history; a Claude, Codex or OpenCode account",
      featureList: FEATURES,
      screenshot: [absolute("/assets/screens/thread.webp"), absolute("/assets/screens/browser.webp"), absolute("/assets/screens/ask-line.webp")],
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": page.type ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": page.type === "AboutPage" ? ORG_ID : APP_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: absolute(`/og/${page.og}.jpg`), width: 1200, height: 630 },
      dateModified: UPDATED,
      ...(path === "/" ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    },
  ];
  if (path !== "/") {
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}
