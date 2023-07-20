import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./index.css";
export default function MobileInput() {
  return (
    <>
      <label className="label lightgray fs-18" htmlFor="floatingPasswordCustom">
        Phone Number
      </label>
      <InputGroup style={{ height: "56px" }} size="md">
        <InputGroup.Text className="bg-white" id="inputGroup-sizing-lg">
          +91
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          style={{ borderLeft: "none" }}
        />
      </InputGroup>
      <span className="mobile-number-error">Mobile Number Already exist*</span>
    </>
  );
}
