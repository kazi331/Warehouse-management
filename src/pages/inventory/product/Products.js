import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="container mb-4 pb-4 mx-auto">
      <h2 className="text-center text-dark py-4 my-4">Products in inventory</h2>
      <section className="my-products">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
