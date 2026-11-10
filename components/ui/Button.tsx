import Link from "next/link";
import type { ReactNode } from "react";

// The site's buttons. The classes are the ones site.css already styles: "btn fill" is the light
// button on night sections (it turns dark inside .paper), "btn fill dark" is dark anywhere, and
// "btn line" is the outline. The hover fill lives in app/styles/buttons.css and
// lib/effects/buttons.ts, which reads the pointer's entry point. The label sits in .btn-t so it
// can invert where the fill has reached.
const VARIANTS = { light: "fill", dark: "fill dark", outline: "line" } as const;

type Props = {
  href: string;
  variant?: keyof typeof VARIANTS;
  size?: "md" | "sm";
  /** Render a plain <a> for another site. */
  external?: boolean;
  /** Pass "" or true for a file download, or a file name. */
  download?: boolean | string;
  prefetch?: boolean;
  className?: string;
  children: ReactNode;
};

const isFile = (href: string) => /\.[a-z0-9]{2,5}$/i.test(href.split(/[?#]/)[0]);

export function Button({ href, variant = "light", size = "md", external, download, prefetch, className, children }: Props) {
  const cls = ["btn", VARIANTS[variant], size === "sm" && "sm", className].filter(Boolean).join(" ");
  const plain = external || download !== undefined || /^[a-z]+:/i.test(href) || isFile(href);
  if (plain) {
    return (
      <a className={cls} href={href} download={typeof download === "string" ? download : download ? "" : undefined}>
        <span className="btn-t">{children}</span>
      </a>
    );
  }
  return (
    <Link className={cls} href={href} prefetch={prefetch}>
      <span className="btn-t">{children}</span>
    </Link>
  );
}
