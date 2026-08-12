import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const route = new URLSearchParams(window.location.search).get("route");
if (route?.startsWith("/")) {
  window.history.replaceState(null, "", `${import.meta.env.BASE_URL}${route.slice(1)}`);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
