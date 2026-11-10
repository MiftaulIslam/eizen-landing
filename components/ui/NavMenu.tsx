import Link from "next/link";
import type { ReactNode } from "react";

// A row of navigation links with a pill that slides to the hovered or focused item and rests on
// the current page (or on an open menu button). Markup only: lib/effects/nav.ts moves the pill for
// every [data-nav-menu], and app/styles/nav.css draws it. Without scripts the current item is
// still marked by its colour.

export function NavMenu({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <nav className={className ? `navmenu ${className}` : "navmenu"} aria-label={label} data-nav-menu="">
      {children}
      <span className="nav-pill" aria-hidden="true" />
      <span className="nav-line" aria-hidden="true" />
    </nav>
  );
}

export function NavItem({
  href,
  current,
  prefetch,
  children,
}: {
  href: string;
  /** The path of the page being shown. The item whose href matches gets aria-current="page". */
  current?: string;
  prefetch?: boolean;
  children: ReactNode;
}) {
  return (
    <Link href={href} prefetch={prefetch} aria-current={current === href ? "page" : undefined}>
      {children}
    </Link>
  );
}

/** A button that opens a panel. The chevron turns while aria-expanded is "true". */
export function NavTrigger({ controls, children, ...data }: { controls: string; children: ReactNode } & { [key: `data-${string}`]: string }) {
  return (
    <button type="button" className="nav-trigger" aria-expanded="false" aria-controls={controls} {...data}>
      {children}
      <svg className="nav-chev" viewBox="0 0 10 6" aria-hidden="true">
        <path d="M1 1l4 4 4-4" />
      </svg>
    </button>
  );
}
