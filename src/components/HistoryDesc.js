import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../css/Desc.css";
import Jumbotron from "./Jumbotron";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Payment from "./Payment.js";

function HistoryDesc(props) {
  var querystring = require("querystring");
  const [events, setEvents] = useState([]);
  const [detEvents, setDetEvents] = useState([]);
  const [handleData, setHandleData] = useState({});
  const [singleDetEvent, setSingleDetEvent] = useState([]);
  const param = props.match.params.id;
  useEffect(() => {
    axios
      .get(`https://gobekenapi.herokuapp.com/events/${param}`)
      .then((result) => {
        setEvents(result.data);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`https://gobekenapi.herokuapp.com/detail/${param}`)
  //     .then((result) => {
  //       setSingleDetEvent(result.data);
  //     });
  // }, []);

  const fetchApi = useEffect(() => {
    axios
      .get(`https://gobekenapi.herokuapp.com/event/${param}`)
      .then((result) => {
        setDetEvents(result.data);
      });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    axios
      .get(`https://gobekenapi.herokuapp.com/detail/${index}`)
      .then((result) => {
        setSingleDetEvent(result.data);
      });

    console.log("ini index dari payback", singleDetEvent);

    setShow(true);
  };
  console.log("ini index dari payback", singleDetEvent);

  console.log("props yang diterima", props);
  var payment = ["DANA", "OVO", "GOPAY", "BCA", "MANDIRI"];
  const [money, setMoney] = useState();

  const handleMoney = (e) => {
    setMoney(e.target.value);
  };

  const handleBayar = (item) => {
    // console.log(singleDetEvent);
    console.log("item", item);
    const status = "Lunas";
    axios
      .put(
        `https://gobekenapi.herokuapp.com/detail/${item}`,
        querystring.stringify({ status })
      )
      .then((response) => {
        console.log(response.data);
      });

    setShow(false);
  };
  console.log(handleData.Id);

  //filter untuk mendapatkan berdasarkan id_event
  // var getSingleData = detEvents.filter(function (eventdet) {
  //   return eventdet.id_event == param;
  // });

  console.log("det Events", detEvents);
  //filter untuk mendapatkan 1 data

  // console.log("single det Events", singleDetEvent);
  return (
    <div>
      <Jumbotron header="History Detail" />
      <br />
      <div className="container">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>No Events </td>
              <td> : </td>
              <td> {events.Id}</td>
            </tr>

            <tr>
              <td>Nama Events</td>
              <td> : </td>
              <td> {events.JudulEvent}</td>
            </tr>

            {/* <tr>
              <td>Events Type</td>
              <td> : </td>
              <td> {events.even_type}</td>
            </tr> */}

            <tr>
              <td>Total Donasi</td>
              <td> : </td>
              <td> {events.TotalDonasi}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="container">
        <br />
        <hr />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>No</td>
              <td>Donatur Name</td>
              <td>total Donate</td>
              <td>date</td>
              <td>Metode</td>
              {/* <td>Status</td> */}
              <td>Action</td>
            </tr>
          </thead>

          {detEvents.map((item, index) => (
            <tbody key={index}>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Donatur}</td>
                <td>{item.Dana}</td>
                <td>{item.Metode}</td>
                <td>{item.Tgl}</td>
                {/* <td>{item.sts.toString()}</td> */}
                <td>
                  {singleDetEvent.Status === "Lunas" ? (
                    <button
                      className="btn btn-primary"
                      key={index}
                      variant="primary"
                      onClick={() => {
                        handleShow(item.Id);
                      }}
                      disabled
                    >
                      PayBack
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      key={index}
                      variant="primary"
                      onClick={() => {
                        handleShow(item.Id);
                      }}
                    >
                      PayBack
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "black", marginLeft: "80px" }}>
            Bayar Hutang ke : {singleDetEvent.Donatur}
          </h5>
          <h5 style={{ color: "black", marginLeft: "80px" }}>
            Jumlah Hutang: {singleDetEvent.Dana}
          </h5>
          <Form style={{ marginTop: "-40px" }}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md="5">
                Metode
              </Form.Label>

              <select className="form-control" style={{ color: "black" }}>
                {payment.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column md="5">
                Jumlah
              </Form.Label>

              <Form.Control
                type="number"
                placeholder={singleDetEvent.Dana}
                value={singleDetEvent.Dana}
                min="0"
                onChange={handleMoney}
                value={handleData.Dana}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column md="5">
                Komentar
              </Form.Label>

              <textarea className="form-control" placeholder="komentar" />
            </Form.Group>
            <Button
              type="submit"
              onClick={() => {
                handleBayar(singleDetEvent.Id);
              }}
              style={{
                backgroundColor: "#F75D08",
                border: "none",
              }}
            >
              Bayar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default withRouter(HistoryDesc);
