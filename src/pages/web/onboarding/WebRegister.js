import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import UploadCertificate from "components/upload/UploadCertificate";

import InputField from "components/Inputfield/InputField";
import Headingtab from "components/WebComponet/headingtab/Headingtab";
import DesktopButton from "components/buttons/DestopButton";
import TopHeadingIcon from "components/WebComponet/TopHeadingIcon";

export default function WebRegister() {
  return (
    <>
      <Container
        className="container-fluid m-0"
        style={{ maxWidth: "100%", height: "100vh" }}
      >
        <Row>
          <Col
            style={{
              background: "#FAFAFA",
              backgroundImage: `url(/images/signup-bg.png)`,
              backgroundRepeat: "no-repeat",
              height: "100vh",
              backgroundColor: "#fafafa",
            }}
          ></Col>

          <Col style={{ width: "100%", padding: "0px 60px" }}>
            <TopHeadingIcon />
            <Headingtab heading="Register" />
            <p className="mt-15">
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
                <DesktopButton btnName="Submit" />
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
