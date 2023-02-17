import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import logoImg from "../assets/img/logo/logo.png";
import blackLogoImg from "../assets/img/logo/logo-black.svg";
import "./Navbar.css";

export default function Navbar({ variant = "light" }) {
  const location = useLocation();

  return (
    <BootstrapNavbar className="Navbar">
      <LinkContainer to="#">
        <BootstrapNavbar.Brand>
          <img src={variant === "light" ? logoImg : blackLogoImg} />
        </BootstrapNavbar.Brand>
      </LinkContainer>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse className="justify-content-end">
        <Nav className="Nav" activeKey={window.location.pathname}>
          {location.pathname.includes("login") && (
            <LinkContainer to="/register" className="Nav-register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          )}
          {location.pathname.includes("register") && (
            <LinkContainer to="/login" className="Nav-login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}
