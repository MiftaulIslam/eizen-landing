import type { ReactNode } from "react";

/** Widths that match the site's breakpoints: at and above this the content renders inline. */
export type DrawerFrom = 721 | 861 | 1081;

type Props = {
  /** Unique on the page. The sheet gets this id and its title `${id}-title`. */
  id: string;
  /** Accessible name of the sheet when it has no title. */
  label: string;
  /** Shown at the top of the sheet, next to the close button. */
  title?: ReactNode;
  /** Content of the button that opens the sheet. Without it the sheet opens only from
   *  elements with data-drawer-open={id} or from lib/effects/drawer.ts. */
  trigger?: ReactNode;
  /** At and above this width it is not a drawer: the trigger and sheet chrome go away and the
   *  children sit in the layout as if the drawer were not there. Without it, it is always a drawer. */
  from?: DrawerFrom;
  className?: string;
  children: ReactNode;
};

// A bottom sheet on small screens (app/styles/drawer.css, lib/effects/drawer.ts). The wrappers use
// display: contents when inline, so wrapping an element does not change the layout around it.
// All content is in the server HTML; without scripts it always renders inline.
export function Drawer({ id, label, title, trigger, from, className, children }: Props) {
  const classes = ["dw", from ? `dw-${from}` : "dw-all", className].filter(Boolean).join(" ");
  return (
    <div className={classes} data-drawer={from ?? ""} data-label={label}>
      {trigger !== undefined && (
        <button type="button" className="dw-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls={id}>
          {trigger}
        </button>
      )}
      <div className="dw-layer" popover="manual">
        <div className="dw-scrim" aria-hidden="true" />
        <div className="dw-panel" id={id} tabIndex={-1}>
          <div className="dw-head">
            <span className="dw-grip" aria-hidden="true" />
            <p className="dw-title" id={`${id}-title`}>
              {title}
            </p>
            <button type="button" className="dw-close" aria-label="Close">
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            </button>
          </div>
          <div className="dw-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
