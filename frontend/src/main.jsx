import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WotkoutsContextProvider } from "./context/WorkoutsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WotkoutsContextProvider>
      <App />
    </WotkoutsContextProvider>
  </React.StrictMode>
);
