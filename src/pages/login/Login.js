import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                        <h2 class="mb-2">Sign In</h2>
                        <p>Login to stay connected.</p>

                        {/* Validation Errors  */}
                        <form
                          method="POST"
                          action=""
                          data-toggle="validator"
                          novalidate="true"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  id="email"
                                  type="email"
                                  name="email"
                                  value=""
                                  placeholder=""
                                  required=""
                                />
                                <label>
                                  Email<span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
                                  type="password"
                                  placeholder=""
                                  name="password"
                                  required=""
                                  autocomplete="current-password"
                                />
                                <label>
                                  Password<span class="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  class="custom-control-label control-label-1"
                                  for="customCheck1"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <Link
                                to="/reset-password"
                                class="text-primary float-right"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary"
                          >
                            sign
                          </button>
                          <p class="mt-3">
                            Create an Account
                            <Link to="/register" class="text-primary">
                              {" "}
                              Sign Up
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div class="col-lg-0 content-right">
                      {/* <img
                        src="https://templates.iqonic.design/posdash/laravel/public/images/login/01.png"
                        class="img-fluid image-right"
                        alt=""
                      /> */}
                    </div>
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

export default Login;
