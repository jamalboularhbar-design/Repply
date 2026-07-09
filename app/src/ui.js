import { ACCENT } from "./data.js";

export const accent = ACCENT;

// Pill states per the BuilderOS token sheet.
export const pill = (selected, base = "transparent") => ({
  background: selected ? "rgba(108,99,255,0.18)" : base,
  border: `1px solid ${selected ? accent : "#28304a"}`,
  borderRadius: 20,
  color: selected ? accent : "#a0a0c8",
  cursor: "pointer",
});

export const toggleStyle = (on) => ({
  background: on ? "rgba(67,233,123,0.12)" : "transparent",
  border: `1px solid ${on ? "#43e97b" : "#28304a"}`,
  borderRadius: 20,
  color: on ? "#43e97b" : "#7a7a9a",
  fontFamily: "monospace",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 1,
  padding: "4px 12px",
  cursor: "pointer",
});

export const mono = (size = 10, color = "#7a7a9a", spacing = 2) => ({
  fontFamily: "monospace",
  fontSize: size,
  letterSpacing: spacing,
  textTransform: "uppercase",
  color,
});

export const primaryBtn = {
  background: accent,
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 600,
  padding: "7px 16px",
  cursor: "pointer",
};

export const cardStyle = (border = "#28304a", radius = 8) => ({
  background: "#161c32",
  border: `1px solid ${border}`,
  borderRadius: radius,
});
