"use client";

import { useEffect } from "react";
import { startLive } from "@/lib/live-effects";
import { createScope } from "@/lib/scope";
import { startSite } from "@/lib/site-effects";

// Mounted once per page, so it starts on arrival and stops on the way out.
export function SiteEffects() {
  useEffect(() => {
    const scope = createScope();
    startSite(scope);
    startLive(scope);
    return () => scope.stop();
  }, []);
  return null;
}
