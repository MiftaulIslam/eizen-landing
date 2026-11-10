import type { ReactNode } from "react";
import { Arrow } from "@/components/parts/Arrow";

export type FaqItem = { q: string; a: ReactNode | string };

type Props = {
  items: FaqItem[];
  /** Prefix for element ids. Must be unique on the page. */
  id?: string;
  /** Name of the question list, read by screen readers and shown above it. */
  label?: string;
  /** Who answers, shown above each reply. */
  agent?: string;
  /** Accessible name of the composer button that asks the next question. */
  next?: string;
};

// The FAQ as a thread: questions are threads in a sidebar, picking one sends it and the
// answer streams in (lib/effects/faq.ts). Every question and answer is in the HTML; without
// JavaScript the sidebar hides and the panels read as one transcript.
export function Faq({ items, id = "faq", label = "Questions", agent = "Eizen", next = "Ask the next question" }: Props) {
  // Questions with plain-text answers also go out as FAQPage data for search and AI answers.
  const plain = items.filter((item): item is { q: string; a: string } => typeof item.a === "string");
  const schema = plain.length
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: plain.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      }).replaceAll("<", String.fromCharCode(92) + "u003c") // a "<" in an answer cannot close the script
    : "";

  return (
    <div className="fq" data-faq>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      <div className="fq-side">
        <p className="fq-top" aria-hidden="true">
          <span>{label}</span>
          <span>{items.length}</span>
        </p>
        <div className="fq-list" role="tablist" aria-label={label} aria-orientation="vertical">
          {items.map((item, i) => (
            <button
              key={item.q}
              type="button"
              role="tab"
              className="fq-tab"
              id={`${id}-t${i}`}
              aria-controls={`${id}-p${i}`}
              aria-selected={i === 0}
              tabIndex={i === 0 ? 0 : -1}
            >
              <span className="dot" aria-hidden="true" />
              <span className="fq-tq">{item.q}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="fq-pane">
        <div className="fq-log">
          {items.map((item, i) => (
            <div key={item.q} className={i === 0 ? "fq-p on" : "fq-p"} role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} tabIndex={0}>
              <h3 className="fq-q">{item.q}</h3>
              <div className="fq-r">
                <p className="fq-who" aria-hidden="true">
                  <span className="dot" />
                  <span>{agent}</span>
                  <span className="fq-st" />
                </p>
                <div className="fq-a">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="fq-comp" aria-label={next}>
          <span className="fq-ph" aria-hidden="true">{items[0]?.q}</span>
          <span className="fq-go" aria-hidden="true">
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  );
}
