/** @format */

import React from "react";

import { Button } from "react-bootstrap";

function Section1Home() {
  return (
    <div className="container my-5">
      <div className="row">
        <div
          data-aos="zoom-in-up"
          className="col-xs-6 col-lg-6 col-xl-4 pl-0 section-col1"
        >
          <img
            width="100%"
            height="230px"
            className="section-img"
            src="https://charity.w3itexperts.com/images/our-services/pic1.jpg"
            alt="img"
          />
          <div className="row section-caption p-3">
            <div className="col">
              <h4 className="text-dark">
                <strong>Selamat Datang Charity</strong>
              </h4>
              <h6 className="text-white">
                <strong>
                  Melalui Kitabisa, Anda dapat menggalang dana bantuan bagi
                  orang yang membutuhkan
                </strong>
              </h6>
              <p>
                Bagi Anda yang ingin menolong sesama dapat dengan mudah
                mengirimkan bantuan dengan donasi online.
              </p>
              <Button variant="dark" className=" mr-1">
                Tentang Kita
              </Button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-xs-6 col-lg-6 col-xl-8 pl-0 section-col2"
        >
          <img
            width="100%"
            height="230px"
            className="section-img"
            src="https://charity.w3itexperts.com/images/our-work/pic3.jpg"
            alt="img"
          />
          <div className="row section-caption p-3">
            <div className="col">
              <h4 style={{ color: "#F75D08" }}>
                <strong>Informasi Donasi</strong>
              </h4>

              <p>
                Charity merupakan salah satu fundraiser website tepercaya yang
                didirikan sejak tahun 2020. Charity berfokus pada misi
                kemanusiaan dengan menawarkan program galang dana dan donasi
                online. Charity hadir untuk memudahkan Anda melakukan kebaikan
                pada sesama.
              </p>

              <Button
                style={{
                  backgroundColor: "#F75D08",
                  border: "none",
                }}
                className="mt-4"
              >
                Donasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1Home;
