import React, { useEffect, useState } from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";

import CardView from "../components/CardView";

function Profile() {
  const [dataUser, setDataUser] = useState({
    items: [],
    isLoaded: false,
    redirectToReferrer: false,
    token: "",
  });

  let user = localStorage.getItem("token");
  // console.log("token user", user);

  var decoded = jwt_decode(user);
  // console.log(decoded);
  var decoded_id = decoded.id;

  useEffect(() => {
    axios
      .get(`https://backend-go-charity.herokuapp.com/users/${decoded_id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((res) => {
        console.log(res.data);
        setDataUser({
          items: res.data,
          isLoaded: true,
          redirectToReferrer: false,
        });
      });
  }, []);

  console.log(dataUser.items);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center border cart-event py-5">
            <img
              className="img-profile "
              width="150px"
              alt="img"
              src="https://www.kindpng.com/picc/b/451/4517876.png"
            />
            <h3>
              <strong>Personal Profile</strong>
            </h3>
            <table style={{ marginLeft: "490px" }}>
              <tr>
                <td>Username </td>
                <td> : </td>
                <td>{dataUser.items.Name}</td>
              </tr>
              <tr>
                <td>Email </td>
                <td> : </td>
                <td>{dataUser.items.Email}</td>
              </tr>
              <tr>
                <td>Address </td>
                <td> : </td>
                <td>{dataUser.items.Address}</td>
              </tr>
              <tr>
                <td>No telp. </td>
                <td> : </td>
                <td>{dataUser.items.Telp}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="col text-center ">
        <h2>
          <br />
          <strong className="text-dark">
            Acara <span style={{ color: "#F75D08" }}>Saya</span>
            <br />
          </strong>
        </h2>
      </div>
      <CardView />
    </div>
  );
}

export default Profile;
