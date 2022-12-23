import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import { FichasProvider } from "./hooks/useFichas";
import { DisabledProvider } from "./hooks/useDisabled";
import { TitleProvider } from "./hooks/useTitle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TitleProvider>
      <FichasProvider>
        <DisabledProvider>
          <Routes />
          <GlobalStyles />
        </DisabledProvider>
      </FichasProvider>
    </TitleProvider>
  </AuthProvider>
);