import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import { FichasProvider } from "./hooks/useFichas";
import { DisabledProvider } from "./hooks/useDisabled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FichasProvider>
      <DisabledProvider>
        <Routes />
        <GlobalStyles />
      </DisabledProvider>
    </FichasProvider>
  </AuthProvider>
);