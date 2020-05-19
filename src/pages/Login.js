/** @format */

import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../css/Login.scss";
import { useDispatch } from "react-redux";
import { postSignIn } from "../Redux/Actions/LoginActions";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });
  const handleChange = (field, value) => {
    setUserSignIn((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    dispatch(postSignIn(userSignIn, history, event));
  };

  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="custom-form"
          style={{ marginBottom: "200px", marginTop: "100px" }}
        >
          <img
            alt="logo"
            src="https://charity.w3itexperts.com/images/logo.png"
            style={{ marginLeft: "35px" }}
          />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userSignIn.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
            />
            <label htmlFor="email" className="animated-label">
              Username
            </label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={userSignIn.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
            />
            <label htmlFor="password" className="animated-label">
              Password
            </label>
          </div>
          <div className="submit">
            <div className="row">
              <div className="col-md-6">
                <button
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  className="btn btn-primary btn-block"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="col-md-6">
                <button
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  className="btn btn-primary btn-block"
                  onClick={handleClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
