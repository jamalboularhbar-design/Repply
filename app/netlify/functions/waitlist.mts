import type { Config, Context } from "@netlify/functions";
import { getDeployStore, getStore } from "@netlify/blobs";

// Keep non-production signups out of the global store.
const store = () =>
  Netlify.context?.deploy.context === "production"
    ? getStore("waitlist")
    : getDeployStore("waitlist");

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: { email?: string; lang?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const waitlist = store();
  const key = encodeURIComponent(email);
  if (!(await waitlist.get(key))) {
    await waitlist.setJSON(key, {
      email,
      lang: (body.lang ?? "en").slice(0, 5),
      ts: new Date().toISOString(),
      country: context.geo?.country?.code ?? "",
      city: context.geo?.city ?? "",
    });
  }

  return Response.json({ ok: true });
};

export const config: Config = { path: "/api/waitlist" };
