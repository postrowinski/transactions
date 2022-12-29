import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
