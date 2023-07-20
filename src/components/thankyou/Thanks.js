import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./index.css";
export default function Thanks({ pfont, sfont }) {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col className="text-center">
            <p className={`thanks-paragraph mb-12 ${pfont} `}>Thank You</p>
            <span className={`thanks-span ${sfont}`}>
              You will get a SMS on account status.
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
