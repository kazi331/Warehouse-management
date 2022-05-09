import React from "react";
import Products from "../inventory/product/Products";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="bg-light">
      <Slider />
      <Products />
      <Subscribe/>
    </div>
  );
};

export default Home;
