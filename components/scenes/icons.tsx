import type { ReactNode } from "react";

// Small line icons for the items beside a scene. 20 by 20, drawn with currentColor.
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg className="fs-svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export const IconApproval = () => (
  <Icon>
    <rect x="2.5" y="3.5" width="15" height="11" rx="2.5" />
    <path d="M7 17.5h6M6.75 9.25l2.1 2.1 4.4-4.4" />
  </Icon>
);

export const IconSafetyNet = () => (
  <Icon>
    <path d="M10 2.5 16 4.75v4.6c0 3.7-2.45 6.4-6 8.15-3.55-1.75-6-4.45-6-8.15v-4.6Z" />
    <path d="M7.25 10h5.5" />
  </Icon>
);

export const IconLock = () => (
  <Icon>
    <rect x="4" y="8.75" width="12" height="8.75" rx="2" />
    <path d="M6.75 8.75V6.5a3.25 3.25 0 0 1 6.5 0v2.25M10 12.25v2" />
  </Icon>
);

export const IconChecks = () => (
  <Icon>
    <path d="M16.25 10a6.25 6.25 0 1 1-1.83-4.42M16.25 3v3.25H13" />
    <path d="m7.25 10.25 1.9 1.9 3.6-3.6" />
  </Icon>
);

export const IconModes = () => (
  <Icon>
    <path d="M3 6.5h7.5M14.5 6.5H17M3 13.5h2.5M9.5 13.5H17" />
    <circle cx="12.5" cy="6.5" r="2" />
    <circle cx="7.5" cy="13.5" r="2" />
  </Icon>
);

export const IconRules = () => (
  <Icon>
    <path d="M3.5 5.5h9M3.5 9.5h9M3.5 13.5h5M14.5 11.5v6M11.5 14.5h6" />
  </Icon>
);
