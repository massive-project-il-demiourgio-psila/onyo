import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="py-5">
      <Container>
        <Row className="justify-content-between">
          <Col md={5} className="info">
            <img src={Logo} />
            <p>
              Onyo, partner anda dalam mobilitas, menyediakan layanan rental
              mobil yang tidak hanya aman dan nyaman, tetapi juga penuh dengan
              pilihan kendaraan modern, ONYO menjadi solusi terbaik untuk setiap
              perjalanan Anda.
            </p>
            <p className="mb-0">
              <strong>&copy; ONYO.</strong> {new Date().getFullYear()} All Right
              Reserved
            </p>
          </Col>
          <Col md={2} className="d-flex flex-column menu" style={{ gap: 10 }}>
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Beranda</Link>
            <Link to="/katalog-mobil">Katalog Mobil</Link>
            <Link to="/ketentuan">Ketentuan</Link>
            <Link to="/kontak">Kontak</Link>
          </Col>
          <Col md={4} className="alamat">
            <h5 className="fw-bold">Kontak</h5>
            <p>Jalan Bengawan No.23, Banyuwangi Jawa Timur, Indonesia </p>
            <p>(62) 812-234-312</p>
            <p>onyo@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
