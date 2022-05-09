import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./login.css";
// import "./loginMini.css";
import Social from "./Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    signInWithEmailAndPassword(email, pass);
  };
  if (error) {
    toast.error(error.message);
  }

  // redirect user after logging in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="wrapper container-fluid my-4">
      <section className="login-content">
        <div className="container-2">
          <div className="row align-items-center justify-content-center height-self-center">
            <div className="col-lg-8">
              <div className="card auth-card">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center auth-content">
                    <div className="col-lg-12  ">
                      <div className="p-3">
                        <h2 className="mb-2">Sign In</h2>
                        <p>Login to to your account.</p>

                        {/* Validation Errors  */}
                        <form onSubmit={emailLogin}>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder=""
                                  required
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
                                  Password
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="custom-control custom-checkbox mb-3"></div>
                              {loading ? <p>Loading......</p> : null}
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
                        </form>
                        <p className="mt-3">
                          Create an Account
                          <Link to="/register" className="text-primary">
                            {" "}
                            Sign Up
                          </Link>
                        </p>
                      </div>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
