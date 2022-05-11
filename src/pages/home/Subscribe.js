import React from "react";
import { FormControl } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div style={{ background: "#fff" }} className="py-4">
      <div className="row container mx-auto p-4 gap-4 mx-auto">
        <div className="col-lg-6">
          <h2 className="my-3 text-success">Get the best deals first Newsletter!</h2>
          <p className="my-3">
            Sign up for our newsletter and be the first to know about our
            updates. All new subscribers get some tips and tips for good
            managing.
          </p>
        </div>
        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <form>
            <label className="my-3 ms-1 ">Email Address</label>
            <FormControl required />
            <input
              className="btn bg-dark text-white my-2 ms-1"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
