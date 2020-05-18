import React from "react";
import { Card } from "react-bootstrap";
import cardImg1 from "../../assets/img/below-content.jpg";
import cardImg2 from "../../assets/img/below-content2.jpg";
import cardImg3 from "../../assets/img/below-content3.jpg";
import cardImg4 from "../../assets/img/below-content4.jpg";

function FirstCard() {
  return (
    <div>
      <div className="card-content">
        <div className="row">
          <Card style={{ width: "17rem" }}>
            <Card.Header>
              <Card.Title>Scholarship</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={cardImg1} />
            <Card.Body>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing's.
              </Card.Text>
              <button className="readmore">Read More</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "17rem" }}>
            <Card.Header>
              <Card.Title>Helping Hand</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={cardImg2} />
            <Card.Body>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing's.
              </Card.Text>
              <button className="readmore">Read More</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "17rem" }}>
            <Card.Header>
              <Card.Title>Helping Homeless</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={cardImg3} />
            <Card.Body>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing's.
              </Card.Text>
              <button className="readmore">Read More</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "17rem" }}>
            <Card.Header>
              <Card.Title>Family Resources Center</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={cardImg4} />
            <Card.Body>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing's.
              </Card.Text>
              <button className="readmore">Read More</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
