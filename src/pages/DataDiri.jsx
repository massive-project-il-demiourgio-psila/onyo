import { Link } from "react-router-dom";
import NavbarAlternate from "../components/NavbarAlternate";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DetailPesanan from "../components/DetailPesanan";
import { useDispatch, useSelector } from "react-redux";
import { useAddBookingMutation } from "../services/booking";
import { addDataDiri, addPayment } from "../slices/booking.slice";
import { useState } from "react";

export default function DataDiri() {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  let [dataDiri, setDataDiri] = useState({ name: "", phone: "", email: "" });

  let bookingData = useSelector((state) => state.bookings.booking);

  let [postBooking, { isLoading }] = useAddBookingMutation();

  const handleOnClick = async () => {
    dispatch(
      addDataDiri({
        onBehalfOfUser: true,
        onBehalfOfName: dataDiri.name,
        onBehalfOfEmail: dataDiri.email,
        onBehalfOfPhone: dataDiri.phone,
      })
    );

    console.log("Dispatched", bookingData);

    const {
      data: { bookingId },
    } = await postBooking(bookingData);

    dispatch(addPayment({ bookingId }));

    navigate("/pembayaran");
  };

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
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control
                          type="text"
                          value={dataDiri.name}
                          onChange={(e) =>
                            setDataDiri({
                              ...dataDiri,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                        <Form.Text className="text-muted">
                          (tanpa gelar dan tanda baca)
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>No Telepon</Form.Label>
                        <Form.Control
                          type="text"
                          value={dataDiri.phone}
                          onChange={(e) =>
                            setDataDiri({
                              ...dataDiri,
                              phone: e.target.value,
                            })
                          }
                          required
                        />
                        <Form.Text className="text-muted">
                          Contoh: +628381920523
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={dataDiri.email}
                          onChange={(e) =>
                            setDataDiri({
                              ...dataDiri,
                              email: e.target.value,
                            })
                          }
                          required
                        />
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
                  onClick={handleOnClick}
                  disabled={isLoading}
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
