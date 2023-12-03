import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

export default function Ketentuan() {
  return (
    <>
      <NavbarComponent />
      <div className="ketentuan min-vh-100">
        <Container>
          <Row>
            <Col lg={6} className="animate__animated animate__bounceInLeft">
              <div className="card p-4 border-0 shadow-sm mb-5">
                <h2 className="text-center fw-bold mb-5 title">
                  Syarat Sewa Mobil Lepas Kunci
                </h2>
                <div className="requirements mb-3">
                  <h5 className="fw-semibold">Dokumen yang diperlukan:</h5>
                  <ol>
                    <li>
                      Memiliki kartu tanda pengenal (KTP) yang resmi dan masih
                      berlaku. KTP akan disimpan pihak rental selama masa
                      penyewaan.
                    </li>
                    <li>
                      Menyertakan Surat Izin Mengemudi (SIM) yang sesuai dengan
                      mobil yang disewa dan masih berlaku
                    </li>
                    <li>
                      Mohon diketahui bahwa saat pengambilan mobil, traveler
                      pada Detail Traveler harus menunjukkan KTP/paspor, SIM A,
                      dan kartu kredit asli milik pribadi atau keluarga (foto
                      kartu keluarga atau surat nikah Anda harus dibagikan
                      kepada tempat rental sebelum pengambilan mobil untuk
                      memverifikasi kartu kredit keluarga)
                    </li>
                  </ol>
                </div>
                <div className="benefit d-flex justify-content-between mb-3">
                  <div className="termasuk">
                    <h5 className="fw-semibold">Termasuk</h5>
                    <ul>
                      <li>Asuransi untuk mobil dan penumpang</li>
                    </ul>
                  </div>
                  <div className="tidak-termasuk">
                    <h5 className="fw-semibold">Tidak Termasuk</h5>
                    <ul>
                      <li>
                        Bensin, Pengambilan/Pengembalian di Luar Kota dan Klaim
                        Asuransi
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="catatan">
                  <h5 className="fw-semibold">Catatan</h5>
                  <ul>
                    <li>
                      Akun media sosial dan foto diri dengan KTP diperlukan
                      untuk rental dengan supplier rental. Supplier akan
                      memerlukan bentuk verifikasi lainnya Jika akun media
                      sosial tidak tersedia. Mohon diketahui bahwa supplier akan
                      menghubungi penyewa untuk meminta informasi tersebut.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="animate__animated animate__bounceInRight">
              <div className="card p-4 border-0 shadow-sm mb-5">
                <h2 className="text-center fw-bold mb-5 title">
                  Syarat Sewa Mobil Dengan Sopir
                </h2>
                <div className="requirements mb-3">
                  <h5 className="fw-semibold">Dokumen yang diperlukan:</h5>
                  <ol>
                    <li>
                      Memiliki kartu tanda pengenal (KTP) yang resmi dan masih
                      berlaku. KTP akan disimpan pihak rental selama masa
                      penyewaan.
                    </li>
                    <li>
                      Menyertakan Surat Izin Mengemudi (SIM) yang sesuai dengan
                      mobil yang disewa dan masih berlaku
                    </li>
                    <li>
                      Mohon diketahui bahwa saat pengambilan mobil, traveler
                      pada Detail Traveler harus menunjukkan KTP/paspor, SIM A,
                      dan kartu kredit asli milik pribadi atau keluarga (foto
                      kartu keluarga atau surat nikah Anda harus dibagikan
                      kepada tempat rental sebelum pengambilan mobil untuk
                      memverifikasi kartu kredit keluarga)
                    </li>
                  </ol>
                </div>
                <div className="benefit d-flex justify-content-between mb-3">
                  <div className="termasukr">
                    <h5 className="fw-semibold">Termasuk</h5>
                    <ul>
                      <li>Penggunaan dalam kota</li>
                      <li>
                        Penggunaan sampai dengan 12 jam hingga 23:59 di setiap
                        hari rental
                      </li>
                      <li>Penggunaan dalam kota</li>
                      <li>Bensin</li>
                    </ul>
                  </div>
                  <div className="tidak-termasuk">
                    <h5 className="fw-semibold">Tidak Termasuk</h5>
                    <ul>
                      <li>Parkir, tol, uang makan sopir dan tips</li>
                      <li>
                        Biaya akomodasi sopir selama berpergerian keluar kota
                      </li>
                      <li>Penggunaan di luar kota (biaya tambahan berlaku)</li>
                    </ul>
                  </div>
                </div>
                <div className="penjemputan mb-3">
                  <h5 className="fw-semibold">Lokasi Penjemputan</h5>
                  <ul>
                    <li>
                      Gratis penjemputan dan pengantaran di area bandara dan
                      dalam kota
                    </li>
                  </ul>
                </div>
                <div className="catatan">
                  <h5 className="fw-semibold">Catatan</h5>
                  <ul>
                    <li>
                      Sopir akan menghubungi Anda 12 jam sebelum waktu jemput.
                      Bila Anda memsan rental mobil kurang dari 12 jam sebelum
                      waktu jemput, sopir akan menghubungi Anda segera setelah
                      pesanan dikonfirmasi.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}
