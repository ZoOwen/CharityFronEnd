import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/Footer";
import FirstCard from "../components/About/FirstCard";
import SecondCard from "../components/About/SecondCard";
import ParallaxContent from "../components/About/ParallaxContent";
import contentImage from "../assets/img/content-img.jpg";

const About = () => {
  return (
    <div>
      <div className="first-banner">
        <div className="container">
          <div className="content-banner">
            <h1>About us</h1>
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="OurStory">
        <h2>
          Our
          <span>Story</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard dummy text ever since.
        </p>
      </div>
      <div className="middle-content">
        <div className="container ml-5 mr-5">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 m-b30">
              <img className="content-img" alt="" src={contentImage} />
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 m-b30">
              <div className="right-content">
                <p className="paragraph-right">
                  Charity Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
                <h3>Charity Our Work</h3>
                <p className="paragraph-right">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s .
                </p>
                <button className="readmore">Read More</button>
              </div>
            </div>
          </div>
          <FirstCard />
        </div>
      </div>
      <ParallaxContent />
      <div className="last-content">
        <h2>
          Meet Your
          <span>Team</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard dummy text ever since.
        </p>
        <SecondCard />
      </div>

      <Footer />
    </div>
  );
};

export default About;
