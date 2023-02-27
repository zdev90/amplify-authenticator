import Nav from "react-bootstrap/Nav";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/legal/cookies/">
            Cookie Preferences
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/privacy/">
            Privacy Policy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/terms/">Site Terms</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/service-terms/">
            Terms & Conditions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://aws.amazon.com/codeofconduct/">
            Code of Conduct
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="Copyright">
        © 2023, Amazon re:Inforce or its affiliates. All rights reserved
      </div>
    </div>
  );
}
