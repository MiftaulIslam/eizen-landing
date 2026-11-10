import { Mark } from "@/components/parts/Mark";

export function Orbit() {
  return (
    <div className="orbit live" aria-hidden="true">
      <div className="ring" style={{ "--in": "2%", "--d": "96s", "--dir": "normal" }}>
        <div className="sat" style={{ "--a": "0deg" }}>
          <span className="tag" style={{ "--a": "0deg", "--d": "96s", "--rev": "reverse" }}>GitHub</span>
        </div>
        <div className="sat" style={{ "--a": "45deg" }}>
          <span className="tag" style={{ "--a": "45deg", "--d": "96s", "--rev": "reverse" }}>Linear</span>
        </div>
        <div className="sat" style={{ "--a": "90deg" }}>
          <span className="tag" style={{ "--a": "90deg", "--d": "96s", "--rev": "reverse" }}>Jira</span>
        </div>
        <div className="sat" style={{ "--a": "135deg" }}>
          <span className="tag" style={{ "--a": "135deg", "--d": "96s", "--rev": "reverse" }}>Notion</span>
        </div>
        <div className="sat" style={{ "--a": "180deg" }}>
          <span className="tag" style={{ "--a": "180deg", "--d": "96s", "--rev": "reverse" }}>Gmail</span>
        </div>
        <div className="sat" style={{ "--a": "225deg" }}>
          <span className="tag" style={{ "--a": "225deg", "--d": "96s", "--rev": "reverse" }}>Figma</span>
        </div>
        <div className="sat" style={{ "--a": "270deg" }}>
          <span className="tag" style={{ "--a": "270deg", "--d": "96s", "--rev": "reverse" }}>AWS</span>
        </div>
        <div className="sat" style={{ "--a": "315deg" }}>
          <span className="tag" style={{ "--a": "315deg", "--d": "96s", "--rev": "reverse" }}>Vercel</span>
        </div>
      </div>
      <div className="ring" style={{ "--in": "22%", "--d": "72s", "--dir": "reverse" }}>
        <div className="sat" style={{ "--a": "0deg" }}>
          <span className="tag" style={{ "--a": "0deg", "--d": "72s", "--rev": "normal" }}>Neon</span>
        </div>
        <div className="sat" style={{ "--a": "72deg" }}>
          <span className="tag" style={{ "--a": "72deg", "--d": "72s", "--rev": "normal" }}>Supabase</span>
        </div>
        <div className="sat" style={{ "--a": "144deg" }}>
          <span className="tag" style={{ "--a": "144deg", "--d": "72s", "--rev": "normal" }}>Cloudflare</span>
        </div>
        <div className="sat" style={{ "--a": "216deg" }}>
          <span className="tag" style={{ "--a": "216deg", "--d": "72s", "--rev": "normal" }}>Context7</span>
        </div>
        <div className="sat" style={{ "--a": "288deg" }}>
          <span className="tag" style={{ "--a": "288deg", "--d": "72s", "--rev": "normal" }}>Apify</span>
        </div>
      </div>
      <div className="core">
        <Mark />
      </div>
    </div>
  );
}
