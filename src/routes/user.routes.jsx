import { Routes, Route } from "react-router-dom";
import {Dashboard} from "../pages/Dashboard"

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}