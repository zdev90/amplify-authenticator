import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import "./Loading.css";

export const Loading = () => {
  useEffect(() => {
    document.body.classList.add("loading");

    return () => {
      document.body.classList.remove("loading");
    };
  }, []);

  // const hideShortBread = `
  // #awsccc-sb-ux-c: {
  //   visibility: hidden !important
  // }
  // `;

  return (
    <Container className="Loading">
      <Spinner animation="border" variant="secondary" />
      {/* <style>{hideShortBread}</style> */}
    </Container>
  );
};

export default Loading;
