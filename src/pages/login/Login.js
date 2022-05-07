import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper container-fluid">
      <section className="login-content">
        <div className="container-2">
          <div className="row align-items-center justify-content-center height-self-center">
            <div className="col-lg-8">
              <div className="card auth-card">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center auth-content">
                    <div className="col-lg-12 align-self-center">
                      <div className="p-3">
                        <h2 className="mb-2">Sign In</h2>
                        <p>Login to to your account.</p>

                        {/* Validation Errors  */}
                        <form method="POST" action="">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder=""
                                  required=""
                                />
                                <label>
                                  Email<span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  type="password"
                                  placeholder=""
                                  name="password"
                                  required
                                />
                                <label>
                                  Password<span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label control-label-1"
                                  htmlFor="customCheck1"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <Link
                                to="/reset-password"
                                className="text-primary float-right"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Sign me in
                          </button>
                          <p className="mt-3">
                            Create an Account
                            <Link to="/register" className="text-primary">
                              {" "}
                              Sign Up
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-0 content-right">
                      {/* <img
                        src="https://templates.iqonic.design/posdash/laravel/public/images/login/01.png"
                        className="img-fluid image-right"
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
