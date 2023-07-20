import React from "react";
import Form from "react-bootstrap/Form";
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function InputField({
  label,
  sublabel,
  width = "100% ",
  labelstar = true,
}) {
  return (
    <>
      <Row className="mb-20">
        <Form.Group
          as={Col}
          md="4"
          style={{ width: width }}
          controlId="validationCustom01"
        >
          <Form.Label className="label mb-1">{label} </Form.Label>
          {sublabel && (
            <Form.Label className="sub-label mb-1">
              &nbsp;{`(${sublabel})`}
            </Form.Label>
          )}
          {labelstar && (
            <Form.Label className="label-star mb-1">&nbsp;* </Form.Label>
          )}
          <Form.Control
            required
            type="text"
            placeholder={label}
            size="lg"
            style={{
              color: "grey",
              fontSize: "14px",
              padding: "13px 20px",
              marginBottom: "20px",
            }}
          />
        </Form.Group>
      </Row>
    </>
  );
}
