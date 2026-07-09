import { useEffect } from "react";
import { useHashRoute } from "./lib.js";
import Landing from "./views/Landing.jsx";
import Manager from "./views/Manager.jsx";
import Digest from "./views/Digest.jsx";

export default function App() {
  const route = useHashRoute();
  const view = route.startsWith("/app") ? "app" : route.startsWith("/digest") ? "digest" : "landing";

  useEffect(() => {
    // First-party pageview counter — no cookies, no PII.
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ view, lang: document.documentElement.lang || "en" }),
    }).catch(() => {});
  }, [view]);

  if (view === "app") return <Manager />;
  if (view === "digest") return <Digest />;
  return <Landing />;
}
