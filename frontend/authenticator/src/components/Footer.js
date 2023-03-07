import Nav from "react-bootstrap/Nav";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/privacy/">Privacy</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/terms/">Site terms</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/legal/cookies/">
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
