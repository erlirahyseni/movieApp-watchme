import "./JoinNow.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const JoinNow = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="joinNow">
      <div className="mainContent">
        <div className="leftSection"></div>
        <div className="rightSection">
          <div className="flex-Start">
            <h1>Create an account</h1>
            <p>Lets's get started with free trial.</p>
            <div className="field">
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Username" />
              <input
                type={state ? "text" : "password"}
                placeholder="Password"
              />
              <button id="hidePassword" onClick={toggle}>
                {" "}
                {state ? <FaEye /> : <FaEyeSlash />} Show password
              </button>

              <button id="signIn" onClick={() => navigate("/movie-page")}>Create</button>
            </div>
            <div className="last_Section">
              <h1>Have account already?</h1>
              <button id="joinNow" onClick={() => navigate("/signIn")}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default JoinNow;
