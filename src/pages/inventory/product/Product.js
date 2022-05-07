import React from "react";

const Product = () => {
  return (
    <div style={{ minWidth: "300px" }}>
      <div class="card mb-3" style={{ maxWidth: "400px" }}>
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h1-product-5-800x600.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="card-body mx-2">
              <h5 class="card-title">Mac book air lite</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <div className="d-flex flex-column">
                <small class="text-muted">Brand: Apple</small>
                <small class="text-muted">Supplier: Sayem Khan</small>
                <small class="text-muted">Price: $500</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
