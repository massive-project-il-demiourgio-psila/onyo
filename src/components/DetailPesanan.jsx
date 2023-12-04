import { Link } from "react-router-dom";

export default function DetailPesanan() {
  return (
    <>
      <div className="detail-pesanan p-4 bg-white shadow-sm rounded-2">
        <h5 className="fw-bold">Rental Mobil Dengan Sopir</h5>
        <div className="mobil mb-3">
          <p className="fw-semibold">Toyota Avanza</p>
          <p>Manual</p>
        </div>
        <div className="kota mb-3">
          <p className="fw-semibold">Kota Wilayah Rental</p>
          <p>Banyuwangi</p>
        </div>
        <div className="tanggal-mulai mb-3">
          <p className="fw-semibold">Tanggal & Waktu Mulai</p>
          <p>Sabtu, 18 November 2023</p>
        </div>
        <div className="tanggal-selesai mb-3">
          <p className="fw-semibold">Tanggal & Waktu Mulai</p>
          <p>Senin, 20 November 2023</p>
        </div>
        <div className="lokasi-selesai mb-3">
          <p className="fw-semibold">Lokasi Selesai</p>
          <p>Kantor Rental</p>
        </div>
        <div className="lokasi-jemput mb-3">
          <p className="fw-semibold">Lokasi Jemput</p>
          <p>Kantor Rental</p>
        </div>
      </div>
      <div className="batal text-center mt-4">
        <Link to={"/katalog-mobil"} className="text-secondary">
          <h6>Batalkan</h6>
        </Link>
      </div>
    </>
  );
}
