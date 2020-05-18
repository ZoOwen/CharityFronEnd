import React from "react";

function Jumbotron(props) {
  return (
    <div>
      <div className=" bgimage">
        <div className="box">
          <h1 className="titlebanner">
            <strong>{props.header}</strong>
          </h1>
          <h3 style={{ color: "#fff", marginLeft: "20px" }}>
            {props.subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
