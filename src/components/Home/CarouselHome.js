import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Carousel, Button } from "react-bootstrap";

const CarouselHome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item className="section-carousel">
          <img
            className="d-block w-100 img2"
            src="https://charity.w3itexperts.com/images/main-slider/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-right" className="caption-carousel">
            <h2 style={{ color: "#F75D08" }}>
              <strong>Kami Bangkit Dengan Membantu Orang Lain</strong>
            </h2>
            <h1>
              <strong>
                Selamat Datang di{" "}
                <span style={{ color: "#F75D08" }}>Charity</span>
              </strong>
            </h1>
            <p>
              Charity merupakan sebuah platform sosial yang mempertemukan <br />{" "}
              <strong>Masalah Sosial</strong> dengan{" "}
              <strong>Pemberi Solusi</strong> (Penggerak Sosial, Sponsor maupun
              Donatur).
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Selengkapnya
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="section-carousel">
          <img
            className="d-block w-100 img2"
            src="https://charity.w3itexperts.com/images/main-slider/slide2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption-carousel">
            <h2 style={{ color: "#F75D08" }}>
              <strong>Beramal Dimulai di Rumah, dan Keadilan</strong>
            </h2>
            <h1>
              <strong>
                Membuka <span style={{ color: "#F75D08" }}>Harapan Mereka</span>
              </strong>
            </h1>
            <p>
              Dengan dipertemukannya <strong>Masalah Sosial</strong> dengan{" "}
              <strong>Pemberi Solusi</strong>,<br /> diharapkan penyelesaian{" "}
              <strong>Masalah Sosial</strong> (ekonomi, kesehatan, pendidikan
              dsb) <br />
              dapat terjadi lebih efektif dan efisien.
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Selengkapnya
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="section-carousel">
          <img
            className="d-block w-100 img2"
            src="https://charity.w3itexperts.com/images/main-slider/slide3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption-carousel">
            <h2 style={{ color: "#F75D08" }}>
              <strong>Saya Berharap untuk Kebahagiaan</strong>
            </h2>
            <h1>
              <strong>
                Seperti Ini <span style={{ color: "#F75D08" }}>Selamanya</span>
              </strong>
            </h1>
            <p>
              Tujuan utama hidup di dunia ini adalah menolong orang lain. Jika
              tak bisa menolong mereka,
              <br /> setidaknya jangan sakiti mereka.
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Selengkapnya
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
