import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCardComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext";

export default function Masuk() {
  let navigate = useNavigate();

  const { login } = useAuth();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const dummyUserData = { email: "user@gmail.com", password: "12345678" };

    if (
      loginData.email === dummyUserData.email &&
      loginData.password === dummyUserData.password
    ) {
      login();
      navigate("/");
    } else {
      return <p>salah</p>;
    }
  };
  return (
    <div className="auth-page">
      <Container className="custom-shadow animate__animated animate__fadeInUp">
        <Row>
          <Col className="d-flex " style={{ marginLeft: "-2rem" }}>
            <AuthCard />
          </Col>
          <Col>
            <Card style={{ border: "none", padding: "40px" }}>
              <Card.Body>
                <h2 className="text-center mb-2 fw-bold">Selamat Datang</h2>
                <p className="text-center mb-4" style={{ color: "gray" }}>
                  Masuk ke akun ONYO kamu.
                </p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="mb-2 fw-semibold">
                      Alamat Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="mb-3"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="mb-2 fw-semibold">
                      Kata Sandi
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="mb-4"
                      value={loginData.password}
                      required
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mb-2">
                    <Button
                      style={{ backgroundColor: "#3B3C98", color: "white" }}
                      onClick={handleLogin}
                    >
                      Masuk
                    </Button>
                  </div>

                  <p className="text-center">
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
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
