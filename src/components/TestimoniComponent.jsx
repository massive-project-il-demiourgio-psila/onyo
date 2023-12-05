import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimoni } from "../data";
import { useState } from "react";

export default function TestimoniComponent() {
  const [selectedTestimoni, setSelectedTestimoni] = useState(testimoni[0]);
  const handleTestimoniClick = (testimoni) => {
    setSelectedTestimoni(testimoni);
    setSelectedTestimoniId(testimoni.id);
  };
  const [selectedTestimoniId, setSelectedTestimoniId] = useState(
    testimoni[0].id
  );

  return (
    <div className="testimoni">
      <Container>
        <Row
          className="text-center justify-content-center"
          style={{ paddingTop: "100px", paddingBottom: "50px" }}
        >
          <Col lg={8} data-aos="fade-up" data-aos-duration="1500">
            <h1 className="fw-bold">Apa Kata Pelanggan?</h1>
          </Col>
        </Row>
        <Row className="text-center pb-5">
          {selectedTestimoni ? (
            <Col data-aos="fade-up" data-aos-duration="1700">
              <img src={selectedTestimoni.image} className="mb-3" />
              {console.log(selectedTestimoni)}
              <h4 className="fw-semibold">{selectedTestimoni.nama}</h4>
              <div className="star mb-5">
                <i className={selectedTestimoni.star1}></i>
                <i className={selectedTestimoni.star2}></i>
                <i className={selectedTestimoni.star3}></i>
                <i className={selectedTestimoni.star4}></i>
                <i className={selectedTestimoni.star5}></i>
              </div>
              <p>{selectedTestimoni.isi}</p>
            </Col>
          ) : null}
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimoni.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className={`rounded-3 ${
                    selectedTestimoniId === data.id ? "active" : ""
                  }`}
                  onClick={() => handleTestimoniClick(data)}
                >
                  <img src={data.image} width={"53px"} />
                  <div className="d-flex flex-column text-start ps-3">
                    <p className="nama mb-0">{data.nama}</p>
                    <p className="profesi mb-0">{data.profesi}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
}
