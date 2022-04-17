import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };
  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    if (email) {
      toast("Sent email");
    } else {
      toast("please your email");
    }
  };
  return (
    <>
      <div className="w-50 mx-auto">
        <h2 className="text-center text-primary">please login</h2>
        <Form className=" w-75 mx-auto" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className="w-50 mx-auto d-block" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-danger">{errorElement}</p>
        <p>
          New to genius car?{" "}
          <button onClick={navigateRegister} className=" btn btn-link pe-auto text-decoration-none">
            {" "}
            please register
          </button>
        </p>
        <p>
          Forget password?{" "}
          <span className="text-primary" onClick={resetPassword}>
            Reset Password
          </span>
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </>
  );
};

export default Login;
