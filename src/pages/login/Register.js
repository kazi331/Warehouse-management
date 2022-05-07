import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
  return (
    <div className="wrapper">
      <section className="login-content">
        <div className="container-2">
          <div className="row align-items-center justify-content-center height-self-center">
            <div className="col-lg-8">
              <div className="card auth-card">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center auth-content">
                    <div className="col-lg-12 align-self-center">
                      <div className="p-3">
                        <h2 className="mb-2">Sign Up</h2>
                        <p>Create your account.</p>

                        {/* Validation Errors  */}

                        <form method="POST" action="">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder=" "
                                  required
                                />
                                <label>
                                  Full Name
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  type="email"
                                  placeholder=" "
                                  id="email"
                                  name="email"
                                  required=""
                                />
                                <label>
                                  Email<span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  type="password"
                                  placeholder=" "
                                  id="password"
                                  name="password"
                                  required
                                />
                                <label>
                                  Password<span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  type="password"
                                  placeholder=" "
                                  name="password_confirmation"
                                  required=""
                                />
                                <label>
                                  Confirm Password
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  I agree with the terms of use
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            {" "}
                            sign up
                          </button>
                          <p className="mt-3">
                            Already have an Account{" "}
                            <Link to="/login">Sign In</Link>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-0 content-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
