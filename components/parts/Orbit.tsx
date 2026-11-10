import { Mark } from "@/components/parts/Mark";
import { ServiceIcon, type ServiceName } from "@/components/ui/ServiceIcon";

// What each service gives the agent, shortened from the table on /connections.
const OUTER: Array<[ServiceName, string]> = [
  ["GitHub", "Issues, pull requests"],
  ["Linear", "Issues and projects"],
  ["Jira", "Jira issues"],
  ["Notion", "Pages and databases"],
  ["Gmail", "Read, search, draft"],
  ["Figma", "Frames, styles, variables"],
  ["AWS", "API calls and docs"],
  ["Vercel", "Deployments, build logs"],
];

const INNER: Array<[ServiceName, string]> = [
  ["Neon", "Branches, queries"],
  ["Supabase", "Tables, queries, logs"],
  ["Cloudflare", "Workers, DNS, R2"],
  ["Context7", "Current library docs"],
  ["Apify", "Scrapers and Actors"],
];

type RingProps = { items: Array<[ServiceName, string]>; inset: string; duration: string; reverse?: boolean };

// The spokes turn in a ring of their own under the mark, in step with the services above it,
// so a pulse can start behind the mark while the service names stay on top.
function Spokes({ items, inset, duration, reverse }: RingProps) {
  return (
    <div className="ring spokes" style={{ "--in": inset, "--d": duration, "--dir": reverse ? "reverse" : "normal" }}>
      {items.map(([name], i) => (
        <div className="sat" key={name} style={{ "--a": `${(360 / items.length) * i}deg` }}>
          <i className="spoke" />
          <i className="pulse" />
        </div>
      ))}
    </div>
  );
}

function Ring({ items, inset, duration, reverse }: RingProps) {
  return (
    <div className="ring" style={{ "--in": inset, "--d": duration, "--dir": reverse ? "reverse" : "normal" }}>
      {items.map(([name, gets], i) => {
        const a = `${(360 / items.length) * i}deg`;
        return (
          <div className="sat" key={name} style={{ "--a": a }}>
            <span className="tag" style={{ "--a": a, "--d": duration, "--rev": reverse ? "normal" : "reverse" }}>
              <ServiceIcon name={name} />
              <span className="nm">{name}</span>
              <span className="got">{gets}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function Orbit() {
  const outer = { items: OUTER, inset: "2%", duration: "96s" };
  const inner = { items: INNER, inset: "22%", duration: "72s", reverse: true };
  return (
    <div className="orbit live" aria-hidden="true" data-orbit>
      <Spokes {...outer} />
      <Spokes {...inner} />
      <div className="core">
        <Mark />
      </div>
      <Ring {...outer} />
      <Ring {...inner} />
    </div>
  );
}
