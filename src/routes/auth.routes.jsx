import { Routes, Route } from "react-router-dom";
import { Documentos } from "../pages/Documentos";
import { Home } from "../pages/Home";
import { Portrait } from "../pages/Portrait";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />
    </Routes>
  );
}