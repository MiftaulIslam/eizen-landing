"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

// next/link prefetches every link that scrolls into view, and a prefetched page brings a preload
// for its hero photo with it, so a page full of links downloaded other pages' photos for nothing.
// This link prefetches when someone shows intent instead: pointer over it, keyboard focus or a touch.
// `prefetch={false}` turns that off too.
export default function Link({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof NextLink>) {
  const router = useRouter();
  const href = typeof props.href === "string" ? props.href : (props.href.pathname ?? "");
  const warm = () => {
    if (prefetch !== false && href.startsWith("/")) router.prefetch(href);
  };
  return (
    <NextLink
      {...props}
      prefetch={false}
      onMouseEnter={(event) => {
        warm();
        onMouseEnter?.(event);
      }}
      onFocus={(event) => {
        warm();
        onFocus?.(event);
      }}
      onTouchStart={(event) => {
        warm();
        onTouchStart?.(event);
      }}
    />
  );
}
