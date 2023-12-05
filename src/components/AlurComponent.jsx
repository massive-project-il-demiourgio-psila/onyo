import { Container, Row, Col } from "react-bootstrap";
import icCreate from "../assets/images/ic_createacc.png";
import icDate from "../assets/images/ic_date.png";
import icSearch from "../assets/images/ic_search.png";
import icPayment from "../assets/images/ic_payment.png";

export default function AlurComponent() {
  return (
    <div className="alur">
      <Container>
        <Row
          className="text-center justify-content-center"
          style={{ paddingTop: "100px", paddingBottom: "50px" }}
        >
          <Col lg={8} data-aos="fade-up" data-aos-duration="1500">
            <h1 className="fw-bold">Alur Rental</h1>
            <p>Ikuti langkah-langkah dibawah untuk merental mobil</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="content"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <Row className="justify-content-between">
              <Col md={2} sm={6} className="text-center buat-akun">
                <img src={icCreate} width={"50px"} />
                <h4 className="fw-bold mt-5">Buat Akun</h4>
                <p>
                  Buat akun dan masuk
                  <br />
                  ke dalam sistem
                </p>
              </Col>
              <Col md={2} sm={6} className="text-center pilih-tanggal">
                <img src={icDate} width={"50px"} />
                <h4 className="fw-bold mt-5">Pilih Tanggal</h4>
                <p>
                  Pilih tanggal perentalan
                  <br />
                  dan pengembalian
                </p>
              </Col>
              <Col md={2} sm={6} className="text-center pilih-mobil">
                <img src={icSearch} width={"50px"} />
                <h4 className="fw-bold mt-5">Pilih Mobil</h4>
                <p>Pilih mobil yang sesuai dengan selera dan kebutuhan</p>
              </Col>
              <Col md={2} sm={6} className="text-center pembayarans">
                <img src={icPayment} width={"50px"} />
                <h4 className="fw-bold mt-5">Pembayaran</h4>
                <p>Selesaikan pembayaran untuk membooking mobil yang dipilih</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
