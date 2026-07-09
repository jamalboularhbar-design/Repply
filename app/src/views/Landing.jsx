import { usePersistentState } from "../lib.js";
import { LANDING } from "../i18n.js";
import { Icon } from "../icons.jsx";
import { accent } from "../ui.js";

const LANGS = ["en", "fr", "es", "ar"];
const FEATURE_ICONS = ["inbox", "globe", "send", "bell", "pin", "message", "megaphone", "bookmark"];
const FEATURE_ICON_COLOR = ["#6c63ff", "#3ad6e0", "#43e97b", "#ff6584", "#f4c55a", "#ff6584", "#c084fc", "#7cc4ff"];
const FEATURE_ICON_BG = ["rgba(108,99,255,0.15)", "rgba(58,214,224,0.15)", "rgba(67,233,123,0.12)", "rgba(255,101,132,0.12)", "rgba(244,197,90,0.15)", "rgba(255,101,132,0.12)", "rgba(192,132,252,0.15)", "rgba(124,196,255,0.15)"];
const FEATURE_STRIPES = ["#ff6584", "#3ad6e0", "#43e97b", "#f4c55a", "#f4c55a", "#ff6584", "#c084fc", "#7cc4ff"];

export default function Landing() {
  const [st, setSt] = usePersistentState("repply-landing-v1", { email: "", joined: false, lang: "en" });
  const t = LANDING[st.lang];
  const price = t.price;
  const scrollToJoin = (e) => {
    e.preventDefault();
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div dir={st.lang === "ar" ? "rtl" : "ltr"} style={{ minHeight: "100vh", position: "relative" }}>
      <div className="grid-overlay" />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* NAV */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 7, background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chat" size={15} color={accent} /></div>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>Repply</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {LANGS.map((l) => (
                <button key={l} onClick={() => setSt((s) => ({ ...s, lang: l }))} style={{ background: st.lang === l ? accent : "transparent", border: `1px solid ${accent}`, borderRadius: 4, color: st.lang === l ? "#fff" : accent, fontFamily: "monospace", fontSize: 10, fontWeight: 700, padding: "3px 9px", cursor: "pointer" }}>{l.toUpperCase()}</button>
              ))}
            </div>
            <a href="#join" onClick={scrollToJoin} style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 600, color: accent, border: `1px solid ${accent}`, borderRadius: 6, padding: "6px 14px", textDecoration: "none", background: "rgba(108,99,255,0.12)" }}>{t.navCta}</a>
          </div>
        </div>

        {/* HERO */}
        <div style={{ textAlign: "center", padding: "56px 0 48px" }}>
          <div style={{ display: "inline-block", fontFamily: "monospace", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: accent, border: `1px solid ${accent}`, padding: "4px 12px", borderRadius: 2, marginBottom: 20, opacity: 0.8 }}>{t.badge}</div>
          <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 14px", background: `linear-gradient(135deg, #fff 30%, ${accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.h1a}<br />{t.h1b}
          </h1>
          <p style={{ color: "#7a7a9a", fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>{t.sub}</p>

          <div id="join" style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", maxWidth: 440, margin: "0 auto" }}>
            <input
              value={st.email}
              onChange={(e) => setSt((s) => ({ ...s, email: e.target.value }))}
              placeholder={t.placeholder}
              style={{ flex: "1 1 220px", background: "#101526", border: "1px solid #28304a", borderRadius: 8, color: "#e8e8f0", fontSize: 14, padding: "12px 14px" }}
            />
            <button onClick={() => { if (st.email.trim()) setSt((s) => ({ ...s, joined: true })); }} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, padding: "12px 22px", cursor: "pointer" }}>{t.join}</button>
          </div>
          <div style={{ minHeight: 20, marginTop: 10 }}>
            {st.joined
              ? <span style={{ fontFamily: "monospace", fontSize: 11, color: "#43e97b" }}>{t.joinedMsg}</span>
              : <span style={{ fontFamily: "monospace", fontSize: 11, color: "#4a4a6a" }}>{price}{t.priceNote}</span>}
          </div>
        </div>

        {/* PRODUCT PREVIEW — the real inbox, rebuilt in miniature (product UI stays LTR/EN) */}
        <div dir="ltr" style={{ maxWidth: 660, margin: "0 auto 56px" }}>
          <div style={{ background: "#0b101f", border: "1px solid #28304a", borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.55)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid #28304a", background: "#101526" }}>
              {["#ff6584", "#f4c55a", "#43e97b"].map((c) => (
                <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.8 }} />
              ))}
              <span style={{ margin: "0 auto", fontFamily: "monospace", fontSize: 9, letterSpacing: 2, color: "#4a4a6a", textTransform: "uppercase" }}>repply · review inbox</span>
              <span style={{ width: 39 }} />
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="inbox" size={12} color={accent} /></div>
                <span style={{ fontSize: 12, fontWeight: 600 }}>Review Inbox</span>
                <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 1, color: "#7a7a9a" }}>ALL PLATFORMS · UNIFIED</span>
                <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 9, color: "#ff6584" }}>7 need a reply</span>
              </div>

              <div style={{ background: "#101526", border: "1px solid rgba(255,101,132,0.45)", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 8, fontWeight: 700, letterSpacing: 1, color: "#3ad6e0", border: "1px solid #3ad6e0", borderRadius: 2, padding: "1px 5px" }}>GOOGLE</span>
                  <span style={{ color: "#f4c55a", fontSize: 10, letterSpacing: 1 }}>★★☆☆☆</span>
                  <span style={{ fontSize: 10, fontWeight: 600 }}>Mara T.</span>
                  <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 8, fontWeight: 700, color: "#ff6584" }}>NEEDS REPLY</span>
                </div>
                <p style={{ fontSize: 10, color: "#a0a0c8", lineHeight: 1.6, margin: "0 0 8px" }}>Waited 25 minutes for a latte on a quiet Tuesday. Staff were friendly but clearly understaffed…</p>
                <div style={{ background: "#0b101f", border: "1px solid #28304a", borderRadius: 6, padding: "8px 10px" }}>
                  <div style={{ fontFamily: "monospace", fontSize: 8, letterSpacing: 1, color: "#7a7a9a", marginBottom: 4 }}>DRAFT REPLY · WARM · AUTO-GENERATED</div>
                  <p style={{ fontSize: 10, color: "#d0d0e8", lineHeight: 1.6, margin: "0 0 8px" }}>Hi Mara — I'm sorry, that's on us. Thanks for telling us straight instead of just not coming back. Next time you're in, ask for me and I'll make sure it goes right.</p>
                  <span style={{ display: "inline-block", background: accent, color: "#fff", borderRadius: 5, fontSize: 9, fontWeight: 600, padding: "4px 10px" }}>Send reply</span>
                </div>
              </div>

              <div style={{ background: "#101526", border: "1px solid #28304a", borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 8, fontWeight: 700, letterSpacing: 1, color: "#ff6584", border: "1px solid #ff6584", borderRadius: 2, padding: "1px 5px" }}>YELP</span>
                  <span style={{ color: "#f4c55a", fontSize: 10, letterSpacing: 1 }}>★★★★★</span>
                  <span style={{ fontSize: 10, fontWeight: 600 }}>Deniz K.</span>
                  <span style={{ fontSize: 10, color: "#a0a0c8" }}>Best flat white in the neighborhood…</span>
                  <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 8, fontWeight: 700, color: "#43e97b" }}>✓ REPLIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEM */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10, marginBottom: 56 }}>
          {t.problems.map((pr) => (
            <div key={pr.big} style={{ background: "#101526", border: "1px solid #28304a", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: pr.color, marginBottom: 4 }}>{pr.big}</div>
              <div style={{ fontSize: 12, color: "#7a7a9a", lineHeight: 1.6 }}>{pr.small}</div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#7a7a9a", textAlign: "center", marginBottom: 18 }}>{t.featuresLabel}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
            {t.features.map((f, i) => (
              <div key={f.title} style={{ background: "#101526", border: "1px solid #28304a", borderRadius: 12, padding: "20px 22px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accent}, ${FEATURE_STRIPES[i]})` }} />
                <div style={{ width: 32, height: 32, borderRadius: 6, background: FEATURE_ICON_BG[i], display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}><Icon name={FEATURE_ICONS[i]} size={16} color={FEATURE_ICON_COLOR[i]} /></div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{f.title}</div>
                <p style={{ fontSize: 12, color: "#7a7a9a", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUTCOME */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 640, margin: "0 auto 56px", background: "linear-gradient(135deg, rgba(67,233,123,0.1), rgba(67,233,123,0.02))", border: "1px solid rgba(67,233,123,0.35)", borderRadius: 12, padding: "18px 22px" }}>
          <Icon name="coins" size={22} color="#43e97b" />
          <p style={{ fontSize: 13, color: "#d0d0e8", lineHeight: 1.6, margin: 0 }}>{t.outcome}</p>
        </div>

        {/* PRICING */}
        <div style={{ maxWidth: 420, margin: "0 auto 56px" }}>
          <div style={{ background: "#101526", border: `1px solid ${accent}`, borderRadius: 12, padding: "26px 26px 24px", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accent}, #ff6584)` }} />
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#7a7a9a", marginBottom: 10 }}>{t.planLabel}</div>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 2 }}>
              {price}<span style={{ fontSize: 15, fontWeight: 400, color: "#7a7a9a" }}>{t.perMonth}</span>
            </div>
            <div style={{ fontSize: 11, color: "#4a4a6a", fontFamily: "monospace", marginBottom: 18 }}>{t.cancel}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "start", marginBottom: 20 }}>
              {t.planItems.map((p) => (
                <div key={p} style={{ display: "flex", gap: 9, fontSize: 13, color: "#d0d0e8" }}>
                  <span style={{ color: "#43e97b", flexShrink: 0 }}>✓</span>{p}
                </div>
              ))}
            </div>
            <a href="#join" onClick={scrollToJoin} style={{ display: "block", background: accent, color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600, padding: 12, textDecoration: "none" }}>{t.navCta}</a>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ borderTop: "1px solid #28304a", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, color: "#4a4a6a" }}>{t.footer}</span>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#4a4a6a" }}>© 2026</span>
        </div>

      </div>
    </div>
  );
}
