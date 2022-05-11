import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Update = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://obscure-fortress-33779.herokuapp.com/product/${pid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [pid]);
  const {
    name,
    category,
    description,
    img,
    price,
    quantity,
    supplier,
    sEmail,
  } = product;
  const updateProduct = (e) => {
    e.preventDefault();
    const number = parseInt(e.target.quantity.value);
    const newQuantity = parseInt(quantity) + number;
    const newData = { quantity: newQuantity };
    console.log(newQuantity, number);
    fetch(`https://obscure-fortress-33779.herokuapp.com/update/${pid}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };
  const deliver = (e) => {
    e.preventDefault();
    const newQuantity = quantity - 1;
    const newData = { quantity: newQuantity };
    console.log(newData);
    fetch(`https://obscure-fortress-33779.herokuapp.com/update/${pid}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <div className="container mx-auto">
      <div className="text-center py-4">
        <small>Your Are Editing </small> <h6> {name?.slice(0,40)} </h6>
      </div>
      <div className="col-12 col-sm-8 col-lg-8 mx-auto">
        <div className="products-items update">
          <div className="row">
            <div className="col-lg-6 col-12 product-items-image">
              <img className="product-image" src={img} alt="" />
            </div>
            <div className="col-lg-6 col-12 product-items-details mb-1">
              <h6>{name}</h6>
              <p><small>{description}</small> </p>
              <small>
                Supplier: {supplier}
              </small>
              <br />
              <small>Category: {category}</small>
              <br />
              <small>Available: {quantity}</small>

              <p className="text-success mb-0 pb-0">${price}</p>
            </div>
          </div>
        </div>
        <div className="row py-4 mb-4">
          <div className="col-12 col-lg-6 my-2">
            <Button onClick={deliver}>Deliver One</Button>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <form onSubmit={updateProduct} className="row">
              <input
                className="form-control col"
                type="number"
                name="quantity"
                placeholder="Update Stock"
                required
              />
              <input
                className="btn btn-primary ms-4 col"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
