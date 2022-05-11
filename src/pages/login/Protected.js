import React from "react";
import { Button } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Protected = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const verifyEmail = () => {
    sendEmailVerification();
    if (sending) {
      toast("Check Email");
    }
    if (error) toast.error(error.message);
  };
  const location = useLocation();
  console.log(user);

  if (loading) {
    return <p className="text-center p-4 m-4 ">Loading...... </p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user?.email) {
    return (
      <div className="container mx-auto text-center m-4 p-4">
        <p className="text-danger">
          Problem with your account , Please, register with a new valid email{" "}
        </p>
      </div>
    );
  }
  if (!user?.emailVerified) {
    return (
      <div className="container mx-auto text-center m-4 p-4">
        <p> Your Email is not varified!</p>
        <Button onClick={verifyEmail}>Send Varification Email</Button>
      </div>
    );
  }

  return children;
};

export default Protected;
