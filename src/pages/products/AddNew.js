import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./addnew.css";

const AddNew = () => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 col-lg-8 mx-auto">
          <h2 className="text-center mb-4 text-dark">Add new product </h2>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="name" placeholder="Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number" name="price" placeholder="Price" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Link
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="img" placeholder="Image link" />
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
