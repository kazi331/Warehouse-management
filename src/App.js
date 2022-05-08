import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import Products from "./pages/inventory/product/Products";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ResetPass from "./pages/login/ResetPass";
import AddNew from "./pages/products/AddNew";
import Update from "./pages/products/Update";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/new" element={<AddNew />} />
        <Route path="/products" element={<Products />} />
        <Route path="/update/:pid" element={<Update />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
