import { Container, Row, Col } from "react-bootstrap";
import { kenapa } from "../data";

export default function KenapaComponent() {
  return (
    <div className="kenapa">
      <Container>
        <Row
          className="text-center justify-content-center"
          style={{ paddingTop: "200px", paddingBottom: "50px" }}
        >
          <Col lg={8} data-aos="fade-up" data-aos-duration="1500">
            <h1 className="fw-bold">Kenapa Pilih ONYO?</h1>
            <p>
              ONYO menyediakan layanan rental mobil yang tidak hanya aman dan
              nyaman, tetapi juga penuh dengan pilihan kendaraan modern, ONYO
              menjadi solusi terbaik untuk setiap perjalanan Anda.
            </p>
          </Col>
        </Row>
        <Row>
          {kenapa.map((data) => {
            return (
              <Col
                lg={4}
                md={6}
                key={data.id}
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <div
                  className="card p-4 shadow-sm mb-3 rounded-5"
                  style={{ height: "350px" }}
                >
                  <img src={data.image} width="60px" />
                  <h3 className="fw-bold my-4">{data.title}</h3>
                  <p className="lh-lg">{data.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
