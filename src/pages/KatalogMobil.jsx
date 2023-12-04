import { Container, Row, Col, Form } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import FilterComponent from "../components/FilterComponent";
import ic_seat from "../assets/images/mobil/ic_seat.png";
import ic_ac from "../assets/images/mobil/ic_ac.png";
import ic_matic from "../assets/images/mobil/ic_matic.png";
import ic_gas from "../assets/images/mobil/ic_gas.png";
import { mobil } from "../data/index.js";
import { Link } from "react-router-dom";

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
                <Col lg={6} className="mb-3">
                  <h5 className="fw-semibold">Tanggal Rental</h5>
                  <div className="d-flex">
                    <Form.Control type="date" className="me-2"></Form.Control>
                    <Form.Control type="time" className="ms-2"></Form.Control>
                  </div>
                </Col>
                <Col lg={6} className="mb-3">
                  <h5 className="fw-semibold">Tanggal Pengembalian</h5>
                  <div className="d-flex">
                    <Form.Control type="date" className="me-2"></Form.Control>
                    <Form.Control type="time" className="ms-2"></Form.Control>
                  </div>
                </Col>
              </Row>
              <Row className="my-4">
                {mobil.map((data) => {
                  return (
                    <Col
                      xl={4}
                      lg={6}
                      md={6}
                      key={data.id}
                      data-aos="zoom-in-up"
                      data-aos-duration="800"
                    >
                      <Link to="/data-diri" className="text-decoration-none">
                        <div className="shadow-sm border-0 p-3 mobil mb-4">
                          <h5 className="fw-bold">{data.nama}</h5>
                          <img
                            src={data.images}
                            alt={data.nama}
                            height={"100%"}
                            className="gambar-mobil"
                          />
                          <p className="mt-2 mb-0 fw-semibold">{data.harga}</p>
                          <div className="rating d-flex align-items-center">
                            <i className={data.star1}></i>
                            <i className={data.star2}></i>
                            <i className={data.star3}></i>
                            <i className={data.star4}></i>
                            <i className={data.star5}></i>
                            <p className="testimoni">
                              {data.testimoni} Testimoni
                            </p>
                          </div>
                          <Row className="mt-3 text-center spek">
                            <Col>
                              <img src={ic_seat} alt={ic_seat} />
                              <p className="mt-2 mb-0">{data.kursi} Kursi</p>
                            </Col>
                            <Col>
                              <img src={ic_ac} alt={ic_ac} />
                              <p className="mt-2 mb-0">{data.ac}</p>
                            </Col>
                            <Col>
                              <img src={ic_matic} alt={ic_matic} />
                              <p className="mt-2 mb-0">{data.transmisi}</p>
                            </Col>
                            <Col>
                              <img src={ic_gas} alt={ic_gas} />
                              <p className="mt-2 mb-0">{data.bahanbakar}</p>
                            </Col>
                          </Row>
                        </div>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
