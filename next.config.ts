import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // The site used to be plain HTML files. Old links and indexed URLs move permanently to the new routes.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page(product|lanes|browser|memory|automation|meetings|reach|connections|teams|compare|security|download|about).html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
