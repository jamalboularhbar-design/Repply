import { usePersistentState } from "../lib.js";
import { DIGEST } from "../i18n.js";
import { accent } from "../ui.js";

const LANGS = ["en", "fr", "es", "ar"];
const BUSINESS = "LUNA COFFEE ROASTERS";

export default function Digest() {
  const [st, setSt] = usePersistentState("repply-digest-v1", { lang: "en" });
  const t = DIGEST[st.lang];
  const dir = st.lang === "ar" ? "rtl" : "ltr";

  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px 80px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#4a4a6a" }}>{t.previewLabel}</span>
        <span style={{ flex: 1, height: 1, background: "#28304a" }} />
        <div style={{ display: "flex", gap: 6 }}>
          {LANGS.map((l) => (
            <button key={l} onClick={() => setSt((s) => ({ ...s, lang: l }))} style={{ background: st.lang === l ? accent : "transparent", border: `1px solid ${accent}`, borderRadius: 4, color: st.lang === l ? "#fff" : accent, fontFamily: "monospace", fontSize: 10, fontWeight: 700, padding: "3px 9px", cursor: "pointer" }}>{l.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div dir={dir} style={{ maxWidth: 600, margin: "0 auto 18px", background: "#101526", border: "1px solid #28304a", borderRadius: 8, padding: "12px 16px" }}>
        <div style={{ fontSize: 11, color: "#4a4a6a", fontFamily: "monospace", marginBottom: 4 }}>{t.subjectLabel}</div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{t.subject}</div>
      </div>

      {/* EMAIL BODY */}
      <div dir={dir} style={{ maxWidth: 600, margin: "0 auto", background: "#101526", border: "1px solid #28304a", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ height: 3, background: `linear-gradient(90deg, ${accent}, #ff6584)` }} />

        <div style={{ padding: "26px 28px 22px", borderBottom: "1px solid #28304a", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💬</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.headTitle}</div>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, color: "#7a7a9a" }}>{BUSINESS} · {t.headRange}</div>
          </div>
        </div>

        <div style={{ padding: "22px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 22 }}>
            <div style={{ background: "#161c32", border: "1px solid #28304a", borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#f4c55a" }}>4.3 ★</div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "#43e97b" }}>▲ 0.1</div>
            </div>
            <div style={{ background: "#161c32", border: "1px solid #28304a", borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#3ad6e0" }}>11</div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "#7a7a9a" }}>{t.statNew}</div>
            </div>
            <div style={{ background: "#161c32", border: "1px solid #28304a", borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#43e97b" }}>91%</div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "#7a7a9a" }}>{t.statAnswered}</div>
            </div>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#ff6584", marginBottom: 8 }}>{t.needsLabel}</div>
          <div style={{ background: "#161c32", border: "1px solid rgba(255,101,132,0.45)", borderRadius: 8, padding: "14px 16px", marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700, color: "#3ad6e0", border: "1px solid #3ad6e0", borderRadius: 2, padding: "2px 7px" }}>GOOGLE</span>
              <span style={{ color: "#f4c55a", fontSize: 13 }}>★★☆☆☆</span>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Mara T.</span>
            </div>
            <p style={{ fontSize: 12, color: "#d0d0e8", lineHeight: 1.7, margin: "0 0 10px" }}>{t.needsQuote}</p>
            <a href="#/app" style={{ display: "inline-block", background: accent, color: "#fff", borderRadius: 6, fontSize: 12, fontWeight: 600, padding: "8px 16px", textDecoration: "none" }}>{t.replyCta}</a>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#43e97b", marginBottom: 8 }}>{t.bestLabel}</div>
          <div style={{ background: "#161c32", border: "1px solid #28304a", borderRadius: 8, padding: "14px 16px", marginBottom: 22 }}>
            <p style={{ fontSize: 12, color: "#d0d0e8", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              {t.bestQuote} <span style={{ color: "#7a7a9a", fontStyle: "normal" }}>— Priya S., 5★ Google</span>
            </p>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#7a7a9a", marginBottom: 8 }}>{t.rankLabel}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#161c32", border: "1px solid #28304a", borderRadius: 8, padding: "12px 16px", marginBottom: 6 }}>
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#d0d0e8", flex: 1 }}>{t.rankKeyword}</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: "#f4c55a" }}>#4</span>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#43e97b" }}>▲ 1</span>
          </div>
          <p style={{ fontSize: 11, color: "#4a4a6a", lineHeight: 1.6, margin: "0 0 22px" }}>{t.rankNote}</p>

          <a href="#/app" style={{ display: "block", textAlign: "center", background: "rgba(108,99,255,0.12)", border: `1px solid ${accent}`, color: accent, borderRadius: 8, fontSize: 13, fontWeight: 600, padding: 12, textDecoration: "none" }}>{t.openCta}</a>
        </div>

        <div style={{ padding: "14px 28px", borderTop: "1px solid #28304a", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 1, color: "#4a4a6a" }}>{t.footer}</span>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4a4a6a" }}>
            <a href="#" style={{ color: "#4a4a6a" }}>{t.unsub}</a> · <a href="#" style={{ color: "#4a4a6a" }}>{t.prefs}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
