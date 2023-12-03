import { Card, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import logo1 from "../assets/images/logo2.svg";
import logo2 from "../assets/images/logo3.svg";
import logo3 from "../assets/images/logo4.svg";
import imgCar from "../assets/images/mobil.svg";

const CardLogo = () => {
  const containerStyle = {
    background:
      "linear-gradient(50deg, rgba(59, 60, 152, 1) 100%, rgba(59, 60, 152, 0.5) 100%)",
    border: "none",
  };

  return (
    <Card style={containerStyle} className="px-5">
      <Card.Body className="d-flex flex-column  justify-content-center">
        <Card.Title
          className="text-start mb-4 text-white fw-bold"
          style={{ fontSize: "26px" }}
        >
          Kualitas adalah prioritas utama
          <br />
          ONYO
        </Card.Title>
        <Card.Text className="text-start mb-5 text-white">
          Kami memberikan pilihan mobil terbaik dengan harga ekonomis untuk
          pengalaman pelanggan terbaik
        </Card.Text>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="text-center" xs={4}>
            <img
              src={logo}
              alt="Top Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="text-center" xs={4}>
            <img
              src={logo1}
              alt="Left Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </Col>
          <Col xs={4}>
            <Card.Img
              src={imgCar}
              alt="Car"
              style={{ width: "120px", height: "120px" }}
            />
          </Col>
          <Col className="text-center" xs={4}>
            <img
              src={logo2}
              alt="Right Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="text-center" xs={4}>
            <img
              src={logo3}
              alt="Bottom Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardLogo;
