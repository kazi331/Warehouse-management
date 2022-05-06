import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="wrapper">
      <section class="login-content">
        <div class="container">
          <div class="row align-items-center justify-content-center height-self-center">
            <div class="col-lg-8">
              <div class="card auth-card">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center auth-content">
                    <div class="col-lg-12 align-self-center">
                      <div class="p-3">
                        <h2 class="mb-2">Sign Up</h2>
                        <p>Create your POSDash account.</p>

                        {/* Validation Errors  */}

                        <form
                          method="POST"
                          action=""
                          data-toggle="validator"
                          novalidate="true"
                        >
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  id="name"
                                  name="name"
                                  value=""
                                  type="text"
                                  placeholder=" "
                                  required
                                />
                                <label>
                                  Full Name<span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  type="email"
                                  placeholder=" "
                                  id="email"
                                  name="email"
                                  value=""
                                  required=""
                                />
                                <label>
                                  Email<span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  type="password"
                                  placeholder=" "
                                  id="password"
                                  name="password"
                                  required=""
                                  autocomplete="new-password"
                                />
                                <label>
                                  Password<span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  type="password"
                                  placeholder=" "
                                  name="password_confirmation"
                                  required=""
                                />
                                <label>
                                  Confirm Password
                                  <span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck1"
                                >
                                  I agree with the terms of use
                                  <span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary"
                          >
                            {" "}
                            sign up
                          </button>
                          <p class="mt-3">
                            Already have an Account{" "}
                            <Link to="/login">Sign In</Link>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div class="col-lg-0 content-right"></div>
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
