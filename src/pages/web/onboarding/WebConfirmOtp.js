import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopHeadingIcon from "components/WebComponet/TopHeadingIcon";
import Headingtab from "components/WebComponet/headingtab/Headingtab";
import MobileOtp from "components/loader/mobile-otp/MobileOtp";
import Auth from "services/auth";
import { Row } from "react-bootstrap";

import UtilityButton from "components/buttons/UtilityButton";
import { router } from "App";
import { useSelector } from "react-redux";
export default function WebConfirmOtp() {
  const [otp, setOtp] = useState("");
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const phoneNumber = urlParams.get("phone");
  const handleOtpChange = (e) => {
    setOtp(e);
  };
  return (
    <Container
      className="container-fluid d-flex m-0 "
      style={{ maxWidth: "100%", height: "100vh", padding: "0px" }}
    >
      <div
        className="Register1"
        style={{
          background: "#FAFAFA",
          backgroundImage: `url(/images/confirm-otp-bg.png)`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundColor: "#fafafa",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="Register2">
        <TopHeadingIcon onClick={() => router.navigate("/login")} />
        <div className="otp-form">
          <Headingtab heading="Enter OTP" />
          <p className="mt-15" style={{ color: "#7877A0" }}>
            We'll send an SMS to verify your Phone
          </p>
          <Col style={{ marginTop: "118px " }}>
            <MobileOtp otp={otp} onChange={(e) => handleOtpChange(e)} />
          </Col>
          {/* <Col > */}
          <Row style={{ marginTop: "118px " }}>
            <UtilityButton
              btnName="Continue"
              width="471px"
              onClick={() => Auth.confirmOtp(phoneNumber, otp)}
              getUserLoading={getUserLoading}
            />
          </Row>
          {/* </Col> */}
        </div>
      </div>
    </Container>
  );
}
