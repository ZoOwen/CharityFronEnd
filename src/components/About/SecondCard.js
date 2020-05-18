import React from "react";
import { Card } from "react-bootstrap";
import imgPerson1 from "../../assets/img/firstperson.jpg";
import imgPerson2 from "../../assets/img/secondperson.jpg";
import imgPerson3 from "../../assets/img/firstperson2.jpg";
import imgPerson4 from "../../assets/img/secondperson2.jpg";

function SecondCard() {
  return (
    <div>
      <div className="last-card-content">
        <div className="row">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={imgPerson1} alt="" />
            <Card.Body>
              <h4 className="text-center">Jannatul Ferdous</h4>
              <h6 className="text-center">Senior Volunteer</h6>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={imgPerson2} alt="" />
            <Card.Body>
              <h4 className="text-center">Zubayer Hasan</h4>
              <h6 className="text-center">Head of Volunteer</h6>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={imgPerson3} alt="" />
            <Card.Body>
              <h4 className="text-center">Jannatul Ferdous</h4>
              <h6 className="text-center">CEO</h6>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={imgPerson4} alt="" />
            <Card.Body>
              <h4 className="text-center">Zubayer Hasan</h4>
              <h6 className="text-center">Event Manager</h6>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;
