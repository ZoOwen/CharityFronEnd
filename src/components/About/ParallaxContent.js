import React from "react";
import { Parallax } from "react-parallax";
import imgLogo1 from "../../assets/logo/house.png";
import imgLogo2 from "../../assets/logo/chart.png";
import imgLogo3 from "../../assets/logo/donation.png";
import imgLogo4 from "../../assets/logo/helping.png";

function ParallaxContent() {
  return (
    <div>
      <div className="parallax-content section-full">
        <Parallax
          bgImage={require("../../assets/img/image-footer.jpg")}
          strength={250}
        >
          <div style={{ height: "300px" }}>
            <div className="parallax-front-image">
              <div className="row">
                <div className="col col-md-3 col-sm-6 col-xs-12 col-parallax">
                  <img className="small-icon" src={imgLogo1} alt="" />
                  <h2>
                    <strong>1897</strong>
                  </h2>
                  <p className="text-center pt-0">Home Resigning</p>
                </div>

                <div className="col justify-content-center col-md-3 col-sm-6 col-xs-12 col-parallax">
                  <img className="small-icon" src={imgLogo2} alt="" />
                  <h2>
                    <strong>4897</strong>
                  </h2>
                  <p className="text-center pt-0">Charity Chart</p>
                </div>
                <div className="col justify-content-center col-md-3 col-sm-6 col-xs-12 col-parallax">
                  <img className="small-icon" src={imgLogo3} alt="" />
                  <h2>
                    <strong>5897</strong>
                  </h2>
                  <p className="text-center pt-0">Donation</p>
                </div>
                <div className="col justify-content-center col-md-3 col-sm-6 col-xs-12 col-parallax">
                  <img className="small-icon" src={imgLogo4} alt="" />
                  <h2>
                    <strong>58397</strong>
                  </h2>
                  <p className="text-center pt-0">Helping Hand</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default ParallaxContent;
