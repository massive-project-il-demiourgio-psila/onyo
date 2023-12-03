import { Container, Row, Col } from "react-bootstrap";

export default function IdentityComponent() {
  return (
    <div className="identity animate__animated animate__fadeInUp animate__delay-1s">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Row className="text-center justify-content-around bg-white rounded-4 shadow-sm pb-2">
              <Col xs={3}>
                <div className="mobil">
                  <h2 className="fw-bold">10</h2>
                  <p>Mobil</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="pelanggan">
                  <h2 className="fw-bold">200+</h2>
                  <p>Pelanggan</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="sopir">
                  <h2 className="fw-bold">10</h2>
                  <p>Sopir</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
