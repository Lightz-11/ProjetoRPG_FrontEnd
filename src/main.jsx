import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import { FichasProvider } from "./hooks/useFichas";
import { DisabledProvider } from "./hooks/useDisabled";
import { TitleProvider } from "./hooks/useTitle";
import { FichasNPCSPrincipalProvider } from "./hooks/useFichasNPCSPrincipal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TitleProvider>
      <FichasProvider>
        <FichasNPCSPrincipalProvider>
          <DisabledProvider>
            <Routes />
            <GlobalStyles />
          </DisabledProvider>
        </FichasNPCSPrincipalProvider>
      </FichasProvider>
    </TitleProvider>
  </AuthProvider>
);