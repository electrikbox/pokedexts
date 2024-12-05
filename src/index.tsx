import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FavorisProvider } from "./context/FavorisContext"; // Contexte Favoris

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <FavorisProvider>
      <App />
    </FavorisProvider>
  </React.StrictMode>
);

reportWebVitals();
