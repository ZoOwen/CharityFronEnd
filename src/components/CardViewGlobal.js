import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import {
  getDataEvent,
  postDataEvent,
  deleteDataEvent,
} from "../Redux/Actions/HistoryActions";

import { Card } from "react-bootstrap";
function CardView(props) {
  console.log("props awal", props);
  const [mainEvent, setMainEvent] = useState("");
  const getData = props.getDataEvent;
  const [histori, setHistori] = useState([]);
  const handleDesc = (Id) => {
    console.log("data yang didapat" + props);

    props.history.push(`/history/${Id}`);
  };

  useEffect(() => {
    Axios.get(`https://gobekenapi.herokuapp.com/histories`).then((response) => {
      setHistori(response.data);
    });
  }, []);

  console.log("data", histori);

  console.log(props);

  return (
    <div className="container-fluid" style={{ marginLeft: "60px" }}>
      <div className="row">
        {histori.map((item, index) => (
          <Card style={{ width: "18rem" }} key={item.Id}>
            <Card.Img
              variant="top"
              src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
            />
            <Card.Body>
              <Card.Title>{item.JudulEvent}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.DeskripsiEvent}
              </Card.Subtitle>

              <Card.Text style={{ color: "#363636" }}>
                Total donasi yang sudah terkumpul adalah {item.TotalDonasi}
              </Card.Text>
              <hr />
            </Card.Body>
          </Card>
        ))}
      </div>
      <br />
    </div>
  );
}

// UNTUK MENGAMBIL STATE DARI STORE

export default withRouter(CardView);
