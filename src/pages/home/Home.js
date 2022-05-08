import React from "react";
import Slider from "./Slider";
import Products from "../inventory/product/Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
