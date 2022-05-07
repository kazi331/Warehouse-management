import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./addnew.css";

const AddNew = () => {
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const newProduct = {
      name,
      category,
      price,
      quantity,
      img,
      description,
      supplier,
    };
    console.log(newProduct);
    fetch("https://obscure-fortress-33779.herokuapp.com/newproduct", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 col-lg-8 mx-auto">
          <h2 className="text-center mb-4 text-dark">Add new product </h2>
          <Form onSubmit={addProduct}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="category"
                  placeholder="Category"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Quantity
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Link
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="img"
                  placeholder="Image link"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Supplier
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="description"
                  className="description"
                  as="textarea"
                  placeholder="Product Description"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button variant="primary" type="submit">
                  Add This Product
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
