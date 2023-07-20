import { LargeButton } from "components/buttons";
import Description from "components/description.js/Description";
import Mobileheader from "components/mobileheader/Mobileheader";
import MobileOtp from "components/mobileotp/MobileOtp";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function ConfirmOtp() {
  return (
    <>
      <Container className="p-16 mt-20">
        <Mobileheader pageName="Enter Otp" />
        <Row className="mt-36">
          <Description
            subdescription="We’ll send an SMS to verify your phone"
            marginTop="mt-36"
          />
        </Row>
        <Container className="d-flex justify-content-center mt-80 mb-100">
          <MobileOtp  />
        </Container>

        <LargeButton label="Continue" />
      </Container>
    </>
  );
}
