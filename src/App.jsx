import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import KatalogMobil from "./pages/KatalogMobil";
import Ketentuan from "./pages/Ketentuan";
import Kontak from "./pages/Kontak";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";

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
      </Routes>
    </div>
  );
}

export default App;
