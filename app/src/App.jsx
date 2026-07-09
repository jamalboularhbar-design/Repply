import { useHashRoute } from "./lib.js";
import Landing from "./views/Landing.jsx";
import Manager from "./views/Manager.jsx";
import Digest from "./views/Digest.jsx";

export default function App() {
  const route = useHashRoute();
  if (route.startsWith("/app")) return <Manager />;
  if (route.startsWith("/digest")) return <Digest />;
  return <Landing />;
}
