import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Social = () => {
  const [user] = useAuthState(auth);
  const [customError, setCustomError] = useState([]);
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
