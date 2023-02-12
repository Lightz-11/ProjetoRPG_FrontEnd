import { Routes, Route } from "react-router-dom";
import { Documentos } from "../pages/Documentos";
import { Home } from "../pages/Home";
import { Imagem } from "../pages/Imagem";
import { Portrait } from "../pages/Portrait";
import { Ficha } from "../pages/Ficha";
import { AppLayout } from "../Layout/AppLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/ficha/imagem/:id" element={<Imagem />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} />
      </Route>

    </Routes>
  );
}