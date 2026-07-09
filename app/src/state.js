import { useState } from "react";
import { usePersistentState } from "./lib.js";
import { DEFAULT_INVITE_MSG, getReviews, getVertical, makeDraft } from "./data.js";

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
  const draftFor = (r) => (st.drafts[r.id] !== undefined ? st.drafts[r.id] : makeDraft(r, st.tone));

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
  };
}
