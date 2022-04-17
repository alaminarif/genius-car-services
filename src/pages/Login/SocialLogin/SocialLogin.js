import React from "react";
import Google from "../../../images/google-logo-png.png";
import facebook from "../../../images/Facebook-icon-1.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error2) {
    errorElement = (
      <div>
        <p>
          Error: {error?.message} {error2?.message}
        </p>
      </div>
    );
  }
  if (user || user2) {
    navigate("/home");
  }

  return (
    <div>
      <div className=" w-50 mx-auto d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <div className=" mx-2">or</div>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      <p className="text-danger">{errorElement}</p>
      <div className="">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary w-25 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={Google} alt="" />
          <span className="px-2"> Google SignIn</span>
        </button>
        <button className="btn btn-primary w-25 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook SignIn</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-primary w-25 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2"> Github SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
