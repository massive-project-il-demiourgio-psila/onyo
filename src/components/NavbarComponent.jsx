import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { navLinks } from "../data";

export default function NavbarComponent() {
  let navigate = useNavigate();

  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 0) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} width={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  end
                  key={link.id}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={{ margin: "0px 20px" }}
                >
                  {link.text}
                </NavLink>
              );
            })}
          </Nav>
          <div className="text-center auth">
            <button className="btn-masuk" onClick={() => navigate("/masuk")}>
              Masuk
            </button>
            <button className="btn-daftar" onClick={() => navigate("/daftar")}>
              Daftar
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
