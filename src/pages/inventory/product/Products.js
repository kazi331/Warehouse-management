import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Product from "./Product";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-fortress-33779.herokuapp.com/get-product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  if (products.length === 0) {
    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Spinner variant="info" animation="grow" />
      </div>
    );
  }


  return (
    <div className="container mb-4 pb-4 mx-auto">
      <h2 className="text-center text-dark py-4 my-4">Products in inventory</h2>
      <section className="my-products">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
