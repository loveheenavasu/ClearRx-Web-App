import React from "react";
import Form from "react-bootstrap/Form";
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UplaodIcon from "assets/svg/UploadIcon";

export default function UploadCertificate({ label }) {
  return (
    <>
      <Row className=" upload-certificate-parent mb-20 ">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className="label mb-1">{label}</Form.Label>
          <Row className="upload-certificate mx-1">
            <UplaodIcon />
            <p
              className="text-center fs-9"
              style={{ color: "#3DB8ED", marginTop: "12px" }}
            >
              Select a file or take a photo
            </p>
            <p className="text-center fs-11">
              JPG, PNG or PDF, file size no more than 10MB
            </p>
          </Row>
        </Form.Group>
      </Row>
    </>
  );
}
