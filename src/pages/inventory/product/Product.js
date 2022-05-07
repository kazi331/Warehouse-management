import React from "react";
import "./products.css";

const Product = ({ product }) => {
  // console.log(product);
  const { name, category, description, img, price, quantity, supplier } =
    product;
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="products-items">
        <div className="product-items-head pb-5">
          <span>{category}</span>
        </div>
        <div className="product-items-image pb-5">
          <img className="product-image" src={img} alt="" />
        </div>
        <div className="product-items-details">
          <h5>
            <a href="/">{name}</a>
          </h5>
          <p>
            <small>{description}</small>
          </p>
        </div>
        <div className="product-items-footer d-flex justify-content-between">
          <p>
            <span>$ {price}</span>
          </p>
          <div className="icons">
            <span className="me-2">
              <i className="fa-regular fa-edit"></i>
            </span>
            <span>
              <i className="fa-regular fa-trash-can"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
