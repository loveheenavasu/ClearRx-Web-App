import LogoIcon from "assets/svg/LogoIcon";
import InputField from "components/Inputfield/InputField";
import VideoOpt from "components/Video.js/Video";
import { LargeButton } from "components/buttons";
import Description from "components/description.js/Description";
import React from "react";
import { InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function Otp() {
  return (
    <>
      <Container className="otp d-flex justify-content-center align-items-center flex-column ">
        <LogoIcon width={68} heigth={68} />
        <Container className="mb-12">
          <Description
            description="Welcome to ClearRx "
            link="Register"
            subdescription="Lorem ipsum dolor sit amet consectetur. Lobortis habitant viverra "
          />
        </Container>
        <VideoOpt />
        <Container className="mt-12 mb-14 ">
          {/* <InputField label="Phone Number" /> */}
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
            />
          </InputGroup>
        </Container>
        <Container>
          <Description
            subdescription="By Registering, you are agreeing to our"
            link=" terms of use. "
          />
        </Container>
        <Container className="mt-30">
          <LargeButton label="Send Otp" />
        </Container>
      </Container>
    </>
  );
}
