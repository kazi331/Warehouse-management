import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        style={{ width: "90vw", height: "90vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Spinner variant="info" animation="grow" />
      </div>
    );
  }

  products.length = 6;
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
      <div className="text-center">
        <Link to="/inventory" className="btn btn-primary">Manage Inventories</Link>
      </div>
    </div>
  );
};

export default Products;
