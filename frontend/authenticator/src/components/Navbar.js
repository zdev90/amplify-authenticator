import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import logoImg from "../assets/img/logo/logo.png";
import blackLogoImg from "../assets/img/logo/logo-black.svg";
import AWS_logo_RGB from "../assets/img/logo/AWS_logo_RGB.svg";
import AWS_logo_RGB_REV from "../assets/img/logo/AWS_logo_RGB_REV.svg";
import "./Navbar.css";

export default function Navbar({ variant = "light" }) {
  const location = useLocation();

  return (
    <BootstrapNavbar className="Navbar">
      <BootstrapNavbar.Brand>
        <img
          src={variant === "light" ? AWS_logo_RGB_REV : AWS_logo_RGB}
          height="36"
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse className="justify-content-end">
        <Nav className="Nav" activeKey={window.location.pathname}>
          {/* {location.pathname.includes("login") && (
            <LinkContainer to="/register" className="Nav-register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          )} */}
          {location.pathname.includes("register") && (
            <LinkContainer
              to={`/login${window.location.search}`}
              className="Nav-login"
            >
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}
