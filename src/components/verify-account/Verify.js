import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import auth from "services/auth";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./verify.css";
import { useLocation } from "react-router-dom";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  useEffect(() => {
    auth.approveUser({ id, token });
  }, []);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col className="text-center">
          <p className="thanks-paragraph mb-12 fs-26">Email Verified</p>
          <span className={"thanks-span fs-16 "}>
            Your email has been successfully verified. Thank you!
          </span>
        </Col>
      </Row>
    </Container>
  );
}
