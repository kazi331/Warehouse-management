import React from "react";
import './products.css'
import Product from "./Product";

const Products = () => {
  return (
    <div className="container mb-4 pb-4 mx-auto">
      <h2 className="text-center text-dark py-4 my-4">
        Our Inventory Products
      </h2>
      <div className="product-row">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  );
};

export default Products;
