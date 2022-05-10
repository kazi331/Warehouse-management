import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
// import "./login.css";
import Social from "./Social";

const Register = () => {
  // redirect user after logging in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const register = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const pass2 = e.target.confirmPass.value;
    if (pass !== pass2) {
      toast.warn("Password doesn't match.");
      return;
    }
    createUserWithEmailAndPassword(email, pass);
    if (error) {
      toast.error(error.message);
      return;
    }
    e.target.email.value = "";
    e.target.name.value = "";
    e.target.password.value = "";
  };

  return (
    <div className="wrapper container-fluid my-4">
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

                        <form onSubmit={register}>
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
                                  name="confirmPass"
                                  required=""
                                />
                                <label>
                                  Confirm Password
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="custom-control custom-checkbox mb-3"></div>
                            </div>
                            {loading ? <p>Loading......</p> : null}
                          </div>
                          <button type="submit" className="btn btn-primary">
                            {" "}
                            Sign me up
                          </button>
                          <p className="mt-3">
                            Already have an Account{" "}
                            <Link to="/login">Sign In</Link>
                          </p>
                          <Social />
                        </form>
                      </div>
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

export default Register;
