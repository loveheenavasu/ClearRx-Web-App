import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
// import UploadCertificate from "components/upload/UploadCertificate";
import InputField from "components/Inputfield/InputField";
import Headingtab from "components/WebComponet/headingtab/Headingtab";
import DesktopButton from "components/buttons/DestopButton";
import MobileOtp from "components/mobileotp/MobileOtp";
import TopHeadingIcon from "components/WebComponet/TopHeadingIcon";

export default function WebConfirmOtp() {
  return (
    <>
      <Container className="container-fluid m-0" style={{ maxWidth: "100%" }}>
        <Row>
          <Col
            style={{
              background: "#FAFAFA",
              backgroundImage: `url(/images/confirm-otp-bg.png)`,
              backgroundRepeat: "no-repeat",
              height: "100vh",
              backgroundColor: "#fafafa",
            }}
          ></Col>
          <Col style={{ width: "100%", padding: "0px 60px" }}>
            <TopHeadingIcon />

            <Headingtab heading="OTP Confirm" />
            <p className="mt-15" stye>
              We'll send an SMS to verify your Phone
            </p>
            <Col style={{ marginTop: "118px " }}>
              <MobileOtp />
            </Col>
            <Col style={{ marginTop: "118px " }}>
              <DesktopButton btnName="Continue" />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
