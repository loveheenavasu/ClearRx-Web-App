import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";
import Auth from "services/auth";
import { validateMobileNumber } from "utils/helper";
import LogoIcon from "assets/svg/LogoIcon";
import UtilityButton from "components/buttons/UtilityButton";
import { useSelector } from "react-redux";

export default function WebOtp() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);
  console.log(getUserLoading, "getUserLoading");

  const handleChange = (e) => {
    const enteredNumber = e.target.value;
    setMobileNumber(enteredNumber);
  };
  const handleSendOtp = () => {
    if (validateMobileNumber(mobileNumber)) {
      Auth.sendOtp(mobileNumber);
    } else {
      setIsMobileNumberValid(validateMobileNumber(mobileNumber));
      return;
    }
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
        <div className="otp">
          <div className="d-flex align-items-center">
            <LogoIcon width="56px" height="53px" />
            <span
              style={{
                color: "#0669CD",
                fontSize: "28px",
                fontWeight: 800,
                fontFamily: "EB Garamond",
              }}
            >
              Clear Rx
            </span>
          </div>
          <div>
            <h3 className="fs-32 mt-20">Welcome to ClearRx</h3>
            <p style={{ maxWidth: "334px", color: "#7877A0" }}>
              Lorem ipsum dolor sit amet consectetur. Lobortis habitant viverra
            </p>
            <Container className=" mb-14 mt-85 ">
              <label
                className="label fs-18 lightgray"
                htmlFor="floatingPasswordCustom"
              >
                Phone Number
              </label>

              <InputGroup
                style={{ height: "56px", marginBottom: "6px" }}
                size="lg"
              >
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
              <span style={{ fontSize: "16px", color: "#CACACA" }}>
                By Registering, you are agreeing to our
                <a href="/"> terms of use.</a>
              </span>
              {!isMobileNumberValid && (
                <span className="mobile-number-error">
                  Please Enter a Valid Mobile Number
                </span>
              )}
              <Row style={{ marginTop: "118px " }}>
                <UtilityButton
                  btnName="Send OTP "
                  width="45rem"
                  onClick={() => handleSendOtp()}
                  getUserLoading={getUserLoading}
                />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
}
