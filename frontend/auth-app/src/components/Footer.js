import Nav from "react-bootstrap/Nav";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link
            href="https://aws.amazon.com/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://aws.amazon.com/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Site terms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://aws.amazon.com/legal/cookies/"
            target="_blank"
            rel="noreferrer"
          >
            Cookie preferences
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          © 2023, Amazon Web Services, Inc. or its affiliates. All rights
          reserved.
        </Nav.Item>
      </Nav>
    </div>
  );
}
