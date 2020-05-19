import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/Footer";
import SecondCard from "../components/About/SecondCard";
import ParallaxContent from "../components/About/ParallaxContent";
import contentImage from "../assets/img/content-img.jpg";

const About = () => {
  return (
    <div>
      <div className="first-banner">
        <div className="container">
          <div className="content-banner">
            <h1>Tentang Kami</h1>
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>Tentang Kami</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="OurStory">
        <h2>
          Cerita
          <span>Kami</span>
        </h2>
        <p className="about-description">Penggalangan dana dan pinjaman dana</p>
      </div>
      <div className="middle-content">
        <div className="container ml-5 mr-5 p-0">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 m-b30">
              <img className="content-img" alt="" src={contentImage} />
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 m-b30">
              <div className="right-content">
                <h3 className="charity-title">Apa itu Charity ?</h3>
                <p className="paragraph-right">
                  Charity adalah situs crowdfunding. kami memberikan bantuan
                  kepada orang yang membutuhkan bantuan dana, baik itu untuk
                  bantuan sosial maupun pinjaman dana untuk perusahaan
                </p>
                <h3 className="charity-title">Apa itu crowdfunding?</h3>
                <p className="paragraph-right">
                  Crowdfunding adalah kegiatan mengumpulkan dana yang melibatkan
                  banyak orang untuk mewujudkan satu tujuan
                </p>
                <button className="readmore">Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxContent />
      <div className="last-content">
        <h2>
          Team
          <span>Kami</span>
        </h2>
        <SecondCard />
      </div>

      <Footer />
    </div>
  );
};

export default About;
