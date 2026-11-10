import Link from "@/components/ui/Link";
import type { ReactNode } from "react";
import { Arrow } from "@/components/parts/Arrow";

// A text link with the slanted arrow. The second arrow waits below the first, out of sight,
// and slides in when the first one leaves on hover (app/styles/buttons.css).
type Props = {
  href: string;
  /** Render a plain <a> for another site. */
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function ArrowLink({ href, external, className, children }: Props) {
  const cls = className ? `lnk ${className}` : "lnk";
  const arrows = (
    <span className="arw" aria-hidden="true">
      <Arrow />
      <Arrow />
    </span>
  );
  if (external || /^[a-z]+:/i.test(href)) {
    return (
      <a className={cls} href={href}>
        {children}
        {arrows}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
      {arrows}
    </Link>
  );
}
