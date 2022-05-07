import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ResetPass from "./pages/login/ResetPass";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
