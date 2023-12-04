import { Navbar } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="shadow-sm sticky-top bg-white">
      <div className="d-flex justify-content-center align-items-center text-center mx-auto">
        <Link to="/">
          <img src={Logo} alt="ONYO" width={"50px"} />
        </Link>
        <p className="mb-0 ms-3">| Kualitas adalah prioritas utama</p>
      </div>
    </Navbar>
  );
}
