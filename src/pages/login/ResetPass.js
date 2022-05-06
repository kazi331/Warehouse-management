import React from "react";

const ResetPass = () => {
  return (
    <div class="wrapper">
      <section class="login-content">
        <div class="container">
          <div class="row align-items-center justify-content-center height-self-center">
            <div class="col-lg-8">
              <div class="card auth-card">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center auth-content">
                    <div class="col-lg-7 align-self-center">
                      <div class="p-3">
                        <h2 class="mb-2">Reset Password</h2>
                        <p>
                          Enter your email address and we'll send you an email
                          with instructions to reset your password.
                        </p>

                        {/* Validation Errors  */}

                        <form method="POST" action="">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="floating-label form-group">
                                <input
                                  class="floating-input form-control"
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
                          <button type="submit" class="btn btn-primary ">
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
