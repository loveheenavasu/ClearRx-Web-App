import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./thankyou.css";
import Mobileheader from "components/mobile-components/mobile-header/Mobileheader";
import { router } from "App";
export default function Thanks({ pfont, sfont }) {
  return (
    <>
      <div className="m-20">
        <Mobileheader onClick={() => router.navigate("/otp")} />
      </div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <div className="d-flex align-items-center flex-column text-center">
            <div>
              <img width="144px" src="/images/checked.png" alt="" />
            </div>
            <p className={`thanks-paragraph mb-12 ${pfont} `}>Thank You</p>
            <span className={`thanks-span ${sfont}`}>
              You will get a SMS on account status.
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}
