import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function EditProfile() {
  return (
    <>
      <NavbarComponent />
      <div className="edit-profile">
        <Container>
          <Row>
            <Col>
              <div className="card shadow-sm p-5 rounded-4">
                <Row>
                  <Col md={6}>
                    <h4 className="fw-bold mb-4">Informasi Profil</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukkan nama"
                          value={"Adrian Adhari"}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Masukkan email"
                          value={"user@gmail.com"}
                        />
                      </Form.Group>
                      <button className="btn-simpan" type="submit">
                        Simpan Profil
                      </button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <h4 className="fw-bold mb-4">Ubah Password</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Password Saat Ini</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password Baru</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Konfirmasi Password Baru</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <button className="btn-simpan" type="submit">
                        Simpan Password
                      </button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
