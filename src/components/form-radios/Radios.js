import React from "react";
import "./radios.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

export default function Radios({ label }) {
  return (
    <>
      <Row>
        <Col>
          <Form.Check
            type="radio"
            label={label}
            name="formHorizontalRadios"
            className="formRadios"
          />
        </Col>
      </Row>
    </>
  );
}
Radios.propTypes = {
  label: PropTypes.string.isRequired,
};
