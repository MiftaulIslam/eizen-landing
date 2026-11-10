import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./styles/site.css";
import "./styles/live.css";
import "./styles/steps.css";
import "./styles/nav.css";
import "./styles/reveal.css";
import "./styles/buttons.css";
import "./styles/home.css";
import "./styles/interact.css";
import "./styles/faq.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: { url: "/assets/brand/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/assets/brand/app-icon.png", sizes: "1024x1024" },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before first paint: the CSS hides entrance states only when scripts are on. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="night">{children}</body>
    </html>
  );
}
