import React, { useEffect, useState } from "react";
import InputField from "components/input-field/InputField";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PencilIcon from "assets/svg/PencilIcon";
import ConfirmationModal from "components/modals/ConfirmationModal";
import Avtar from "components/Avtar";
import LogoutButton from "components/buttons/LogoutButton";
import * as formik from "formik";
import { EditProfileSchema } from "utils/schema/EditProfileSchema";
import user from "services/user";
import { useSelector } from "react-redux";
import Loader from "components/loader/Loader";
import UtilityButton from "components/buttons/UtilityButton";
import PdfIcon from "assets/svg/PdfIcon";
import MobileBottomTab from "components/mobile-components/mobile-bottom-tab/MobileBottomTab";

export default function Verify() {
  const [isModal, setIsModal] = useState(false);
  const { Formik } = formik;
  const userData = localStorage.getItem("userData");
  const UserDetail = useSelector((state) => state.user);
  const { GET_USER: getUserLoading } = useSelector((state) => state.loading);
  console.log(getUserLoading, "getUserLoading");
  const { data } = UserDetail;
  console.log(data, "asfdsadfjd");
  const {
    full_name,
    licence_number,
    degree_speciality,
    mobile_number,
    userDocuments,
  } = data || {};
  console.log(data, "asldfjasljdfsadlflasdjf");
  console.log(userDocuments, "userDocuments");
  const { id } = JSON.parse(userData);
  useEffect(() => {
    user.getUser(id);
  }, [getUserLoading]);

  return (
    <>
      <Container
        className="d-flex justify-content-between  align-items-center mb-30"
        style={{
          margin: "0px",
          maxWidth: "100%",
          background: "#3DB8ED",
          minHeight: "121px",
          borderBottom: "30px",
          borderRadius: "0px 0px 30px 30px",
        }}
      >
        <div className="d-flex align-items-center">
          <div className="my-5 d-flex justify-content-center mr-24">
            <Avtar
              width="60px"
              height="58px"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            />
          </div>
          <div>
            <p className="text-white fs-16 fw-700 m-0">{full_name}</p>
            <p className="text-white fs-14 fw-400 mb-10">{degree_speciality}</p>
            <p className=" text-white fs-14 fw-500 m-0">
              <PencilIcon />
              <span className="ml-6"> Edit Profile</span>
            </p>
          </div>
        </div>
        <div onClick={() => setIsModal(!isModal)}>
          <LogoutButton />
        </div>
      </Container>
      {isModal && <ConfirmationModal setIsModal={setIsModal} />}

      <Container>
        <Formik
          validationSchema={EditProfileSchema}
          onSubmit={(values) => {
            user.editProfile(values, id);
          }}
          initialValues={{
            fullName: full_name || "",
            LicenseNumber: licence_number || "",
            deegree: degree_speciality || "",
            location: mobile_number || "",
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
                name="location"
                value={mobile_number}
                onChange={handleChange}
              />

              <div className="upload mx-1">
                <div className="d-flex flex-wrap align-items-center justify-content-start">
                  {userDocuments?.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        className="pdf-icon d-flex justify-content-start Regular shadow"
                        onClick={() => window.open(item.url)}
                      >
                        <PdfIcon />
                      </div>
                      <div className="blue fs-9">{item?.document_name}</div>
                    </div>
                  ))}
                </div>
              </div>

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
        <MobileBottomTab />
      </Container>
    </>
  );
}
