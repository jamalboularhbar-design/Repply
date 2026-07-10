import {
  INSIGHT_KEYWORDS, INSIGHT_STATS, INTERCEPTED, REQ_STATS, TONES,
  VERTICALS, WEEK_DATA, BUSINESS_NAME, starStr,
} from "../data.js";
import { useRef, useState } from "react";
import { IS_IOS } from "../lib.js";
import { Icon } from "../icons.jsx";
import { accent, cardStyle, mono, pill, primaryBtn, toggleStyle } from "../ui.js";

// Mobile review cards: radius 10 on Android, 14 on iOS (web stays 8).
const mobileCardRadius = IS_IOS ? 14 : 10;

function Panel({ stripeTo, icon, iconBg, title, sub, right, children, compact }) {
  return (
    <div style={{ background: "#101526", border: "1px solid #28304a", borderRadius: 12, padding: compact ? "16px 14px" : "20px 22px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accent}, ${stripeTo})` }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #28304a" }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
          <div style={{ fontSize: 10, color: "#7a7a9a", fontFamily: "monospace", letterSpacing: 1 }}>{sub}</div>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

function StatCards({ stats }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 18 }}>
      {stats.map((s) => (
        <div key={s.label} style={{ ...cardStyle(), padding: "12px 14px" }}>
          <div style={{ ...mono(10, "#7a7a9a", 1), marginBottom: 6 }}>{s.label}</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.value}</div>
          <div style={{ fontSize: 11, color: "#4a4a6a", fontFamily: "monospace", marginTop: 2 }}>{s.delta}</div>
        </div>
      ))}
    </div>
  );
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "needs", label: "Needs reply" },
  { id: "neg", label: "Negative" },
  { id: "replied", label: "Replied" },
];

