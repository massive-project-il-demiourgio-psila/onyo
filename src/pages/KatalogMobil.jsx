import { Container, Row, Col, Form } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import FilterComponent from "../components/FilterComponent";

export default function KatalogMobil() {
  return (
    <>
      <NavbarComponent />
      <div className="katalog-mobil w-100 min-vh-100">
        <Container>
          <Row>
            <Col lg={3}>
              <FilterComponent />
            </Col>
            <Col lg={9}>
              <div className="metode-rental">
                <h5 className="fw-semibold">Metode Rental</h5>
                <Form>
                  <div className="mb-2">
                    <Form.Check
                      type="radio"
                      inline
                      id={1}
                      label="Lepas Kunci"
                      value="Lepas Kunci"
                    />
                    <Form.Check
                      type="radio"
                      inline
                      id={2}
                      label="Dengan Sopir"
                      value="Dengan Sopir"
                    />
                  </div>
                </Form>
              </div>
              <Row className="mt-4">
                <Col lg={6}>
                  <h5 className="fw-semibold">Tanggal Rental</h5>
                  <div className="d-flex">
                    <Form.Control type="date" className="me-2"></Form.Control>
                    <Form.Control type="time" className="ms-2"></Form.Control>
                  </div>
                </Col>
                <Col lg={6}>
                  <h5 className="fw-semibold">Tanggal Pengembalian</h5>
                  <div className="d-flex">
                    <Form.Control type="date" className="me-2"></Form.Control>
                    <Form.Control type="time" className="ms-2"></Form.Control>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={4}>
                  <div className="mobil">
                    <p>tes</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
