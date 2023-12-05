/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../assets/images/hero.png";
import IdentityComponent from "../components/IdentityComponent";
import KenapaComponent from "../components/KenapaComponent";
import AlurComponent from "../components/AlurComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Beranda() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="beranda">
      <NavbarComponent isLoggedIn={isLoggedIn} />
      <header className="w-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col lg={6}>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Spesialis Rental Mobil
              </h4>
              <h1 className="fw-bold my-4 animate__animated animate__fadeInUp animate__delay-1s">
                Kualitas Mobil <span>Terbaik</span> Hanya di ONYO
              </h1>
              <p className="fw-semibold mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Kami memberikan pilihan mobil terbaik dengan
                <br /> harga ekonomis untuk pengalaman pelanggan terbaik
              </p>
              <button
                className="btn-pesan animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/katalog-mobil")}
              >
                Pesan Sekarang
              </button>
            </Col>
            <Col lg={6}>
              <img
                src={Hero}
                width={"100%"}
                className="animate__animated animate__fadeInUp animate__delay-1s"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <IdentityComponent />
      <KenapaComponent />
      <AlurComponent />
      <TestimoniComponent />
      <FooterComponent />
    </div>
  );
}

export default Beranda;
