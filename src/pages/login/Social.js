import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Social = () => {
  // redirect user after logging in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [user] = useAuthState(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

  if (loading || loading2) {
    return <p>Loading......</p>;
  }
  const googleLogin = () => {
    signInWithGoogle();
    if (error || error2) {
      toast.error(error.message);
    }
  };

  const fbLogin = () => {};
  const ghLogin = () => {
    signInWithGithub();
  };

  if (user || user2) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container col-lg-6 mx-auto">
      <h3 className="text-dark text-center">Social Login</h3>
      <p className="text-center">Login with social media</p>
      <div className="d-flex gap-2 flex-column py-2 mb-4">
        <Button
          className="bg-primary text-white shadow-none"
          onClick={googleLogin}
        >
          Login With Google
        </Button>
        <Button
          className="bg-primary text-white shadow-none"
          disabled
          onClick={fbLogin}
        >
          Login With Facebook
        </Button>
        <Button className="bg-primary text-white shadow-none" onClick={ghLogin}>
          Login With Github
        </Button>
      </div>
    </div>
  );
};

export default Social;
