import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center footer-shadow ">
      <div className="container p-4 pb-0 ">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
          >
            <i className="ri-facebook-fill"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
          >
            <i className="ri-twitter-fill"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
          >
            <i className="ri-google-fill"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
          >
            <i className="ri-instagram-fill"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
          >
            <i className="ri-stack-overflow-fill"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
          >
            <i className="ri-github-fill"></i>
          </a>
        </section>
      </div>

      <div className="text-center bg-dark p-3 text-white">
        &copy; 2022 Copyright Phoenix Web
      </div>
    </footer>
  );
};

export default Footer;
