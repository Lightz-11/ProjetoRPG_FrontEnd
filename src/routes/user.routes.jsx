import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../Layout/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { EditarConta } from "../pages/EditarConta";
import { Sessao } from "../pages/Sessao";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sessao/mestre/:id" element={<Sessao />} />
        <Route path="/conta" element={<EditarConta />} />
      </Route>
    </Routes>
  );
}
