import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import { FichasProvider } from "./hooks/useFichas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FichasProvider>
      <Routes />
      <GlobalStyles />
    </FichasProvider>
  </AuthProvider>
);