import { useState } from "react";
import { usePersistentState } from "./lib.js";
import { BUSINESS_NAME, DEFAULT_INVITE_MSG, getReviews, getVertical, makeDraft } from "./data.js";

const INITIAL = {
  tab: "inbox",
  filter: "all",
  openId: null,
  tone: "Warm",
  drafts: {},
  replied: {},
  alertsOn: true,
  intercept: true,
  channel: "SMS",
  inviteMsg: DEFAULT_INVITE_MSG,
  fbConnected: false,
  imported: false,
  phone: "",
  phoneSaved: false,
  vertical: "cafe",
};

export function useRepply() {
  const [st, setSt] = usePersistentState("repply-state-v1", INITIAL);
  const [inviteFlash, setInviteFlash] = useState(false);
  const set = (patch) => setSt((s) => ({ ...s, ...(typeof patch === "function" ? patch(s) : patch) }));

  const vertical = getVertical(st.vertical);
  const all = getReviews(st.vertical);
  const isReplied = (r) => st.replied[r.id] || r.replied;
  const filtered = all.filter((r) => {
    if (st.filter === "needs") return !isReplied(r);
    if (st.filter === "neg") return r.sentiment === "neg";
    if (st.filter === "replied") return isReplied(r);
    return true;
  });
  const needsReplyCount = all.filter((r) => !isReplied(r)).length;

  // Real AI drafts via /api/draft (Claude), keyed by review+tone. The template
  // from makeDraft shows instantly and is replaced when the AI draft lands,
  // unless the user already edited the text. Offline/dev/no-key: template stays.
  const [aiDrafts, setAiDrafts] = useState({});
  const [aiPending, setAiPending] = useState({});
  const aiKey = (r) => `${r.id}:${st.tone}`;
  const requestAiDraft = (r) => {
    const key = aiKey(r);
    if (aiDrafts[key] !== undefined || aiPending[key]) return;
    setAiPending((p) => ({ ...p, [key]: true }));
    fetch("/api/draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        review: { name: r.name, text: r.text, rating: r.rating, platform: r.platform, lang: r.lang },
        tone: st.tone,
        business: BUSINESS_NAME,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data) => {
        if (data.draft) setAiDrafts((d) => ({ ...d, [key]: data.draft }));
      })
      .catch(() => {})
      .finally(() => setAiPending((p) => { const q = { ...p }; delete q[key]; return q; }));
  };
  const aiState = (r) => (aiPending[aiKey(r)] ? "loading" : aiDrafts[aiKey(r)] !== undefined ? "ai" : "template");

  const draftFor = (r) =>
    st.drafts[r.id] !== undefined ? st.drafts[r.id] : aiDrafts[aiKey(r)] !== undefined ? aiDrafts[aiKey(r)] : makeDraft(r, st.tone);

  const sendReply = (r) => {
    if (r.platform === "Tripadvisor") {
      // No public reply API — copy the draft and deep-link to Tripadvisor.
      try { navigator.clipboard.writeText(draftFor(r)); } catch { /* clipboard unavailable */ }
      window.open("https://www.tripadvisor.com/", "_blank", "noopener");
    }
    set((s) => ({ replied: { ...s.replied, [r.id]: true }, openId: null }));
  };

  const setTone = (t, r) =>
    set((s) => {
      const drafts = { ...s.drafts };
      delete drafts[r.id];
      return { tone: t, drafts };
    });

  const flashInvites = () => {
    setInviteFlash(true);
    clearTimeout(flashInvites._t);
    flashInvites._t = setTimeout(() => setInviteFlash(false), 1800);
  };

  const setupDone = 1 + [st.fbConnected, st.imported, st.phoneSaved].filter(Boolean).length;

  return {
    st, set, vertical, all, filtered, isReplied, needsReplyCount,
    draftFor, sendReply, setTone, inviteFlash, flashInvites, setupDone,
    requestAiDraft, aiState,
  };
}
