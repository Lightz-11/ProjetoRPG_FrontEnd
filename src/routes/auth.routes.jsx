import { Routes, Route } from "react-router-dom";
import { Documentos } from "../pages/Documentos";
import { Home } from "../pages/Home";
import { Imagem } from "../pages/Imagem";
import { Portrait } from "../pages/Portrait";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/ficha/imagem/:id" element={<Imagem />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />
    </Routes>
  );
}