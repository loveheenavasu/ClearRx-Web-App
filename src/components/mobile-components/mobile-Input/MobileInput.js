import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./mobileinput.css";
import PropTypes from "prop-types";

export default function MobileInput({ label, setMobileNumber }) {
  const handleChange = (e) => {
    setMobileNumber(Number(e.target.value));
  };

  return (
    <>
      <label
        className="label lightgray fs-18 m-8"
        htmlFor="floatingPasswordCustom"
      >
        {label}
      </label>
      <InputGroup style={{ height: "46px" }} size="lg">
        <InputGroup.Text className="bg-white" id="inputGroup-sizing-lg">
          +91
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          style={{ borderLeft: "none" }}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
      <span className="mobile-number-error">
        Please Enter a Valid Mobile Number
      </span>
    </>
  );
}
MobileInput.propTypes = {
  label: PropTypes.string,
  setMobileNumber: PropTypes.func,
};
