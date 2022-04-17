import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    console.log(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // const agree = event.target.terms.checked;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Update Profile");
    navigate("/home");
  };
  return (
    <div className="register">
      <h2> Register</h2>
      <form onSubmit={handleSubmit} className="register-from">
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input type="email" name="email" id="" placeholder="Email Address" required />
        <input type="password" name="password" id="" placeholder="password" />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
        <label className={agree ? "text-primary" : "text-danger"} htmlFor="checkbox">
          accept terms and condition
        </label>
        <input disabled={!agree} className="w-50 mx-auto d-block btn btn-primary" type="submit" value="Register" />
      </form>
      <p>
        Already accout Login? <span onClick={navigateLogin}>login</span>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
