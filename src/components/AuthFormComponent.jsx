import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthCard from "./AuthCardComponent";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const AuthForm = ({ type }) => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex " style={{ marginLeft: "-2rem" }}>
          <AuthCard />
        </Col>
        <Col>
          <Card style={{ border: "none", padding: "40px" }}>
            <Card.Body>
              <h2 className="text-center mb-2 fw-bold">
                {type === "login" ? "Selamat Datang" : "Daftar Akun ONYO"}
              </h2>
              <p className="text-center mb-4" style={{ color: "gray" }}>
                {type === "login"
                  ? "Masuk ke akun ONYO kamu."
                  : "Buat akun untuk memulai rental mobil."}
              </p>
              <Form onSubmit={handleSubmit}>
                {type === "login" && (
                  <>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-2 fw-semibold">
                        Alamat Email
                      </Form.Label>
                      <Form.Control type="email" className="mb-3" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="mb-2 fw-semibold">
                        Kata Sandi
                      </Form.Label>
                      <Form.Control type="password" className="mb-4" required />
                    </Form.Group>
                  </>
                )}

                {type === "register" && (
                  <>
                    <Form.Group controlId="NamaLengkap" className="mb-3">
                      <Form.Label className="fw-semibold mb-2">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label className="mb-2 fw-semibold">
                        Alamat Email
                      </Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label className="mb-2 fw-semibold">
                        No Telepon
                      </Form.Label>
                      <Form.Control type="number" required />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                          <Form.Label className="mb-2 fw-semibold">
                            Kata Sandi
                          </Form.Label>
                          <Form.Control type="password" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          controlId="formBasicPasswordConfirmation"
                          className="mb-3"
                        >
                          <Form.Label className="fw-semibold">
                            Konfirmasi Kata Sandi
                          </Form.Label>
                          <Form.Control type="password" required />
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}

                <div className="d-grid gap-2 mb-2">
                  <Button
                    type="submit"
                    block
                    style={{ backgroundColor: "#3B3C98", color: "white" }}
                    onClick={() => navigate("/")}
                  >
                    {type === "login" ? "Masuk" : "Daftar"}
                  </Button>
                </div>

                <p className="text-center">
                  {type === "login" ? (
                    <>
                      Belum punya akun?{" "}
                      <Link
                        to="/daftar"
                        style={{
                          color: "#3B3C98",
                          textDecoration: "underline",
                        }}
                      >
                        Daftar
                      </Link>
                    </>
                  ) : (
                    <>
                      Sudah punya akun?{" "}
                      <Link
                        to="/masuk"
                        style={{
                          color: "#3B3C98",
                          textDecoration: "underline",
                        }}
                      >
                        Masuk
                      </Link>
                    </>
                  )}
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
