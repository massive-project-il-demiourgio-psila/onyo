import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import profil1 from "../assets/images/pelanggan1.png";
import { testimoni } from "../data";

export default function TestimoniComponent() {
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
          <Col data-aos="fade-up" data-aos-duration="1700">
            <img src={profil1} className="mb-3" />
            <h4 className="fw-semibold">Muhammad Firly</h4>
            <div className="star mb-5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              “Saya sangat puas dengan layanan website rental mobil ini. Proses
              pemesanan dan pembayaran sangat mudah dan cepat. Mobil yang saya
              sewa juga bersih, nyaman, dan sesuai dengan deskripsi. Pelayanan
              customer service juga ramah dan responsif. Saya merekomendasikan
              website ini bagi siapa saja yang ingin menyewa mobil dengan harga
              terjangkau dan kualitas terjamin.”
            </p>
          </Col>
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
                <SwiperSlide key={data.id} className="shadow-sm rounded-3">
                  <img src={data.image} />
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
