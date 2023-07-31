import { router } from "App";
import Description from "components/description/Description";
import Mobileheader from "components/mobile-components/mobile-header/Mobileheader";
import MobileOtp from "components/loader/mobile-otp/MobileOtp";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "services/auth";
import UtilityButton from "components/buttons/UtilityButton";
import { useSelector } from "react-redux";

export default function ConfirmOtp() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const phoneNumber = urlParams.get("phone");
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);

  const handleMobileHeaderClick = () => {
    router.navigate("/otp");
  };
  const handleConfirmOtp = () => {
    if (otp.length !== 4) {
      toast.error("Please Enter The Full Otp");
      return;
    }
    Auth.confirmOtp(phoneNumber, otp);
  };
  return (
    <>
      <Container className="p-16 mt-20">
        <Mobileheader pageName="Enter Otp" onClick={handleMobileHeaderClick} />
        <Row className="mt-36">
          <Description
            subdescription="We’ll send an SMS to verify your phone"
            marginTop="mt-36"
          />
        </Row>
        <Container className="d-flex justify-content-center mt-80 mb-100">
          <MobileOtp otp={otp} onChange={(e) => setOtp(e)} />
        </Container>
        {/* <LargeButton
          onClick={() => Auth.confirmOtp(phoneNumber, otp)}
          btnName="Continue"
        /> */}
        <Container className="d-grid gap-2 mb-4" id="fixedbutton-">
          <UtilityButton
            btnName="Continue"
            bgColor="#3DB8ED"
            onClick={() => handleConfirmOtp()}
            getUserLoading={getUserLoading}
          />
        </Container>
      </Container>
    </>
  );
}
