import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./Loading.css";

export const Loading = () => {
  return (
    <Container className="Loading">
      <Spinner animation="border" variant="secondary" />
    </Container>
  );
};

export default Loading;
