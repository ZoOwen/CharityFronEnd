import React from "react";
import logo1 from "../../assets/logo/house.png";
import logo2 from "../../assets/logo/chart.png";
import logo3 from "../../assets/logo/donation.png";
import logo4 from "../../assets/logo/helping.png";

function Section2Home() {
  return (
    <div>
      <div className="bg-img my-5">
        <div className="container content-section2 col-sm-12">
          <div className="row text-center pt-5">
            {/* <div className="col">
              <img width="50px" src={logo1} alt="logo" />
              <h2>
                <strong style={{ color: "#F75D08" }}>1897</strong>
              </h2>
              <p className="text-center">Home Resigning</p>
            </div> */}
            <div className="col justify-content-center">
              <img width="50px" src={logo2} alt="logo" />
              <h2>
                <strong style={{ color: "#F75D08" }}>4897</strong>
              </h2>
              <p className="text-center">Charity Grafik</p>
            </div>
            <div className="col justify-content-center">
              <img width="50px" src={logo3} alt="logo" />
              <h2>
                <strong style={{ color: "#F75D08" }}>5897</strong>
              </h2>
              <p className="text-center">Donasi</p>
            </div>
            <div className="col justify-content-center">
              <img width="50px" src={logo4} alt="logo" />
              <h2>
                <strong style={{ color: "#F75D08" }}>58397</strong>
              </h2>
              <p className="text-center">Bantuan Tangan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2Home;
