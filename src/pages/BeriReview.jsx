import { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function BeriReview() {
  const [rating, setRating] = useState(0);
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <>
      <NavbarComponent />
      <div className="beri-review">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-4 gradient">
                Berikan
                <br />
                Penilaian dan Review
              </h1>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col md={8}>
              <div className="star">
                {[1, 2, 3, 4, 5].map((index) => (
                  <i
                    key={index}
                    className={
                      index <= rating
                        ? "fa-solid fa-star fa-xl"
                        : "fa-regular fa-star fa-xl"
                    }
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>
              <div className="my-5">
                <Form.Control
                  as="textarea"
                  rows={13}
                  placeholder="Isi review berupa kesan dan pesan anda setelah memakai jasa rental ONYO..."
                  className="shadow-sm border-0 p-3"
                />
                <button className="btn-kirim w-100 mt-4">Kirim</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
