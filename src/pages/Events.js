/** @format */

import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
import Axios from "axios";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import { Button, Modal, Form } from "react-bootstrap";

import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataEvent } from "../Redux/Actions/HistoryActions";

const Events = () => {
    var querystring = require("querystring");
    const [singleEvent, setSingleEvent] = useState([]);
    const eventState = useSelector((state) => state.getEvent.data);
    const dispatch = useDispatch();

    const [donasi, setDonasi] = useState(0);
    const [metode, setMetode] = useState();
    const [show, setShow] = useState(false);
    const [countDonasi, setCountDonasi] = useState([]);
    const handleShow = () => setShow(true);

    //getdata user
    //getdata from localstorage dan get user
    const isLogged = useSelector((state) => state.user);
    console.log("Logged", isLogged);

    let decode = jwt(localStorage.getItem("token"));
    let id = decode.id;
    let token = localStorage.getItem("token");
    console.log(token);
    console.log("hasil decode", decode);
    console.log("hasil ID decode", id);
    const [dataUser, setDataUser] = useState([]);
    var api = `https://backend-go-charity.herokuapp.com/users/${id}`;

    useEffect(() => {
        Axios.get(api, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            setDataUser(response.data);
        });
    }, []);
    console.log("data user yang di get", dataUser.Name);

    const handleShowEvent = (id) => {
        Axios.get(`https://gobekenapi.herokuapp.com/events/${id}`).then(
            (response) => {
                setSingleEvent(response.data);
            }
        );
        console.log("data id yang dikirim", id);

        setShow(true);
    };
    console.log("data dari id single", eventState.Id_User);
    console.log("data dari id single event", singleEvent);

    //get data total dana
    const handleDonasi = (item) => {
        Axios.get(`https://gobekenapi.herokuapp.com/event/${item}`).then(
            (response) => {
                setCountDonasi(response.data);
            }
        );

        const danatotal = countDonasi;
        const totaldonasi = danatotal.reduce(
            (total, dana) => total + dana.Dana,
            0
        );
        console.log("data donasi", countDonasi);
        console.log("total dana", totaldonasi);
    };
    const handlePost = (e) => {
        e.preventDefault();
        const id_event = singleEvent.Id;
        const donatur = dataUser.Name;
        const dana_donasi = donasi;
        const metode_donasi = metode;
        const date = Date.now();

        const success = Axios.post(
            `https://gobekenapi.herokuapp.com/donasi`,
            querystring.stringify({
                id_event,
                donatur,
                dana_donasi,
                metode_donasi,
                date,
            })
        ).then((response) => {
            console.log(response.data);
        });

        {
            success
                ? swal("Terimakasih", "Donasi Berhasil!", "success")
                : swal("Donasi Gagal", "Harap melakukan Donasi ulang", "error");
        }
        setShow(false);
    };
    console.log("data singleEvent", eventState.ID);
    console.log("data id ", id);
    const handleClose = () => setShow(false);

    const handleChangeDonasi = (e) => {
        setDonasi(e.target.value);
    };

    const handleChangeMetode = (e) => {
        setMetode(e.target.value);
    };

    useEffect(() => {
        dispatch(getDataEvent());
        Aos.init({ duration: 2000 });
    }, [dispatch]);
    console.log("METODE", metode);
    return (
        <div>
            <div className="countainer-fluid">
                <Jumbotron
                    header="Acara"
                    subtitle="Acara Galang dana yang tersedia"
                />
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col text-center ">
                        <h2>
                            <strong className="text-dark">
                                Galang{" "}
                                <span style={{ color: "#F75D08" }}>Dana</span>
                            </strong>
                        </h2>
                        <p className="text-dark text-center">
                            Bagi Anda yang ingin menolong sesama dapat dengan
                            mudah mengirimkan bantuan dengan donasi online.
                            Selain program donasi online, Charity pun telah
                            menjalin kerja sama untuk menyalurkan zakat bagi
                            orang-orang yang berhak menerima.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row box-e">
                    {eventState.map((item) => {
                        console.log(item);
                        return (
                            <div className="col-md-6 border cart-event my-2">
                                <div className="row">
                                    <div className="col-md-6 pl-0">
                                        <Image
                                            src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
                                            fluid
                                        />
                                    </div>
                                    <div className="col-md-6 py-2">
                                        <p className="judul my-0">
                                            <strong>{item.JudulEvent}</strong>
                                        </p>
                                        <p className="text-dark my-0 date">
                                            Berakhir : {item.Expire}
                                        </p>
                                        <p className="text-dark">
                                            {item.DeskripsiEvent}
                                        </p>
                                        <ProgressBar
                                            style={{ height: "5px" }}
                                            variant="danger"
                                            now={100}
                                        />
                                        <div className="eventp">
                                            <p className="text-dark">
                                                Rp.{item.TotalDonasi}
                                            </p>
                                            <p className="text-dark">
                                                3 Donatur
                                            </p>
                                        </div>
                                        {id == item.Id_user ? (
                                            <Button
                                                onClick={() => {
                                                    handleShowEvent(item.Id);
                                                }}
                                                style={{
                                                    backgroundColor: "#F75D08",
                                                    border: "none",
                                                }}
                                                className="btn-sm"
                                                disabled
                                            >
                                                Donasi
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => {
                                                    handleShowEvent(item.Id);
                                                }}
                                                style={{
                                                    backgroundColor: "#F75D08",
                                                    border: "none",
                                                }}
                                                className="btn-sm"
                                            >
                                                Donasi
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="my-0">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Donasi Berapa:</Form.Label>
                            <Form.Control
                                type="number"
                                name="donasi"
                                value={donasi}
                                placeholder="IDR."
                                onChange={handleChangeDonasi}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Metode Pembayaran:</Form.Label>
                            <select
                                name="metode"
                                className="form-control"
                                value={metode}
                                onChange={handleChangeMetode}
                                as="select"
                            >
                                <option value="BCA">BCA</option>
                                <option value="BRI">BRI</option>
                                <option value="Mandiri">Mandiri</option>
                                <option value="Gopay">Gopay</option>
                                <option value="OVO">OVO</option>
                            </select>
                        </Form.Group>
                        <Button
                            type="submit"
                            onClick={handlePost}
                            style={{
                                backgroundColor: "#F75D08",
                                border: "none",
                            }}
                            className="my-5"
                        >
                            Donate Now
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Events;
