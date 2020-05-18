import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
function Payment(props) {
  console.log("props yang diterima", props);
  var payment = ["DANA", "OVO", "GOPAY", "BCA", "MANDIRI"];
  const [money, setMoney] = useState();

  const handleMoney = (e) => {
    setMoney(e.target.value);
  };
  var picon = [
    "https://cdn.techinasia.com/data/images/8e80279bec7a5f6d0b7097d107426abf.png",
    "https://miro.medium.com/max/512/0*xnW3ZHk2iHaBlTSc",
    "https://lh3.googleusercontent.com/proxy/s-6vWy4eklpBexNAe-aN3yQMg8sc9aEFfJFTnVv7V6elyqpOj4C_dkhwh446Ym52WscyrHkblEr62ty3mEUpQvFY1GxYI1gTTk0UW3P4WgPGCpWLRXAs38b2RnpSHO_G9Dve8env4PkM_TWH-TB-yb2H-m5TnK-xti4I4K4SdJRAuMHUq5Sgj4cdonoM-SrqJUYZVB00BkE07yQWcXs2eDE99g=w1200-h630-p-k-no-nu",
    "https://cdn.iconscout.com/icon/free/png-512/bca-225544.png",
    "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/Mandiri-512.png",
  ];
  return (
    <div>
      <h5 style={{ color: "black" }}>Bayar Hutang ke : {props.name}</h5>
      <h5 style={{ color: "black" }}>Jumlah Hutang: {props.total}</h5>
      <Form style={{ marginTop: "-40px" }}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column md="5">
            Metode
          </Form.Label>

          <select className="form-control" style={{ color: "black" }}>
            {payment.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="5">
            Jumlah
          </Form.Label>

          <Form.Control
            type="number"
            placeholder="Rp. 0"
            min="0"
            onChange={handleMoney}
          />
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="5">
            Komentar
          </Form.Label>

          <textarea className="form-control" placeholder="komentar" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Payment;
