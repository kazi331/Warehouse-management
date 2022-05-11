import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

const Product = ({ product, deleteItem }) => {
  // console.log(product);
  const { name, category, _id, description, img, price, quantity, supplier } =
    product;

  return (
    <div className=" my-product">
      <div className="products-items bg-white">
        <div className="product-items-head pb-3">
          <span>{category}</span>
        </div>
        <div className="product-items-image pb-5">
          <img className="product-image" src={img} alt="" />
        </div>
        <div className="product-items-details mb-1">
          <h5>
            <a href="#!">{name.slice(0, 60)}</a>
          </h5>
          <p className="mb-4">
            <small>{description.slice(0, 138)}</small> <br />
          </p>
          <small>Supplier: {supplier}</small>
          <br />
          <small>Avl: {quantity}</small>
        </div>
        <div className="icons">
          <div>
            <small className="text-success mb-0 pb-0">${price}</small>
          </div>
          <div>
            {" "}
            <Link
              to={`/update/${_id}`}
              className="badge px-2 py-1 bg-success mr-2 btn"
            >
              Update <i className="ri-edit-box-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
