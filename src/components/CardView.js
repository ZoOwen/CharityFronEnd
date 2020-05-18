import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
  const handleDesc = (Id) => {
    console.log("data yang didapat" + props);

    props.history.push(`/history/${Id}`);
  };
  useEffect(() => {
    getData();
  }, [getData]);
  const handleDelete = (id) => {
    props.deleteDataEvent(id);
  };

  console.log(props);

  return (
    <div>
      <div className="container">
        <div className="row">
          {props.mainEvent.map((item, index) => (
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
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleDelete(item.Id);
                  }}
                >
                  Delete
                </button>

                <button
                  style={{ marginLeft: "100px" }}
                  className="btn btn-success"
                  onClick={() => handleDesc(item.Id)}
                >
                  Detail
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
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
