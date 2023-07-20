import InputField from "components/Inputfield/InputField";

import Mobileheader from "components/mobileheader/Mobileheader";
import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { LargeButton } from "components/buttons";
import UploadCertificate from "components/upload/UploadCertificate";
import Row from "react-bootstrap/Row";
import DesktopButton from "components/buttons/DestopButton";

export default function Register() {
  return (
    <>
      <Container className="p-16">
        <Mobileheader pageName="Register" />
        <p className="mt-30">
          Lorem ipsum dolor sit amet consectetur. Lobortis habitant viverra
        </p>
        <Form>
          <InputField
            label="Phone Number"
            sublabel="as per license certificate"
          />
          <InputField label="Registered License Number" />
          <InputField label="Degree & Speciality" />
          <InputField
            label="Practice Location and Contact Info"
            sublabel="Optional"
            labelstar={false}
          />
          <UploadCertificate label="Uplaod License Certificate" />
          <Row className="mt-30">
            <LargeButton label="Submit" />
          </Row>
        </Form>
      </Container>
    </>
  );
}
