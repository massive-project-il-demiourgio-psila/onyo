import NavbarAlternate from "../components/NavbarAlternate";
import vector from "../assets/images/vector-sukses.png";
import { useNavigate } from "react-router-dom";

export default function Sukses() {
  let navigate = useNavigate();
  return (
    <>
      <NavbarAlternate />
      <div className="sukses min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <img src={vector} alt="Sukses" />
        <h5 className="fw-bold">
          Selamat! Data transaksi anda telah masuk ke sistem.
        </h5>
        <p>
          Mohon untuk menunggu konfirmasi, kami akan mengecek proses pembayaran
          anda.
        </p>
        <button
          className="btn-detailtransaksi"
          onClick={() => navigate("/riwayat-rental")}
        >
          Detail Transaksi
        </button>
      </div>
    </>
  );
}
