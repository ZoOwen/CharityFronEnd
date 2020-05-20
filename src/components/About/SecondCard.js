import React from "react";
import { Card } from "react-bootstrap";
import imgPerson1 from "../../assets/img/profil/raif.jpeg";
import imgPerson2 from "../../assets/img/profil/jumadi.jpeg";
import imgPerson3 from "../../assets/img/profil/khairavi.jpeg";
import imgPerson4 from "../../assets/img/profil/rubi.jpeg";
import imgPerson5 from "../../assets/img/profil/zaki.jpeg";

function SecondCard() {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col d-flex justify-content-center my-2">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imgPerson1} alt="" />
              <Card.Body>
                <h4 className="text-center" style={{ color: "#F75D08" }}>
                  Raif Fahmi
                </h4>
                <h6 className="text-center">Full Stack Developer</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex justify-content-center my-2">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imgPerson2} alt="" />
              <Card.Body>
                <h4 className="text-center" style={{ color: "#F75D08" }}>
                  Muhammad Jumadi
                </h4>
                <h6 className="text-center">Full Stack Developer</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex justify-content-center my-2">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imgPerson3} alt="" />
              <Card.Body>
                <h4 className="text-center" style={{ color: "#F75D08" }}>
                  Muhammad Khairavi
                </h4>
                <h6 className="text-center">Backend Developer</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex justify-content-center my-2">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imgPerson4} alt="" />
              <Card.Body>
                <h4 className="text-center" style={{ color: "#F75D08" }}>
                  Rubi Anggoro
                </h4>
                <h6 className="text-center">Frontend Developer</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex justify-content-center my-2">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imgPerson5} alt="" />
              <Card.Body>
                <h4 className="text-center" style={{ color: "#F75D08" }}>
                  Zaki Khairi
                </h4>
                <h6 className="text-center">Frontend Developer</h6>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;
