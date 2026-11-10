// One list of pages feeds the page metadata, structured data, sitemap and llms.txt.

// The live address. NEXT_PUBLIC_SITE_URL overrides it, for example on a staging copy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://eizen.miftaul.com").replace(/\/$/, "");
export const SITE_NAME = "Eizen";
export const SITE_DESCRIPTION =
  "A Windows desktop app for Claude Code, Codex and OpenCode. Each thread gets its own git worktree, port and browser, so several agents can work on one repo.";
// Change this date whenever the page copy changes. It is shown in the footer and sent to crawlers.
export const UPDATED = "2026-11-10";
export const VERSION = "0.1.0";
export const DOWNLOAD_PATH = "/downloads/Eizen_0.1.0_x64-setup.exe";

export type SitePage = {
  path: string;
  /** Short name for breadcrumbs and llms.txt. */
  name: string;
  title: string;
  description: string;
  og: string;
  type?: "WebPage" | "AboutPage";
  section: "Product" | "Adopting it" | "About";
};

export const PAGES: SitePage[] = [
  {
    path: "/",
    name: "Home",
    title: "Eizen: run Claude Code, Codex and OpenCode side by side",
    description: SITE_DESCRIPTION,
    og: "home",
    section: "Product",
  },
  {
    path: "/product",
    name: "Tour",
    title: "Tour of Eizen: threads, diffs, terminal, editor and usage",
    description:
      "A tour of the Eizen window: threads with status lamps, a composer you can steer mid-turn, diffs, sub agent tasks, a browser per thread, git and usage per model.",
    og: "product",
    section: "Product",
  },
  {
    path: "/lanes",
    name: "Lanes",
    title: "Lanes: a git worktree for every Eizen thread",
    description:
      "Each thread gets its own branch, folder, dev server port and browser, so agents working on one repo stay out of each other's way.",
    og: "lanes",
    section: "Product",
  },
  {
    path: "/browser",
    name: "Browser",
    title: "The Eizen browser: one real browser per agent thread",
    description:
      "Every thread has its own real browser. The agent can open pages, click, type, read errors and take screenshots while the thread is off screen.",
    og: "browser",
    section: "Product",
  },
  {
    path: "/memory",
    name: "Memory",
    title: "Memory in Eizen: why every line is there",
    description:
      "Eizen records which agent turn wrote each line. Alt+L shows the request and the reason, corrections become project rules, and any turn can be restored.",
    og: "memory",
    section: "Product",
  },
  {
    path: "/automation",
    name: "Automation",
    title: "Automation in Eizen: schedules, triggers and Night shift",
    description:
      "Run agents on a clock, when files change, when a commit lands, when CI fails, or overnight when an account has spare headroom.",
    og: "automation",
    section: "Product",
  },
  {
    path: "/meetings",
    name: "Meetings",
    title: "Eizen meetings: recordings transcribed on your computer",
    description:
      "Drop in a recording. Eizen transcribes it locally with Whisper or Parakeet, tells the speakers apart and opens a Claude thread on the result.",
    og: "meetings",
    section: "Product",
  },
  {
    path: "/reach",
    name: "Reach",
    title: "Reach: use Eizen from your phone, laptop or a link",
    description:
      "Your PC does the work. Check in from a phone, forward its dev ports to a laptop, or send someone a link to comment on a running page.",
    og: "reach",
    section: "Product",
  },
  {
    path: "/connections",
    name: "Connections",
    title: "Eizen connections: GitHub, Linear, Neon, AWS and more",
    description:
      "Give Eizen agents GitHub, Linear, Jira, Notion, Neon, Supabase, Vercel or AWS in one click, or any MCP server through Custom. Tokens stay on your PC.",
    og: "connections",
    section: "Product",
  },
  {
    path: "/teams",
    name: "For teams",
    title: "Eizen for teams: from first install to a daily merge",
    description:
      "How a software team sets up Eizen, what each person configures, what a normal week looks like, and what Eizen does not do yet.",
    og: "teams",
    section: "Adopting it",
  },
  {
    path: "/compare",
    name: "Compare",
    title: "Eizen vs terminal agents, AI editors and hosted agents",
    description:
      "What Eizen adds to a terminal agent, where an AI editor is better, what a hosted agent can do that Eizen cannot.",
    og: "compare",
    section: "Adopting it",
  },
  {
    path: "/security",
    name: "Security",
    title: "Eizen security: what stays on your PC and what leaves",
    description:
      "Where threads, tokens and snapshots live, what goes to model providers, and the controls that limit what an agent can do.",
    og: "security",
    section: "Adopting it",
  },
  {
    path: "/download",
    name: "Download",
    title: "Download Eizen for Windows",
    description:
      "Download Eizen 0.1.0 for Windows 10 and 11, 64-bit. A setup checklist installs Claude Code, signs you in and checks Git, so you don't need a terminal.",
    og: "download",
    section: "Adopting it",
  },
  {
    path: "/about",
    name: "About",
    title: "About Eizen: the idea, the mark and the credits",
    description:
      "What an eigenvector has to do with coding agents, how the logo is drawn, and who made the photographs on this site.",
    og: "about",
    type: "AboutPage",
    section: "About",
  },
];

export const pageFor = (path: string) => {
  const page = PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`No page registered for ${path}`);
  return page;
};

/** Absolute URL for a path. The home page has no trailing slash, matching the canonical tag Next writes. */
export const absolute = (path: string) => (path.startsWith("http") ? path : path === "/" ? SITE_URL : SITE_URL + path);

/** Facts for structured data and llms.txt, all taken from the site's own copy. */
export const FEATURES = [
  "A git worktree, branch, dev server port and browser for each thread",
  "Merge a lane from the breadcrumb; a merge that would conflict changes nothing and names the files",
  "A real browser per thread that the agent can drive, also while the thread is off screen",
  "Ask any line which turn wrote it and why, with Alt+L",
  "Corrections offered as project rules in CLAUDE.md or AGENTS.md",
  "Branch history: a snapshot after every turn that can be read as a diff and restored",
  "Night shift: queued tasks run overnight while an account is under its usage limits",
  "Schedules and triggers on file changes, commits and CI failures",
  "Meeting recordings transcribed on your computer, then summarised by Claude",
  "Phone pairing, laptop port forwarding and review links for a running dev server",
  "Fifteen connection presets plus any MCP server",
];
