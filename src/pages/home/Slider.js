import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <div>
      <div className="mb-4 rounded container-fluid my-4">
        <Carousel className="rounded">
          <Carousel.Item className="rounded ">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/pdNB7cP/pexels-michael-burrows-7129662.jpg"
              alt="First slide"
            />
            {/* 
          https://i.ibb.co/3fpZVrt/pexels-derice-jason-fahnkow-1595238.jpg
          https://i.ibb.co/qRFSR2m/pexels-drew-williams-2453658.jpg
          https://i.ibb.co/bFDydmL/pexels-ekrulila-8167382.jpg
          https://i.ibb.co/3BRMGXG/pexels-jatin-jangid-8024034-1.jpg
          https://i.ibb.co/pdNB7cP/pexels-michael-burrows-7129662.jpg
          https://i.ibb.co/CWNHjFb/pexels-pok-rie-724920.jpg
          https://i.ibb.co/LCf5T9K/pexels-soulful-pizza-6751556.jpg
          https://i.ibb.co/Fbt3tND/pexels-tembela-bohle-2050718.jpg
            */}
            <Carousel.Caption>
              <h3 className="d-none d-md-block text-white">
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
              src=" https://i.ibb.co/Fbt3tND/pexels-tembela-bohle-2050718.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block text-white">
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
              src="https://i.ibb.co/bFDydmL/pexels-ekrulila-8167382.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block text-white">
                Featuring options such as “Calm,” and “CRAZY,”
              </h3>
              <p className="d-none d-md-block">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/3BRMGXG/pexels-jatin-jangid-8024034-1.jpg"
              alt="fourth slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block text-white">
                Featuring options such as “Calm,” and “CRAZY,”
              </h3>
              <p className="d-none d-md-block">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/LCf5T9K/pexels-soulful-pizza-6751556.jpg"
              alt="fourth slide"
            />

            <Carousel.Caption>
              <h3 className="d-none d-md-block text-white">
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
