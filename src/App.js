import { Route, Routes } from "react-router-dom";

import "./App.css";
import Inventory from "./pages/inventory/Inventory";
import Login from "./pages/login/Login";
import "./pages/login/login-register.css";

import Register from "./pages/login/Register";
import ResetPass from "./pages/login/ResetPass";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
