import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import UploadCertificate from "components/upload/UploadCertificate";
import InputField from "components/input-field/InputField";
import Headingtab from "components/WebComponet/headingtab/Headingtab";
import TopHeadingIcon from "components/WebComponet/TopHeadingIcon";
import * as formik from "formik";
import { RegisterSchema } from "utils/schema/RegisterSchema";
import { useLocation } from "react-router-dom";
import Auth from "services/auth";
import UtilityButton from "components/buttons/UtilityButton";
import { router } from "App";
import { useSelector } from "react-redux";

export default function WebRegister() {
  const { Formik } = formik;
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const phoneNumber = urlParams.get("phone");
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);

  return (
    <>
      <Container
        className="container-fluid d-flex m-0 "
        style={{
          maxWidth: "100%",
          height: "100vh",
          padding: "0px",
          marginBottom: "32px",
        }}
      >
        <div
          className="Register1"
          style={{
            background: "#FAFAFA",
            backgroundImage: `url(/images/signup-bg.png) `,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundColor: "#fafafa",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="Register2">
          <TopHeadingIcon onClick={() => router.navigate("/login")} />
          <div className="Registorform">
            <Headingtab heading="Register" />
            <div className="mt-20 mb-20">
              <p className="mt-15 m-0" style={{ color: "#7877A0" }}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="m-0 " style={{ color: "#7877A0" }}>
                Lobortis habitant viverra
              </p>
            </div>
            <Formik
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                Auth.register(values, phoneNumber);
              }}
              initialValues={{
                fullName: "",
                LicenseNumber: "",
                deegree: "",
                location: "",
                uploadCertificate: "",
              }}
              enableReinitialize
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                setFieldValue,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <InputField
                    label="Full Name"
                    sublabel="as per license certificate"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isValid={touched.fullName && !errors.fullName}
                  />
                  <span className="red">
                    {touched.fullName && errors.fullName}
                  </span>

                  <InputField
                    label="Registered License Number"
                    name="LicenseNumber"
                    value={values.LicenseNumber}
                    onChange={handleChange}
                    isValid={touched.LicenseNumber && !errors.LicenseNumber}
                  />
                  <span className="red">
                    {touched.LicenseNumber && errors.LicenseNumber}
                  </span>
                  <InputField
                    label="Degree & Speciality"
                    name="deegree" // Corrected field name
                    value={values.deegree}
                    onChange={handleChange}
                    isValid={touched.deegree && !errors.deegree}
                  />
                  <span className="red">
                    {touched.deegree && errors.deegree}
                  </span>

                  <InputField
                    label="Practice Location and Contact Info"
                    sublabel="Optional"
                    labelstar={false}
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    isValid={touched.location && !errors.location}
                  />
                  <span className="red">
                    {touched.location && errors.location}
                  </span>

                  <UploadCertificate
                    setFieldValue={setFieldValue}
                    label="Upload License Certificate"
                  />
                  {errors?.uploadCertificate ? (
                    <span className="red">{"Please select file"}</span>
                  ) : null}

                  <Row className="mt-30">
                    <UtilityButton
                      btnName="Submit"
                      getUserLoading={getUserLoading}
                    />
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </>
  );
}
