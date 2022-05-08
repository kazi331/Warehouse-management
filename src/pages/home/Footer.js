import React from "react";
import './footer.css'

const Footer = () => {
  return (
      <footer class="bg-light text-center footer-shadow ">
        <div class="container p-4 pb-0 ">
          <section class="mb-4">
            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center bg-dark p-3 text-white">
          &copy; 2022 Copyright Phoenix Web
        </div>
      </footer>
    
  );
};

export default Footer;
