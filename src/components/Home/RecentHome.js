import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

const RecentHome = () => {
  const [recent] = useState([
    {
      ID: 1,
      title: "Membantu Sesama Anak Yatim",
      date: "25-Mei-2020 ",
      time: "waktu 14.00 - Selesai",
      place: "Panti Asuhan Baitus Sam'ma",
      description:
        "Berdirinya Yayasan Panti Asuhan Baitus Sama’ merupakan wujud pertanggung jawaban untuk menanggung anak-anak yatim dan dhuafa agar menjadi indan yang mulia",
      img: "https://charity.w3itexperts.com/images/blog/thum3.jpg",
    },
    {
      ID: 2,
      title: "Yuk Membantu Sesama",
      date: "30-Mei-2020 ",
      time: "waktu 10.00 - Selesai",
      place: "Lembaga Penyantun Anak (LPA) Guna Nanda",
      description:
        "LPA Guna Nanda berdiri kokoh dan menjadi tempat yang nyaman bagi anak-anak untuk tumbuh menggapai cita-citanya.",
      img: "https://charity.w3itexperts.com/images/blog/thum4.jpg",
    },
    {
      ID: 3,
      title: "Butuh Bantuan Anda!",
      date: "02-Juni-2020 ",
      time: "waktu 11.00 - Selesai",
      place: "Panti Asuhan yatim dan dhu'afa Al-Amanah Nusantara",
      description:
        "Berdirinya panti asuhan yatim dan dhu'afa Al-Amanah Nusantara berawal dari permasalahan sosial di kota karena banyak anak terlantar. ",
      img: "https://charity.w3itexperts.com/images/blog/thum1.jpg",
    },
  ]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="text-dark">
              <strong>
                Informasi <span style={{ color: "#F75D08" }}>Baru</span>
              </strong>
            </h4>
            <p className="text-dark">
              Bagi Anda yang ingin menolong sesama dapat dengan mudah
              mengirimkan bantuan dengan donasi online. Selain program donasi
              online, Charity pun telah menjalin kerja sama untuk menyalurkan
              zakat bagi orang-orang yang berhak menerima.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row ">
          {recent.map((item) => {
            return (
              <div
                data-aos="fade-up"
                className="col d-flex justify-content-center"
                key={item.ID}
              >
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>

                    <p style={{ color: "#F75D08" }}>Tanggal : {item.date}</p>
                    <p className="pt-0" style={{ color: "#F75D08" }}>
                      {item.time}
                    </p>
                    <hr />
                    <p className="pt-0" style={{ color: "#F75D08" }}>
                      <strong>{item.place}</strong>
                    </p>
                    <Card.Text className="text-dark pt-0">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentHome;
