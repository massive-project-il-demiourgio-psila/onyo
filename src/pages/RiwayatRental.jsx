import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col, Table } from "react-bootstrap";
import { riwayatRental } from "../data";
import { Link } from "react-router-dom";

export default function RiwayatRental() {
  return (
    <>
      <NavbarComponent />
      <div className="riwayat-rental">
        <Container>
          <Row>
            <Col>
              <h2 className="fw-bold text-center mb-4">Riwayat Rental</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Sewa</th>
                    <th>Nama Mobil</th>
                    <th>Tanggal Rental</th>
                    <th>Tanggal Pengembalian</th>
                    <th>Biaya Mobil</th>
                    <th>Biaya Driver</th>
                    <th>Total Biaya</th>
                    <th>Status</th>
                    <th>Penilaian</th>
                  </tr>
                </thead>
                <tbody>
                  {riwayatRental.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.kodeSewa}</td>
                        <td>{data.namaMobil}</td>
                        <td>{data.tanggalRental}</td>
                        <td>{data.tanggalPengembalian}</td>
                        <td>{data.biayaMobil}</td>
                        <td>{data.biayaDriver}</td>
                        <td>{data.totalBiaya}</td>
                        <td>{data.status}</td>
                        <td>
                          {" "}
                          {data.penilaian === "5" ? (
                            <div>
                              <i className="fa-solid fa-star text-warning"></i>
                              <i className="fa-solid fa-star text-warning"></i>
                              <i className="fa-solid fa-star text-warning"></i>
                              <i className="fa-solid fa-star text-warning"></i>
                              <i className="fa-solid fa-star text-warning"></i>
                            </div>
                          ) : data.penilaian === "beri-review" ? (
                            <Link to={"/beri-review"}>Beri Review</Link>
                          ) : (
                            <td>{data.penilaian}</td>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
