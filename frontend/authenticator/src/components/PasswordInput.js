import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "./PasswordInput.css";

export default function PasswordInput(props) {
  const [showPass, setShowPass] = useState(false);

  return (
    <InputGroup className="Password-input">
      <Form.Control
        {...props}
        type={!showPass ? "password" : "text"}
        className="w-100"
      />
      <div className="show-icon">
        {showPass && <FaEyeSlash onClick={() => setShowPass(false)} />}
        {!showPass && <FaEye onClick={() => setShowPass(true)} />}
      </div>
    </InputGroup>
  );
}
