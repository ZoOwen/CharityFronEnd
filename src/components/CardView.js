/** @format */

import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import jwt from "jwt-decode";
import {
  getDataEvent,
  postDataEvent,
  deleteDataEvent,
} from "../Redux/Actions/HistoryActions";
import ProgressBar from "react-bootstrap/ProgressBar";

import { Card } from "react-bootstrap";
function CardView(props) {
  const isLogged = useSelector((state) => state.user);
  var decode;
  var id;

  if (localStorage.getItem("token") != null) {
    decode = jwt(localStorage.getItem("token"));
    id = decode.id;
  } else {
    console.log("cek gk login");
  }

  console.log("id loh", id);

  console.log("props awal", props);
  const [mainEvent, setMainEvent] = useState("");
  const getData = props.getDataEvent;
  const handleDesc = (Id) => {
    props.history.push(`/history/${Id}`);
  };
  useEffect(() => {
    getData();
  }, [getData]);
  const handleDelete = (id) => {
    props.deleteDataEvent(id);
  };

  const dataEvent = props.mainEvent;
  var filterEvent = dataEvent.filter(function (event) {
    return event.Id_user == id;
  });

  console.log("id decode", id);
  console.log("hasil filter event", filterEvent);
  console.log("id event", dataEvent.Id_user);

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {filterEvent.map((item, index) => (
          <div className="col-md-4 col-sm-12 my-2" key={index}>
            <div
              className="card  rounded-lg border-0 cardhistory"
              key={item.Id}
            >
              <img src={item.Img} className="card-img-top" alt="..." />

              <div className="card-body">
                <div className="card-title">
                  <h4 className="text-dark my-0">{item.JudulEvent}</h4>
                  <p className="text-muted my-0 date">Berakhir {item.Expire}</p>
                </div>
                <p className="text-dark">{item.DeskripsiEvent}</p>
                <ProgressBar
                  style={{ height: "5px" }}
                  variant="danger"
                  now={100}
                />
                <p className="text-dark my-0">Total donasi</p>
                <div className="eventp">
                  <p className="text-dark">Rp.{item.TotalDonasi}</p>
                  <p className="text-dark">Target Rp.{item.TargetDonasi}</p>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item.Id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    style={{ marginLeft: "100px" }}
                    className="btn btn-info"
                    onClick={() => handleDesc(item.Id)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

// UNTUK MENGAMBIL STATE DARI STORE
const mapStateToProps = (props) => {
  console.log("state to props", props);
  return {
    mainEvent: props.getEvent.data,
  };
};

// UNTUK MERUBAH STATE DARI COMPONENT KE STORE
// const mapDispatchToProps = { getDataDigimon, postDataDigimon };
const mapDispatchToProps = (dispatch) => {
  return {
    getDataEvent: () => dispatch(getDataEvent()),
    postDataEvent: (objEvent) => dispatch(postDataEvent(objEvent)),
    deleteDataEvent: (id) => dispatch(deleteDataEvent(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CardView));
