import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppLayout } from "../Layout/AppLayout";
import { CriarFichaConvite } from "../pages/CriarFichaConvite";
import { CriarFicha } from "../pages/CriarFicha";
import { Dashboard } from "../pages/Dashboard";
import { EditarConta } from "../pages/EditarConta";
import { Ficha } from "../pages/Ficha";
import { Portrait } from "../pages/Portrait";
import { Sessao } from "../pages/Sessao";

export function UserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/sessao/mestre/:id" element={<Sessao />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/conta" element={<EditarConta />} />
        <Route path="/criarficha" element={<CriarFicha />} />
        <Route path="/criarficha/convite/:id" element={<CriarFichaConvite />} />
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} />
      </Route>
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
    </Routes>
  );
}
