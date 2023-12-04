import { Link } from "react-router-dom";
import NavbarAlternate from "../components/NavbarAlternate";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DetailPesanan from "../components/DetailPesanan";

export default function DataDiri() {
  let navigate = useNavigate();
  return (
    <>
      <NavbarAlternate />
      <div className="data-diri">
        <Container>
          <Row>
            <Col lg={6}>
              <Form>
                <div className="data-pemesan p-4 shadow-sm bg-white rounded-2 mb-3">
                  <h4 className="fw-bold">Data Pemesanan</h4>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Text className="text-muted">
                          (tanpa gelar dan tanda baca)
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>No Telepon</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Text className="text-muted">
                          Contoh: +628381920523
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />
                        <Form.Text className="text-muted">
                          Contoh: onyo@gmail.com
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <p className="mb-0">
                  Pastikan anda telah membaca dan mengetahui{" "}
                  <strong>syarat</strong> dan <strong>ketentuan</strong> rental
                  mobil!
                </p>
                <Link to={"/ketentuan"}>
                  <h5 className="fw-semibold">Syarat Ketentuan</h5>
                </Link>
                <button
                  className="btn-lanjutkan w-100 rounded-2 mt-3"
                  onClick={() => navigate("/pembayaran")}
                >
                  Lanjutkan
                </button>
              </Form>
            </Col>
            <Col lg={6}>
              <DetailPesanan />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