export function Inbox({ r: rep, compact }) {
  const { st, set, filtered, isReplied, needsReplyCount, draftFor, sendReply, setTone } = rep;

  const reviewCard = (r) => {
    const replied = isReplied(r);
    const open = st.openId === r.id;
    return (
      <div key={r.id} style={{ ...cardStyle(r.sentiment === "neg" && !replied ? "rgba(255,101,132,0.45)" : "#28304a", compact ? mobileCardRadius : 8), padding: compact ? "12px 14px" : "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: compact ? 7 : 10, marginBottom: compact ? 6 : 8, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "monospace", fontSize: compact ? 9 : 10, fontWeight: 700, letterSpacing: 1, color: r.pc, border: `1px solid ${r.pc}`, borderRadius: 2, padding: compact ? "1px 6px" : "2px 7px", textTransform: "uppercase" }}>{r.platform}</span>
          <span style={{ color: "#f4c55a", fontSize: compact ? 12 : 13, letterSpacing: 1 }}>{starStr(r.rating)}</span>
          {!compact && <span style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</span>}
          {!compact && <span style={{ fontSize: 11, color: "#4a4a6a", fontFamily: "monospace" }}>{r.time}</span>}
          {!compact && r.lang && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "monospace", fontSize: 10, color: "#3ad6e0", border: "1px solid rgba(58,214,224,0.4)", borderRadius: 2, padding: "2px 7px" }}><Icon name="globe" size={10} /> {r.lang} · auto-detected</span>
          )}
          <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: compact ? 9 : 10, fontWeight: 700, letterSpacing: 0.5, color: replied ? "#43e97b" : "#ff6584" }}>{replied ? "✓ REPLIED" : "NEEDS REPLY"}</span>
        </div>
        {compact && (
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 3 }}>
            {r.name} <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4a4a6a", fontWeight: 400 }}>{r.time}</span>
          </div>
        )}
        <p style={{ fontSize: compact ? 12 : 13, color: compact ? "#a0a0c8" : "#d0d0e8", lineHeight: compact ? 1.6 : 1.7, margin: "0 0 10px" }}>{r.text}</p>

        {open && (
          <div style={{ borderTop: "1px solid #28304a", paddingTop: 12, marginTop: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={mono(10, "#7a7a9a", 2)}>Draft reply · Tone</span>
              {TONES.map((t) => (
                <button key={t} onClick={() => setTone(t, r)} style={{ ...pill(t === st.tone), color: t === st.tone ? accent : "#7a7a9a", fontSize: 11, padding: "3px 10px" }}>{t}</button>
              ))}
            </div>
            <textarea
              value={draftFor(r)}
              onChange={(e) => set((s) => ({ drafts: { ...s.drafts, [r.id]: e.target.value } }))}
              rows={3}
              style={{ width: "100%", background: "#101526", border: "1px solid #28304a", borderRadius: 8, color: "#e8e8f0", fontSize: 13, padding: "10px 12px", resize: "vertical", lineHeight: 1.6 }}
            />
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button onClick={() => sendReply(r)} style={{ ...primaryBtn, ...(compact ? { flex: 1, padding: 12, borderRadius: 8, minHeight: 44 } : {}) }}>
                {r.platform === "Tripadvisor" ? "Copy & open Tripadvisor" : compact ? "Send" : "Send reply"}
              </button>
              <button onClick={() => set({ openId: null })} style={{ background: "transparent", border: "1px solid #28304a", borderRadius: compact ? 8 : 6, color: "#7a7a9a", fontSize: 12, padding: compact ? "12px 16px" : "7px 12px", cursor: "pointer", minHeight: compact ? 44 : undefined }}>Cancel</button>
            </div>
          </div>
        )}

        {!replied && !open && (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => set({ openId: r.id })}
              style={{ background: "rgba(108,99,255,0.12)", border: `1px solid ${accent}`, borderRadius: compact ? 8 : 6, color: accent, fontFamily: "monospace", fontSize: 11, fontWeight: 600, padding: compact ? 10 : "5px 12px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, ...(compact ? { width: "100%", minHeight: 44 } : {}) }}
            ><Icon name="pen" size={11} /> draft reply</button>
          </div>
        )}
      </div>
    );
  };

  const filterPills = (
    <div className={compact ? "no-scrollbar" : undefined} style={compact
      ? { display: "flex", gap: 6, marginBottom: 12, overflowX: "auto", paddingBottom: 2 }
      : { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => set({ filter: f.id, openId: null })}
          style={{ ...pill(st.filter === f.id, compact ? "#101526" : "#161c32"), fontSize: 12, padding: compact ? "7px 14px" : "5px 12px", flexShrink: 0, minHeight: compact ? 34 : undefined }}
        >{f.label}</button>
      ))}
    </div>
  );

  const cards = (
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 8 : 10 }}>
      {filtered.map(reviewCard)}
      {filtered.length === 0 && (
        <div style={{ ...cardStyle(), padding: 24, textAlign: "center" }}>
          <p style={{ color: "#4a4a6a", fontSize: 12, margin: 0 }}>Nothing here — all caught up. ✓</p>
        </div>
      )}
    </div>
  );

  if (compact) return <>{filterPills}{cards}</>;

  return (
    <Panel stripeTo="#ff6584" icon={<Icon name="inbox" color={accent} />} iconBg="rgba(108,99,255,0.15)" title="Review Inbox" sub="ALL PLATFORMS · UNIFIED"
      right={<span style={{ fontFamily: "monospace", fontSize: 11, color: "#ff6584" }}>{needsReplyCount} need a reply</span>}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, ...cardStyle(), padding: "9px 14px", marginBottom: 14 }}>
        <Icon name="bell" size={15} color="#f4c55a" />
        <div style={{ flex: 1 }}>
          <div style={mono(10, "#a0a0c8", 1)}>Instant alerts</div>
          <div style={{ fontSize: 11, color: "#4a4a6a" }}>SMS + push the moment a review ≤ 3★ lands</div>
        </div>
        <button onClick={() => set({ alertsOn: !st.alertsOn })} style={toggleStyle(st.alertsOn)}>{st.alertsOn ? "ON" : "OFF"}</button>
      </div>
      {filterPills}
      {cards}
    </Panel>
  );
}

