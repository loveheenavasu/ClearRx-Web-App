import LogoIcon from "assets/svg/LogoIcon";
import Description from "components/description/Description";
import React, { useEffect, useRef, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Auth from "services/auth";
import { validateMobileNumber } from "utils/helper";
import { useSelector } from "react-redux";
import UtilityButton from "components/buttons/UtilityButton";
import PlayButton from "assets/svg/PlayButton";

export default function Otp() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isplayIcon, setPlayIcon] = useState(true);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);
  console.log(getUserLoading, "getUserLoading");

  const handleChange = (e) => {
    const enteredNumber = e.target.value;
    console.log(
      validateMobileNumber(Number(e.target.value)),
      " e.target.value"
    );
    setMobileNumber(enteredNumber);
  };
  const handleSendOtp = () => {
    if (mobileNumber) {
      Auth.sendOtp(mobileNumber);
    } else {
      setIsMobileNumberValid(validateMobileNumber(mobileNumber));
      return;
    }
  };

  const ref = useRef();

  const playVideo = () => {
    ref.current.play();
    setPlayIcon(false);
  };

  return (
    <>
      <Container className=" d-flex justify-content-center align-items-center flex-column  ">
        <LogoIcon width={68} heigth={68} />
        <Container className="mb-12 postition-relative">
          <Description
            description="Welcome to ClearRx "
            subdescription="Lorem ipsum dolor sit amet consectetur. Lobortis habitant viverra "
          />
        </Container>
        <div className="position-relative">
          {/* <div
            style={{
              position: "absolute",
              top: "18%",
              left: "32%",
            }}
            onClick={playVideo}
          >
            {isplayIcon && <PlayButton />}
          </div> */}

          <video ref={ref} autoPlay width="330">
            <source
              src="https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <Container className="mt-12 mb-14 ">
          <label className="label" htmlFor="floatingPasswordCustom">
            Phone Number
          </label>

          <InputGroup style={{ height: "64px" }} size="lg">
            <InputGroup.Text className="bg-white" id="inputGroup-sizing-lg">
              +91
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              style={{ borderLeft: "none" }}
              onChange={(e) => handleChange(e)}
              maxLength={10}
            />
          </InputGroup>
        </Container>
        {!isMobileNumberValid && (
          <span className="mobile-number-error">
            Please Enter a Valid Mobile Number
          </span>
        )}
        <Container>
          <Description
            subdescription="By Registering, you are agreeing to our"
            link=" terms of use. "
          />
        </Container>

        <Container className="mt-30">
          <Container className="d-grid gap-2 mb-4" id="fixedbutton-">
            {/* <LargeButton
              onClick={() => Auth.sendOtp(mobileNumber)}
              btnName="Send Otp"
            /> */}

            <UtilityButton
              btnName="Send Otp"
              onClick={handleSendOtp}
              getUserLoading={getUserLoading}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
