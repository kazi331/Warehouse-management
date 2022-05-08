import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <div>
      <div className="mb-4 rounded container-fluid my-4">
        <Carousel className="rounded">
          <Carousel.Item className="rounded">
            <img
              className="d-block w-100"
              src="https://loremflickr.com/640/300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="d-none d-md-block">
                Featuring categories like “animals,” “architecture,
              </h3>
              <p className="d-none d-md-block">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placekitten.com/640/300"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block">
                Love nature? Then you'll love placebear
              </h3>
              <p className="d-none d-md-block">
                Love nature? Then you'll love placebear.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placekitten.com/640/300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block">
                Featuring options such as “Calm,” and “CRAZY,”
              </h3>
              <p className="d-none d-md-block">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
