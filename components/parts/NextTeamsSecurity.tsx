import Link from "@/components/ui/Link";
import { Arrow } from "@/components/parts/Arrow";

export function NextTeamsSecurity() {
  return (
    <nav className="next" aria-label="Continue reading">
      <Link href="/teams">
        <img src="/assets/img/la-silla.webp" srcSet="/assets/img/la-silla-s.webp 900w, /assets/img/la-silla-m.webp 1200w, /assets/img/la-silla.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Rolling it out</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          For teams
          <Arrow />
        </span>
      </Link>
      <Link href="/security">
        <img src="/assets/img/gemini-trails.webp" srcSet="/assets/img/gemini-trails-s.webp 900w, /assets/img/gemini-trails-m.webp 1200w, /assets/img/gemini-trails.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">What stays where</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Security
          <Arrow />
        </span>
      </Link>
    </nav>
  );
}
