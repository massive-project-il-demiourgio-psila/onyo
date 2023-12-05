import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import KatalogMobil from "./pages/KatalogMobil";
import Ketentuan from "./pages/Ketentuan";
import Kontak from "./pages/Kontak";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import DataDiri from "./pages/DataDiri";
import Pembayaran from "./pages/Pembayaran";
import Sukses from "./pages/Sukses";
import RiwayatRental from "./pages/RiwayatRental";
import BeriReview from "./pages/BeriReview";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Beranda} />
        <Route path="/katalog-mobil" Component={KatalogMobil} />
        <Route path="/ketentuan" Component={Ketentuan} />
        <Route path="/kontak" Component={Kontak} />
        <Route path="/masuk" Component={Masuk} />
        <Route path="/daftar" Component={Daftar} />
        <Route path="/data-diri" Component={DataDiri} />
        <Route path="/pembayaran" Component={Pembayaran} />
        <Route path="/sukses" Component={Sukses} />
        <Route path="/riwayat-rental" Component={RiwayatRental} />
        <Route path="/beri-review" Component={BeriReview} />
        <Route path="/edit-profil" Component={EditProfile} />
      </Routes>
    </div>
  );
}

export default App;
