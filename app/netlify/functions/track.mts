import type { Config, Context } from "@netlify/functions";
import { getDeployStore, getStore } from "@netlify/blobs";

// Minimal first-party pageview counter — no cookies, no vendor, no PII.
// Keys: YYYY-MM-DD/view/lang -> count. Last-write-wins races are acceptable
// at waitlist-era traffic; swap for a real analytics vendor when it matters.
const store = () =>
  Netlify.context?.deploy.context === "production"
    ? getStore("analytics")
    : getDeployStore("analytics");

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: { view?: string; lang?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const view = (body.view ?? "landing").toString().slice(0, 24).replace(/[^a-z-]/g, "") || "landing";
  const lang = (body.lang ?? "en").toString().slice(0, 5).replace(/[^a-z]/g, "") || "en";
  const day = new Date().toISOString().slice(0, 10);

  const analytics = store();
  const key = `${day}/${view}/${lang}`;
  const current = await analytics.get(key, { type: "json" });
  await analytics.setJSON(key, (typeof current === "number" ? current : 0) + 1);

  return Response.json({ ok: true });
};

export const config: Config = { path: "/api/track" };
