"use client";

import { useEffect } from "react";
import { start as startButtons } from "@/lib/effects/buttons";
import { start as startFaq } from "@/lib/effects/faq";
import { start as startHome } from "@/lib/effects/home";
import { start as startInteract } from "@/lib/effects/interact";
import { start as startNav } from "@/lib/effects/nav";
import { start as startReveal } from "@/lib/effects/reveal";
import { startLive } from "@/lib/live-effects";
import { createScope } from "@/lib/scope";
import { startSite } from "@/lib/site-effects";

// Mounted once per page, so it starts on arrival and stops on the way out.
export function SiteEffects() {
  useEffect(() => {
    const scope = createScope();
    startSite(scope);
    startLive(scope);
    for (const start of [startNav, startReveal, startButtons, startHome, startInteract, startFaq]) start(scope);
    return () => scope.stop();
  }, []);
  return null;
}
