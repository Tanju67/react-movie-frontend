import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "./shared/context/omdbApi-context";
import { AuthProvider } from "./shared/context/auth-context";
import { ServerAPIProvider } from "./shared/context/serverApi-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ServerAPIProvider>
      <Provider>
        <App />
      </Provider>
    </ServerAPIProvider>
  </AuthProvider>
);
