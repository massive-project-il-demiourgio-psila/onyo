import { Container, Row, Col, Form } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import vector from "../assets/images/vector-kontak.png";

export default function Kontak() {
  return (
    <>
      <NavbarComponent />
      <div className="kontak w-100 min-vh-100">
        <Container>
          <Row>
            <Col lg={7} className="my-auto animate__animated animate__fadeInUp">
              <img src={vector} />
            </Col>
            <Col className="my-auto animate__animated animate__fadeInUp" lg={5}>
              <div className="title mb-5">
                <h1 className="fw-bold">Kontak Kami</h1>
                <p>
                  Hubungi kami untuk memberikan komentar atau mengajukan
                  pertanyaan tentang fitur website atau perusahaan kami
                </p>
              </div>
              <div className="form-kontak">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Nama Lengkap"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="No. HP" required />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Pesan..."
                      required
                    />
                  </Form.Group>
                  <button className="btn-kirim w-100" type="submit">
                    Kirim
                  </button>
                </Form>
                <p className="text-center my-3">atau</p>
                <button className="btn-wa w-100">
                  <i className="fa-brands fa-whatsapp me-2 text-white"></i>
                  Hubungi Melalui WhatsApp
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
