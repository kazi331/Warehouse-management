import React from "react";
import Products from "../inventory/product/Products";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import "./testimonial.css"; 

const Home = () => {
  return (
    <div className="bg-light">
      <Slider />
      <Products />
      <Testimonial/>
      <Subscribe />
    </div>
  );
};

export default Home;
