import NavbarAlternate from "../components/NavbarAlternate";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DetailPesanan from "../components/DetailPesanan";

export default function Pembayaran() {
  let navigate = useNavigate();
  return (
    <>
      <NavbarAlternate />
      <div className="pembayaran">
        <Container>
          <Row>
            <Col lg={6}>
              <Form>
                <div className="data-pembayaran p-4 shadow-sm bg-white rounded-2 mb-3">
                  <h4 className="fw-bold">
                    Transfer ke BCA 231192318 - ABU JAHAL
                  </h4>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Nomor Rekening / Kartu Debit Anda
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Rekening / Kartu Debit Anda</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Row>
                  <hr />
                  <div className="detail-harga">
                    <p className="fw-semibold">Rincian Harga</p>
                    <table>
                      <tr>
                        <td>Toyota Avanza</td>
                        <td>Rp 250.000</td>
                      </tr>
                      <tr>
                        <td>Biaya Layanan</td>
                        <td>Rp 1000</td>
                      </tr>
                      <hr />
                      <tr>
                        <td className="fw-semibold pe-5">Total Harga</td>
                        <td>Rp 251.000</td>
                      </tr>
                    </table>
                  </div>
                  <p className="mt-3 fw-semibold">Upload Bukti Pembayaran</p>
                  <div className="mb-3">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
                <button
                  className="btn-kirim w-100 rounded-2 mt-3"
                  onClick={() => navigate("/sukses")}
                >
                  Kirim
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
