import React from "react";
import { Button } from "react-bootstrap";
import {
  useAuthState,
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

  const [user] = useAuthState(auth);
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const googleLogin = () => {
    signInWithGoogle();
    if (error) {
      toast.error(error.message);
    }
  };
  const fbLogin = () => {
    if (error) {
      toast.error(error.message);
    }
  };
  const ghLogin = () => {
    signInWithGithub();
    if (error) {
      toast.error(error.message);
      return;
    }
  };

  if (loading) {
    return <p>Loading......</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container col-lg-6 mx-auto">
      <h3 className="text-dark text-center">Social Login</h3>
      <p className="text-center">Login with social media</p>
      <div className="d-flex gap-2 flex-column py-2 mb-4">
        <Button onClick={googleLogin}>Login With Google</Button>
        <Button disabled onClick={fbLogin}>
          Login With Facebook
        </Button>
        <Button onClick={ghLogin}>Login With Github</Button>
      </div>
    </div>
  );
};

export default Social;
