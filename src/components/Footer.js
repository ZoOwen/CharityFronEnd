/** @format */

import React from "react";
import "../css/Footer.css";
import fb from "../assets/sosmed/facebook.svg";
import tw from "../assets/sosmed/twitter.svg";
import ig from "../assets/sosmed/instagram.svg";
import yt from "../assets/sosmed/youtube.svg";
import pt from "../assets/sosmed/pinterest.svg";
import lk from "../assets/sosmed/linkedin.svg";

function Footer() {
    return (
        <>
            <div
                className=" container-fluid  wrapper hidden footp"
                style={{ background: "#363636" }}
            >
                <div className=" container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <img
                                src="https://charity.w3itexperts.com/images/logo.png"
                                alt="img"
                            />

                            <p className="mt-2 utama">
                            <strong>Charity</strong> merupakan sebuah platform sosial yang mempertemukan Masalah Sosial dengan Pemberi Solusi (Penggerak Sosial, Sponsor maupun Donatur).
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4>Charity</h4>
                            <hr />
                            <p>Tentang charity</p>
                            <p>Aksi galang dana</p>
                            <p>Pendidikan</p>
                            <p>Donasi</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Info kontak</h4>
                            <hr />
                            <p>Phone : 021-123-7890</p>
                            <p>E-mail : info@charity.com</p>
                            <p>Address : Jalan Raya Kemang No.10, Jakarta Selatan, Jakarta-Indonesia</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Sosial media</h4>
                            <hr />
                            <div className="sosmed">
                                <img src={fb} alt="Facebook" />
                                <img src={tw} alt="Twitter" />
                                <img src={ig} alt="Instagram" />
                                <img src={pt} alt="Pinterest" />
                                <img src={lk} alt="Linkedin" />
                                <img src={yt} alt="Youtube" />
                            </div>
                        </div>
                    </div>

                    <br />
                </div>
            </div>
            <div className="container-fluid" style={{ background: "#F75D08" }}>
                <div
                    className=" wrapper"
                    // style={{ background: "#F75D08", marginTop: "-5px" }}
                >
                    &nbsp; &nbsp; &nbsp;
                    <p className="copyright">Reserved CopyRight 2020 Charity</p>
                    &nbsp;
                </div>
            </div>
        </>
    );
}

export default Footer;
