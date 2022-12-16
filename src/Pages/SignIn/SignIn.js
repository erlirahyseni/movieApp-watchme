import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [state, setState] = useState(false);
  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="signIn">
      <div className="content">
        <div className="left-Section"></div>
        <div className="right-Section">
          <div className="flexStart">
            <h1>Hello!</h1>
            <p>Welcome please enter your details.</p>
            <div className="field">
              <input type="text" placeholder="Address" />
              <input
                type={state ? "text" : "password"}
                placeholder="Password"
              />
              <button id="hidePassword" onClick={toggle}>
                {" "}
                {state ? <FaEye /> : <FaEyeSlash />} Show password
              </button>
              <button id="signIn" onClick={() => navigate("/movie-page")}>Sign In</button>
            </div>
            <div className="signUp">
              <h1>Don't have an account yet?</h1>
              <button id="joinNow" onClick={() => navigate("/join-now")}>
                Join now for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
