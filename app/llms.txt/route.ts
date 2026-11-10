import { absolute, DOWNLOAD_PATH, FEATURES, PAGES, SITE_DESCRIPTION, UPDATED, VERSION } from "@/lib/site";

// A plain-text map of the site for AI tools that read /llms.txt. Google Search ignores it.
export function GET() {
  const section = (name: string) =>
    PAGES.filter((p) => p.section === name)
      .map((p) => `- [${p.name}](${absolute(p.path)}): ${p.description}`)
      .join("\n");
  const body = `# Eizen

> ${SITE_DESCRIPTION}

Eizen runs the agent CLIs you already use and reads the same sessions, so a thread started in the app can be resumed in a terminal. It runs on your own Windows PC and has no server of its own. Prompts and the code an agent reads go to the model provider you chose, as they do with the CLI, and tool calls go to the services you connected. Version ${VERSION} supports Windows 10 and 11, 64-bit. Eizen is independent of Anthropic, OpenAI and the other providers it works with.

Last updated: ${UPDATED}

## Product

${section("Product")}

## Adopting it

${section("Adopting it")}

## About

${section("About")}

## Key facts

${FEATURES.map((f) => `- ${f}`).join("\n")}
- Installer: ${absolute(DOWNLOAD_PATH)} (about 70 MB). A setup checklist installs Claude Code, signs you in and checks Git.
- Limits: no admin console, no single sign-on, no shared threads, no inline autocomplete, and nothing runs while the PC is off.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
