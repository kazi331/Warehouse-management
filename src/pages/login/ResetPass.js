import React from "react";

const ResetPass = () => {
  return (
    <div className="wrapper">
      <section className="login-content">
        <div className="container">
          <div className="row align-items-center justify-content-center height-self-center">
            <div className="col-lg-8">
              <div className="card auth-card">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center auth-content">
                    <div className="col-lg-7 align-self-center">
                      <div className="p-3">
                        <h2 className="mb-2">Reset Password</h2>
                        <p>
                          Enter your email address and we'll send you an email
                          with instructions to reset your password.
                        </p>

                        {/* Validation Errors  */}

                        <form method="POST" action="">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input form-control"
                                  type="email"
                                  placeholder=" "
                                  id="email"
                                  name="email"
                                  required
                                />
                                <label>Email</label>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary ">
                            Email Password Reset Link
                          </button>
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

export default ResetPass;
