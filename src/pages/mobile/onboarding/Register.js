import InputField from "components/input-field/InputField";
import Mobileheader from "components/mobile-components/mobile-header/Mobileheader";
import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import UploadCertificate from "components/upload/UploadCertificate";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import { RegisterSchema } from "utils/schema/RegisterSchema";
import Auth from "services/auth";
import { useLocation } from "react-router-dom";
import UtilityButton from "components/buttons/UtilityButton";
import { router } from "App";
import { useSelector } from "react-redux";
export default function Register() {
  const { Formik } = formik;
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const phoneNumber = urlParams.get("phone");
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);

  const handleClick = () => {
    router.navigate("/otp");
  };
  return (
    <>
      <Container className="p-16">
        <Mobileheader pageName="Register" onClick={handleClick} />
        <p className="mt-30 lightgray">
          Lorem ipsum dolor sit amet consectetur. Lobortis habitant viverra
        </p>
        <Formik
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log("hellos");
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

              <span className="red">{touched.fullName && errors.fullName}</span>
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
              <span className="red">{touched.deegree && errors.deegree}</span>

              <InputField
                label="Practice Location and Contact Info"
                sublabel="Optional"
                labelstar={false}
                name="location" // Corrected field name
                value={values.location}
                onChange={handleChange}
                isValid={touched.location && !errors.location}
              />
              {console.log(values, "daflasjfdlajsdfjlasdfljasd")}
              <span className="red">{touched.location && errors.location}</span>

              <UploadCertificate
                setFieldValue={setFieldValue}
                label="Upload License Certificate"
              />
              {errors?.uploadCertificate ? (
                <span className="red">{"Please select file"}</span>
              ) : null}

              <Row className="mt-30">
                <Container className="d-grid gap-2 mb-4" id="fixedbutton-">
                  <UtilityButton
                    btnName="Submit"
                    bgColor="#3DB8ED"
                    getUserLoading={getUserLoading}
                  />
                </Container>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
