import type { Config } from "@netlify/functions";
import Anthropic from "@anthropic-ai/sdk";

// Review-reply drafting. The client falls back to its built-in template
// drafts whenever this endpoint is unavailable (no key, rate limit, error),
// so every failure path returns a JSON error rather than throwing.
const SYSTEM = `You write review replies for the owner of a small local business.

Rules:
- Reply in the same language as the review. Match the regional register when it is obvious (Moroccan French, Gulf Arabic).
- Voice: the owner, first person. Sound like a busy human, not a brand. No corporate filler like "we apologize for any inconvenience".
- Never use em dashes. Keep sentences short. No hashtags. No sign-off.
- At most one emoji, and none for negative reviews or in Professional or Brief tone.
- Address the specific details the reviewer mentioned. Never invent facts. Never promise discounts, refunds or compensation.
- Negative reviews: own the problem plainly, no defensiveness, no legal admissions. Invite them back or ask them to reach out directly.
- Length: Brief tone is one sentence. Otherwise two or three sentences, under 60 words.

Return only the reply text, nothing else.`;

export default async (req: Request) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  let body: {
    review?: { name?: string; text?: string; rating?: number; platform?: string; lang?: string };
    tone?: string;
    business?: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_json" }, { status: 400 });
  }

  const review = body.review;
  if (!review?.text || !review?.name) {
    return Response.json({ error: "missing_review" }, { status: 400 });
  }
  const tone = ["Warm", "Professional", "Brief"].includes(body.tone ?? "") ? body.tone : "Warm";

  const client = new Anthropic();
  try {
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1000,
      output_config: { effort: "low" },
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content: [
            `Business: ${(body.business ?? "the business").slice(0, 100)}`,
            `Platform: ${(review.platform ?? "Google").slice(0, 40)}`,
            `Rating: ${review.rating ?? "?"}/5`,
            `Tone: ${tone}`,
            `Reviewer: ${review.name.slice(0, 80)}`,
            "Review:",
            '"""',
            review.text.slice(0, 4000),
            '"""',
          ].join("\n"),
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ error: "draft_unavailable" }, { status: 502 });
    }
    const text = response.content
      .find((block) => block.type === "text")
      ?.text.trim();
    if (!text) return Response.json({ error: "draft_unavailable" }, { status: 502 });
    return Response.json({ draft: text });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return Response.json({ error: "rate_limited" }, { status: 429 });
    }
    return Response.json({ error: "draft_unavailable" }, { status: 502 });
  }
};

export const config: Config = { path: "/api/draft" };
