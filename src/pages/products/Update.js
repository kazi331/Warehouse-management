import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://obscure-fortress-33779.herokuapp.com/product/${pid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { name, category, _id, description, img, price, quantity, supplier } =
    product;
  const sold = 0;
  return (
    <div className="container mx-auto">
      <h4 className="text-center py-4  "> <small>Your Are Editing - </small> {name}</h4>
      <div className="col-12 col-sm-8 col-lg-8 mx-auto">
        <div className="products-items update">
          <div className="row">
            <div className="col-lg-6 col-12 product-items-image">
              <img className="product-image" src={img} alt="" />
            </div>
            <div className="col-lg-6 col-12 product-items-details mb-1">
              <h5>{name}</h5>
              <p>
                <small>{description}</small> <br />
              </p>
              <small>Supplier: {supplier}</small>
              <br />
              <small>Available: {quantity}</small> <br />
              <small>Sold: {sold}</small>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-success mb-0 pb-0">${price}</p>
                <button className="badge px-2 py-1  bg-warning mr-2 btn">
                  <i className="ri-delete-bin-line mr-0"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
