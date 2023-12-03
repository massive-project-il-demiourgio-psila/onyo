import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

export default function KatalogMobil() {
  return (
    <>
      <NavbarComponent />
      <div className="katalog-mobil w-100 min-vh-100">
        <Container>
          <Row>
            <Col>ss</Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
