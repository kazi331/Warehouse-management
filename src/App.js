import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blog from "./pages/blog/Blog";
import Featured from "./pages/featured/Featured";
import Footer from "./pages/home/Footer";
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import Products from "./pages/inventory/product/Products";
import Login from "./pages/login/Login";
import Protected from "./pages/login/Protected";
import Register from "./pages/login/Register";
import ResetPass from "./pages/login/ResetPass";
import MyItems from "./pages/myItem/MyItems";
import NotFound from "./pages/notFound/NotFound";
import AddNew from "./pages/products/AddNew";
import Update from "./pages/products/Update";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/inventory"
          element={
            <Protected>
              <Inventory />
            </Protected>
          }
        />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route
          path="/new"
          element={
            <Protected>
              <AddNew />
            </Protected>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/update/:pid"
          element={
            <Protected>
              <Update />
            </Protected>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/my-items" element={<MyItems />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
