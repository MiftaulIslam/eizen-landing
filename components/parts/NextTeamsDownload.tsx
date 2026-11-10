import Link from "@/components/ui/Link";
import { Arrow } from "@/components/parts/Arrow";

export function NextTeamsDownload() {
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
      <Link href="/download">
        <img src="/assets/img/kitt-peak.webp" srcSet="/assets/img/kitt-peak-s.webp 900w, /assets/img/kitt-peak-m.webp 1200w, /assets/img/kitt-peak.webp 2400w" sizes="(max-width: 720px) 100vw, 50vw" alt="" loading="lazy" />
        <span className="kick">Get it</span>
        <span className="d2" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
          Download
          <Arrow />
        </span>
      </Link>
    </nav>
  );
}