export function GetReviews({ r: rep, compact }) {
  const { st, set, vertical, inviteFlash, flashInvites } = rep;
  return (
    <Panel compact={compact} stripeTo="#43e97b" icon={<Icon name="send" color="#43e97b" />} iconBg="rgba(67,233,123,0.12)" title="Get Reviews" sub="REQUEST ENGINE · INTERCEPTION">
      <StatCards stats={REQ_STATS(accent)} />

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Send review invites</div>
      <div style={{ ...cardStyle(), padding: "14px 16px", marginBottom: 18 }}>
        <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a4a6a", marginBottom: 8 }}>
          AUTO-SEND TRIGGER: <span style={{ color: "#3ad6e0" }}>{vertical.trigger}</span>
        </div>
        <div className="no-scrollbar" style={{ display: "flex", gap: 6, marginBottom: 10, overflowX: "auto" }}>
          {["WhatsApp", "SMS", "Email", "QR card"].map((c) => (
            <button key={c} onClick={() => set({ channel: c })} style={{ ...pill(st.channel === c), color: st.channel === c ? accent : "#7a7a9a", fontSize: 11, padding: "4px 12px", flexShrink: 0 }}>{c}</button>
          ))}
        </div>
        <textarea
          value={st.inviteMsg}
          onChange={(e) => set({ inviteMsg: e.target.value })}
          rows={2}
          style={{ width: "100%", background: "#101526", border: "1px solid #28304a", borderRadius: 8, color: "#e8e8f0", fontSize: 13, padding: "10px 12px", resize: "vertical", lineHeight: 1.6 }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
          <button onClick={flashInvites} style={primaryBtn}>Send to 24 recent customers</button>
          {inviteFlash && <span style={{ fontFamily: "monospace", fontSize: 11, color: "#43e97b" }}>✓ queued</span>}
          <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 10, color: "#4a4a6a" }}>or print the counter QR code</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
        <span style={mono(10, "#7a7a9a", 2)}>Private feedback channel</span>
        <button onClick={() => set({ intercept: !st.intercept })} style={toggleStyle(st.intercept)}>{st.intercept ? "ON" : "OFF"}</button>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "stretch", flexWrap: "wrap", marginBottom: 18 }}>
        <div style={{ flex: "1 1 180px", ...cardStyle(), padding: "12px 14px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}><Icon name="message" size={18} color={accent} /></div>
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>"How was your visit?"</div>
          <div style={{ fontSize: 11, color: "#7a7a9a" }}>every invite starts here</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, flex: "1.4 1 240px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(67,233,123,0.08)", border: "1px solid rgba(67,233,123,0.35)", borderRadius: 8, padding: "9px 12px" }}>
            <Icon name="smile" size={16} color="#43e97b" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#43e97b" }}>Review invite → Google review page</div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "#4a4a6a" }}>same link for every customer · 47 reviews this month</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,101,132,0.07)", border: "1px solid rgba(255,101,132,0.35)", borderRadius: 8, padding: "9px 12px" }}>
            <Icon name="frown" size={16} color="#ff6584" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#ff6584" }}>Private note → straight to you</div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "#4a4a6a" }}>offered on every invite · 11 heads-ups this month</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Private feedback · heads-ups</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {INTERCEPTED.map((p) => (
          <div key={p.name} style={{ display: "flex", gap: 10, padding: "10px 14px", background: "#161c32", borderRadius: 6, borderLeft: "3px solid rgba(255,101,132,0.4)" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
                {p.name} <span style={{ fontFamily: "monospace", fontSize: 10, color: "#4a4a6a", fontWeight: 400 }}>{p.time}</span>
              </div>
              <div style={{ fontSize: 12, color: "#a0a0c8", lineHeight: 1.6 }}>{p.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function Rank({ r: rep, compact, goRequests }) {
  const { vertical } = rep;
  return (
    <Panel compact={compact} stripeTo="#f4c55a" icon={<Icon name="pin" color="#f4c55a" />} iconBg="rgba(244,197,90,0.15)" title="Map Pack Rank" sub="LOCAL SEARCH · 1 MI RADIUS">
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {vertical.rankRows.map((kw) => (
          <div key={kw.keyword} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", ...cardStyle(), flexWrap: "wrap" }}>
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#d0d0e8", flex: "1 1 160px" }}>"{kw.keyword}"</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: kw.rankColor, minWidth: 32 }}>#{kw.rank}</span>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: kw.deltaColor, minWidth: 36 }}>{kw.delta}</span>
            <span style={{ fontSize: 11, color: "#7a7a9a", flex: "1.4 1 200px" }}>#1 is {kw.leader} · {kw.leaderNote}</span>
          </div>
        ))}
      </div>

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Review velocity vs #1 competitor</div>
      <div style={{ ...cardStyle(), padding: "14px 16px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#d0d0e8", minWidth: compact ? 90 : 120 }}>{BUSINESS_NAME}</span>
          <div style={{ flex: 1, height: 10, background: "#101526", borderRadius: 5, overflow: "hidden" }}>
            <div style={{ width: "42%", height: "100%", background: accent }} />
          </div>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: accent, minWidth: 52 }}>9 / mo</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#7a7a9a", minWidth: compact ? 90 : 120 }}>{vertical.rival}</span>
          <div style={{ flex: 1, height: 10, background: "#101526", borderRadius: 5, overflow: "hidden" }}>
            <div style={{ width: "88%", height: "100%", background: "#ff9f5a" }} />
          </div>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#ff9f5a", minWidth: 52 }}>{vertical.rivalRate}</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, padding: "10px 14px", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.35)", borderRadius: 8, alignItems: "center" }}>
        <Icon name="bulb" size={15} color="#f4c55a" />
        <span style={{ fontSize: 12, color: "#a0a0c8", lineHeight: 1.6 }}>
          You need ~10 more reviews/month to match the leader's velocity.{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); goRequests(); }} style={{ color: accent }}>Send invites from Get reviews →</a>
        </span>
      </div>
    </Panel>
  );
}

export function Share({ r: rep, compact }) {
  const { vertical } = rep;
  const [copied, setCopied] = useState(null);
  const copyT = useRef(null);
  const onCopy = (sh, i) => {
    try { navigator.clipboard.writeText(sh.caption); } catch { /* clipboard unavailable */ }
    setCopied(i);
    clearTimeout(copyT.current);
    copyT.current = setTimeout(() => setCopied(null), 1800);
  };
  return (
    <Panel compact={compact} stripeTo="#c084fc" icon={<Icon name="megaphone" color="#c084fc" />} iconBg="rgba(192,132,252,0.15)" title="Turn 5★ reviews into posts" sub="SOCIAL CARD GENERATOR · INSTAGRAM & FACEBOOK">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {vertical.shareables.map((sh, i) => (
          <div key={sh.quote} style={{ background: "#161c32", border: "1px solid #28304a", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ aspectRatio: "1 / 1", padding: 28, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", background: sh.cardBg, position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chat" size={13} color="#fff" /></div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: 0.5 }}>{BUSINESS_NAME}</span>
              </div>
              <div>
                <div style={{ color: "#ffe08a", fontSize: 20, letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 18, lineHeight: 1.45, color: "#fff", fontWeight: 600, margin: 0 }}>"{sh.quote}"</p>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontFamily: "monospace" }}>— {sh.name} · {sh.platform}</div>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "#7a7a9a", lineHeight: 1.6, marginBottom: 10 }}>{sh.caption}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => onCopy(sh, i)} style={{ flex: 1, background: "rgba(108,99,255,0.12)", border: `1px solid ${accent}`, borderRadius: 6, color: accent, fontFamily: "monospace", fontSize: 11, fontWeight: 600, padding: "7px 10px", cursor: "pointer", minHeight: compact ? 44 : undefined }}>
                  {copied === i ? "✓ Copied — paste in Instagram" : "Copy caption"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

const WIDGET_STYLES = [
  { id: "badge", label: "Rating badge" },
  { id: "carousel", label: "Review carousel" },
  { id: "pill", label: "Floating pill" },
];

const bizSlug = BUSINESS_NAME.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function Widget({ r: rep, compact }) {
  const { vertical } = rep;
  const [style, setStyle] = useState("badge");
  const [copied, setCopied] = useState(false);
  const copyT = useRef(null);
  const demo = vertical.shareables[0];

  const embed = `<script\n  src="https://widget.repply.app/embed.js"\n  data-business="${bizSlug}"\n  data-style="${style}"\n  async><\/script>`;

  const onCopy = () => {
    try { navigator.clipboard.writeText(embed); } catch { /* clipboard unavailable */ }
    setCopied(true);
    clearTimeout(copyT.current);
    copyT.current = setTimeout(() => setCopied(false), 1800);
  };

  const preview = () => {
    if (style === "carousel") return (
      <div style={{ ...cardStyle(), padding: "16px 18px", maxWidth: 300, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ color: "#f4c55a", fontSize: 13, letterSpacing: 1 }}>★★★★★</div>
        <p style={{ fontSize: 13, color: "#d0d0e8", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>"{demo.quote}"</p>
        <div style={{ fontFamily: "monospace", fontSize: 11, color: "#7a7a9a" }}>— {demo.name} · {demo.platform}</div>
      </div>
    );
    if (style === "pill") return (
      <div style={{ position: "absolute", bottom: 14, right: 14, display: "flex", alignItems: "center", gap: 8, background: "#161c32", border: "1px solid #28304a", borderRadius: 24, padding: "8px 16px 8px 8px", boxShadow: "0 4px 18px rgba(0,0,0,0.45)" }}>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chat" size={12} color={accent} /></div>
        <span style={{ fontSize: 12, fontWeight: 600 }}>4.2★ on Google</span>
      </div>
    );
    return (
      <div style={{ ...cardStyle(), padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(244,197,90,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="star" size={15} color="#f4c55a" fill /></div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>4.2 <span style={{ color: "#f4c55a", fontSize: 13, letterSpacing: 1 }}>★★★★☆</span></div>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: "#7a7a9a" }}>Rated on Google · 214 reviews</div>
        </div>
      </div>
    );
  };

  return (
    <Panel compact={compact} stripeTo="#7cc4ff" icon={<Icon name="bookmark" color="#7cc4ff" />} iconBg="rgba(124,196,255,0.15)" title="Website review widget" sub="EMBED · YOUR RATING ON YOUR OWN SITE">
      <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
        {WIDGET_STYLES.map((w) => (
          <button key={w.id} onClick={() => setStyle(w.id)} style={{ ...pill(style === w.id), color: style === w.id ? accent : "#7a7a9a", fontSize: 12, padding: compact ? "7px 14px" : "5px 12px", minHeight: compact ? 34 : undefined }}>{w.label}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <div>
          <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Live preview</div>
          <div style={{ position: "relative", minHeight: 220, background: "#0b101f", border: "1px solid #28304a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            {preview()}
          </div>
        </div>
        <div>
          <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Embed code</div>
          <pre style={{ background: "#0b101f", border: "1px solid #28304a", borderRadius: 8, padding: "14px 16px", margin: "0 0 10px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, color: "#a0a0c8", overflowX: "auto" }}>{embed}</pre>
          <button onClick={onCopy} style={{ ...primaryBtn, width: "100%", ...(compact ? { padding: 12, borderRadius: 8, minHeight: 44 } : {}) }}>
            {copied ? "✓ Copied to clipboard" : "Copy embed code"}
          </button>
          <p style={{ fontSize: 11, color: "#7a7a9a", lineHeight: 1.7, margin: "10px 0 0" }}>
            Paste it just before <span style={{ fontFamily: "monospace", color: "#a0a0c8" }}>&lt;/body&gt;</span> — works on WordPress, Wix, Squarespace, Shopify or any hand-built site. The widget updates automatically as new reviews land.
          </p>
        </div>
      </div>
    </Panel>
  );
}

export function Insights({ r: rep, compact }) {
  const { vertical } = rep;
  return (
    <Panel compact={compact} stripeTo="#3ad6e0" icon={<Icon name="chart" color="#3ad6e0" />} iconBg="rgba(58,214,224,0.15)" title="Reputation Insights" sub="LAST 30 DAYS">
      <StatCards stats={INSIGHT_STATS(accent)} />

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Rating trend · 8 weeks</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90, ...cardStyle(), padding: "14px 16px 10px", marginBottom: 18 }}>
        {WEEK_DATA.map((w) => (
          <div key={w.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", maxWidth: 34, height: `${Math.round(((w.v - 3.4) / 1.2) * 100)}%`, background: w.v >= 4.2 ? "#43e97b" : w.v >= 4.0 ? "#f4c55a" : "#ff6584", borderRadius: "3px 3px 0 0", opacity: 0.85 }} />
            <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4a4a6a" }}>{w.label}</span>
          </div>
        ))}
      </div>

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Sentiment</div>
      <div style={{ display: "flex", height: 10, borderRadius: 5, overflow: "hidden", marginBottom: 8 }}>
        <div style={{ width: "68%", background: "#43e97b" }} />
        <div style={{ width: "18%", background: "#f4c55a" }} />
        <div style={{ width: "14%", background: "#ff6584" }} />
      </div>
      <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#43e97b" }}>■ 68% positive</span>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#f4c55a" }}>■ 18% neutral</span>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#ff6584" }}>■ 14% negative</span>
      </div>

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>What customers mention</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {INSIGHT_KEYWORDS.map((k) => (
          <span key={k.label} style={{ ...cardStyle("#28304a", 20), color: k.color, fontSize: 12, padding: "5px 12px", fontFamily: "monospace" }}>{k.label}</span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, rgba(67,233,123,0.1), rgba(67,233,123,0.02))", border: "1px solid rgba(67,233,123,0.35)", borderRadius: 8, padding: "14px 16px", marginBottom: 18 }}>
        <Icon name="coins" size={20} color="#43e97b" />
        <div style={{ flex: 1 }}>
          <div style={{ ...mono(10, "#7a7a9a", 1), textTransform: "uppercase", marginBottom: 2 }}>Estimated revenue impact</div>
          <div style={{ fontSize: 13, color: "#d0d0e8" }}>
            Your +0.3★ this month is worth roughly <span style={{ color: "#43e97b", fontWeight: 700 }}>{vertical.revenueImpact}</span> in extra monthly bookings — a 0.1★ swing shifts local click-through by several points.
          </div>
        </div>
      </div>

      <div style={{ ...mono(10, "#7a7a9a", 2), marginBottom: 10 }}>Staff leaderboard · mentioned by name</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {vertical.staff.map((s) => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", ...cardStyle(), flexWrap: "wrap" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(108,99,255,0.15)", border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: accent, flexShrink: 0 }}>{s.initials}</div>
            <span style={{ fontSize: 13, fontWeight: 600, flex: "1 1 120px" }}>{s.name}</span>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#7a7a9a" }}>{s.count} mentions</span>
            <span style={{ color: "#f4c55a", fontSize: 12, letterSpacing: 1 }}>{s.stars}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function Setup({ r: rep, compact }) {
  const { st, set, vertical, setupDone } = rep;
  const mark = (d) => (d ? "✓" : "○");
  const col = (d) => (d ? "#43e97b" : "#7a7a9a");
  return (
    <Panel compact={compact} stripeTo="#3ad6e0" icon={<Icon name="settings" color={accent} />} iconBg="rgba(108,99,255,0.15)" title="Setup"
      sub={setupDone === 4 ? "ALL SET — YOU'RE LIVE" : `${setupDone} OF 4 COMPLETE`}>
      <div style={{ height: 4, background: "#161c32", borderRadius: 2, overflow: "hidden", marginBottom: 18 }}>
        <div style={{ height: "100%", width: `${Math.round((setupDone / 4) * 100)}%`, background: `linear-gradient(90deg, ${accent}, #43e97b)`, transition: "width 0.4s ease" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ ...cardStyle(), padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: "#43e97b" }}>✓ STEP 1</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>What kind of business is {BUSINESS_NAME}?</span>
          </div>
          <div style={{ fontSize: 11, color: "#4a4a6a", marginBottom: 10 }}>This tunes your platforms, invite timing, reply tone and tracked keywords.</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {VERTICALS.map((v) => (
              <button key={v.id} onClick={() => set({ vertical: v.id, openId: null })} style={{ ...pill(v.id === st.vertical), color: v.id === st.vertical ? accent : "#a0a0c8", fontSize: 12, padding: "6px 14px" }}>{v.label}</button>
            ))}
          </div>
        </div>

        <div style={{ ...cardStyle(), padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: col(st.fbConnected) }}>{mark(st.fbConnected)} STEP 2</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Connect your review platforms</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {vertical.platforms.filter((p) => p !== "Facebook").map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(67,233,123,0.08)", border: "1px solid rgba(67,233,123,0.4)", borderRadius: 20, padding: "5px 13px", fontSize: 12, color: "#43e97b" }}>✓ {p}</div>
            ))}
            {st.fbConnected ? (
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(67,233,123,0.08)", border: "1px solid rgba(67,233,123,0.4)", borderRadius: 20, padding: "5px 13px", fontSize: 12, color: "#43e97b" }}>✓ Facebook</div>
            ) : (
              <button onClick={() => set({ fbConnected: true })} style={{ background: "rgba(108,99,255,0.12)", border: `1px solid ${accent}`, borderRadius: 20, color: accent, fontSize: 12, padding: "5px 13px", cursor: "pointer" }}>Connect Facebook</button>
            )}
          </div>
        </div>

        <div style={{ ...cardStyle(), padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: col(st.imported) }}>{mark(st.imported)} STEP 3</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Import your review history</span>
          </div>
          {st.imported ? (
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#43e97b" }}>✓ 214 reviews imported · sentiment analyzed</span>
          ) : (
            <button onClick={() => set({ imported: true })} style={primaryBtn}>Import 214 reviews found</button>
          )}
        </div>

        <div style={{ ...cardStyle(), padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: col(st.phoneSaved) }}>{mark(st.phoneSaved)} STEP 4</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Where should urgent alerts go?</span>
          </div>
          {st.phoneSaved ? (
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#43e97b" }}>✓ SMS alerts → {st.phone}</span>
          ) : (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input
                value={st.phone}
                onChange={(e) => set({ phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                style={{ flex: "1 1 200px", background: "#101526", border: "1px solid #28304a", borderRadius: 6, color: "#e8e8f0", fontSize: 13, padding: "8px 12px" }}
              />
              <button onClick={() => { if (st.phone.trim()) set({ phoneSaved: true }); }} style={{ ...primaryBtn, padding: "8px 16px" }}>Save</button>
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
}
