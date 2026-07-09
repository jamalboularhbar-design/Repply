import { BUSINESS_NAME } from "../data.js";
import { IS_IOS, useMediaQuery } from "../lib.js";
import { useRepply } from "../state.js";
import { accent } from "../ui.js";
import { GetReviews, Inbox, Insights, Rank, Setup, Share, Widget } from "./panels.jsx";

const TABS = [
  { id: "inbox", label: "📥 Inbox" },
  { id: "requests", label: "🚀 Get reviews" },
  { id: "rank", label: "📍 Rank" },
  { id: "share", label: "📣 Share" },
  { id: "insights", label: "📊 Insights" },
  { id: "widget", label: "🔖 Widget" },
];

const MOBILE_TABS = [
  { id: "inbox", icon: "📥", label: "INBOX" },
  { id: "requests", icon: "🚀", label: "INVITES" },
  { id: "rank", icon: "📍", label: "RANK" },
  { id: "insights", icon: "📊", label: "STATS" },
];

export default function Manager() {
  const rep = useRepply();
  const { st, set, vertical, needsReplyCount, setupDone } = rep;
  const isMobile = useMediaQuery("(max-width: 520px)");

  const panel = (compact) => {
    const goRequests = () => set({ tab: "requests" });
    switch (st.tab) {
      case "requests": return <GetReviews r={rep} compact={compact} />;
      case "rank": return <Rank r={rep} compact={compact} goRequests={goRequests} />;
      case "share": return <Share r={rep} compact={compact} />;
      case "insights": return <Insights r={rep} compact={compact} />;
      case "widget": return <Widget r={rep} compact={compact} />;
      case "setup": return <Setup r={rep} compact={compact} />;
      default: return <Inbox r={rep} compact={compact} />;
    }
  };

  if (isMobile) {
    // Compact mobile chrome (Capacitor shell). iOS gets the floating pill tab bar.
    const tabBarStyle = IS_IOS
      ? { position: "fixed", bottom: 22, left: 12, right: 12, display: "flex", justifyContent: "space-around", background: "rgba(16,21,38,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid #28304a", borderRadius: 26, padding: "8px 0 6px", zIndex: 10 }
      : { position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", background: "rgba(16,21,38,0.97)", borderTop: "1px solid #28304a", padding: "8px 0 calc(6px + env(safe-area-inset-bottom))", zIndex: 10 };
    return (
      <div style={{ minHeight: "100vh", background: "#070b18", color: "#e8e8f0", padding: "12px 14px 110px", fontFamily: IS_IOS ? "-apple-system, 'Segoe UI', system-ui, sans-serif" : undefined }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>💬</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{BUSINESS_NAME}</div>
            <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 1, color: "#7a7a9a" }}>4.2 ★ · {needsReplyCount} NEED A REPLY</div>
          </div>
          <button onClick={() => set({ tab: "setup" })} aria-label="Setup" style={{ background: "transparent", border: "none", fontSize: 15, cursor: "pointer", minWidth: 44, minHeight: 44, opacity: st.tab === "setup" ? 1 : 0.5 }}>⚙️</button>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b" }} />
        </div>

        {panel(true)}

        <div style={tabBarStyle}>
          {MOBILE_TABS.map((t) => {
            const active = st.tab === t.id;
            return (
              <button key={t.id} onClick={() => set({ tab: t.id, openId: null })} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 64, minHeight: 44, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer" }}>
                <span style={{ fontSize: 17, opacity: active ? 1 : 0.5 }}>{t.icon}</span>
                <span style={{ fontFamily: "monospace", fontSize: 9, color: active ? accent : "#4a4a6a", fontWeight: active ? 700 : 400 }}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const tabStyle = (active) => ({
    background: active ? accent : "#101526",
    border: `1px solid ${active ? accent : "#28304a"}`,
    borderRadius: 6,
    color: active ? "#fff" : "#7a7a9a",
    fontSize: 12,
    fontWeight: 500,
    padding: "6px 13px",
    cursor: "pointer",
  });

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div className="grid-overlay" />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "28px 0 22px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💬</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", background: `linear-gradient(135deg, #fff 30%, ${accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Repply</div>
              <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a7a9a" }}>Review OS · {BUSINESS_NAME}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            {vertical.platforms.map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 6, background: "#101526", border: "1px solid #28304a", borderRadius: 20, padding: "4px 11px", fontSize: 11, color: "#a0a0c8" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#43e97b", display: "inline-block" }} />
                {p === "Google Business Profile" ? "Google" : p}
              </div>
            ))}
            <button style={{ display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "1px dashed #28304a", borderRadius: 20, padding: "4px 11px", fontSize: 11, color: "#7a7a9a", cursor: "pointer" }}>+ More</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => set({ tab: t.id, openId: null })} style={tabStyle(st.tab === t.id)}>{t.label}</button>
          ))}
          <button onClick={() => set({ tab: "setup", openId: null })} style={{ ...tabStyle(st.tab === "setup"), marginLeft: "auto" }}>
            ⚙️ Setup {setupDone === 4 ? "✓" : `${setupDone}/4`}
          </button>
        </div>

        {panel(false)}
      </div>
    </div>
  );
}
