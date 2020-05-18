import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Register.css";
import {
  getDataSignUp,
  postDataSignUp,
} from "../Redux/Actions/RegisterActions";
import { withRouter } from "react-router-dom";

function Register(props) {
  console.log("register", props);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telp, setTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const getData = props.getDataSignUp;

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confPassword) {
      alert("Your input password does not match to confirm password");
    } else {
      var bodyFormData = new FormData();
      bodyFormData.set("telp", telp);
      bodyFormData.set("address", address);
      bodyFormData.set("name", username);
      bodyFormData.set("email", email);
      bodyFormData.set("password", password);
      props.postDataSignUp(bodyFormData);
      props.history.push("/login");
    }
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeTelp = (event) => {
    setTelp(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img
          alt="logo"
          src="https://charity.w3itexperts.com/images/logo.png"
          style={{ marginLeft: "35px" }}
        />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChangeUsername}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChangeEmail}
          required
        />
        <input
          type="textarea"
          name="address"
          value={address}
          placeholder="Address"
          onChange={handleChangeAddress}
          required
        />
        <input
          type="text"
          name="No.Telp"
          value={telp}
          placeholder="No.Telp"
          onChange={handleChangeTelp}
          pattern="[0-9]{12}"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={confPassword}
          placeholder="Confirm Password"
          onChange={handleChangeConfirmPassword}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("mapProps", props);
  return {
    dataAPI: props.getSignUp.data,
  };
};

const mapDispatchProps = (dispacth) => {
  return {
    getDataSignUp: () => dispacth(getDataSignUp()),
    postDataSignUp: (postObj) => dispacth(postDataSignUp(postObj)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(withRouter(Register));
