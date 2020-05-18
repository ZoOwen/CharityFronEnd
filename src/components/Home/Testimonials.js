import React from "react";
// "https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
const Testimonials = () => {
  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col text-center ">
            <h2>
              <strong className="text-dark">
                Donatur <span style={{ color: "#F75D08" }}>Testimoni</span>
              </strong>
            </h2>
            <p className="text-dark text-center">
              Adanya keterbukaan mengenai total dana yang didapat, target yang
              dibutuhkan membuat donatur akan dengan mudah percaya untuk
              memberikan bantuan ke sana. Hal tersebut dikarenakan sudah
              mengetahui jejak rekam Charity mengenai aksi para penggalang dana
              yang sudah benar-benar menyerahkan uang yang terkumpul kepada
              penerimanya.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div data-aos="zoom-in-up" className="row">
          <div className="col mt-3">
            <img
              width="250px"
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="col mt-3">
            <h4 className="text-dark">
              <strong>Faisal Adrus</strong>
            </h4>
            <h6 style={{ color: "#F75D08" }}>Volunteer</h6>
            <p className="text-dark">
              "Bagus dalam memberikan support, fleksible memberikan opsi
              layanan, proses cepat, dan informasi sangat terbuka. Semoga
              kedepan semakin baik pelayanannya."
            </p>
          </div>
          <div className="col mt-3">
            <img
              width="250px"
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="col mt-3">
            <h4 className="text-dark">
              <strong>Jonathan Adrus</strong>
            </h4>
            <h6 style={{ color: "#F75D08" }}>Volunteer</h6>
            <p className="text-dark">
              "Saya salut dengan tim pelayanan Charity, walaupun mereka bukan
              bagian dari permasalahan tentang website, mereka tetap membantu
              mengatasi masalah yg kami alami.."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
