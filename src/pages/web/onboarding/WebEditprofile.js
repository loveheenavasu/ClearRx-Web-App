import React, { useEffect, useState } from "react";
import InputField from "components/input-field/InputField";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PencilIcon from "assets/svg/PencilIcon";
import Avtar from "components/Avtar";
import LogoutButton from "components/buttons/LogoutButton";
import * as formik from "formik";
import user from "services/user";
import { useSelector } from "react-redux";
import Loader from "components/loader/Loader";
import WebNavbar from "components/WebComponet/web-navbar/WebNavbar";
import WebFooter from "components/WebComponet/web-footer/WebFooter";
import UtilityButton from "components/buttons/UtilityButton";
import ImageIcon from "assets/svg/ImageIcon";
import { EditProfileSchema } from "utils/schema/EditProfileSchema";
import ConfirmationModal from "components/modals/ConfirmationModal";

export default function EditProfile() {
  const [isConfirmationModal, setConfirmationModal] = useState(false);
  const { Formik } = formik;

  const UserDetail = useSelector((state) => state.user);
  const { GET_USER: getUserLoading, PAGE_LOADING: pageLoading } = useSelector(
    (state) => state.loading
  );
  const { data } = UserDetail;
  const {
    full_name,
    licence_number,
    degree_speciality,
    mobile_number,
    userDocuments,
  } = data || {};
  console.log(data, "data");
  console.log(userDocuments, "userDocuments");
  const userData = localStorage.getItem("userData");
  const { id } = JSON.parse(userData);
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const { id } = JSON.parse(userData);
    if (id) user.getUser(id);
  }, [getUserLoading]);

  return (
    <>
      <Container style={{ margin: "0px", maxWidth: "100%", padding: "0px" }}>
        <WebNavbar
          name={full_name}
          licenceNumber={licence_number}
          speciality={degree_speciality}
        />

        <div
          className="d-flex justify-content-between fw-700 fs-32"
          style={{
            width: "90%",
            margin: "62px auto",
          }}
        >
          Profile
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "90%", margin: "34px auto" }}
        >
          <div>
            <Avtar
              height="159px"
              width="165px"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            />

            <p className="m-0 fw-700 fs-30 blue text-center ">{full_name}</p>
            <p className="m-0 fw-400 fs-16 blue text-center ">
              {degree_speciality}
            </p>
          </div>

          <div
            className="mt-30"
            style={{
              position: " relative",
              top: "50px",
            }}
          >
            <div onClick={() => setConfirmationModal(true)}>
              <LogoutButton height="68px" width="145px" />
            </div>
          </div>
        </div>
        {isConfirmationModal && (
          <ConfirmationModal setIsModal={setConfirmationModal} />
        )}
        <div
          className="  Regular shadow"
          style={{
            width: "90%",
            margin: "0px auto 44px auto",
            paddingBottom: "40px",
            borderRadius: "12px",
          }}
        >
          <Formik
            validationSchema={EditProfileSchema}
            onSubmit={(values) => {
              console.log(values, "goood");
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
                <div
                  className="d-flex justify-content-end "
                  style={{
                    width: "90%",
                    margin: "auto",
                    backGroundColor: "green",
                    borderRadious: "10px",
                  }}
                >
                  {console.log(values, errors, "asddasfasfsdf")}
                  {}
                  <div className="d-flex justify-content-end position-absolute">
                    <p className="mt-15" style={{ color: "#3db8ed" }}>
                      <PencilIcon color="#3db8ed" />
                      <span className="ml-16">Edit Profile</span>
                    </p>
                  </div>
                  {console.log(errors, "asdfjaslfjlsajflasdjflsdajlfjdsarrrr")}
                  <Row style={{ width: "45%", marginTop: "66px" }}>
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
                      label="Degree & Speciality"
                      name="deegree"
                      value={values.deegree}
                      onChange={handleChange}
                      isValid={touched.deegree && !errors.deegree}
                    />
                    <span className="red">
                      {touched.deegree && errors.deegree}
                    </span>
                  </Row>
                  <Row style={{ width: "45%", marginTop: "66px " }}>
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
                  </Row>
                </div>
                <div
                  style={{
                    maxWidth: "40%",
                    minWidth: "40%",
                    margin: "auto",
                  }}
                >
                  <Row>
                    {userDocuments?.map((item, index) => (
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex justify-content-between">
                          {console.log(item, "aslfjsaljdf")}
                          <div>
                            <ImageIcon />
                          </div>
                          <div>
                            <span className="fs-12 fw-400">
                              &nbsp; {item?.document_name}
                            </span>
                            <span
                              className="fs-12 blue fw-400 cursor-pointer ml-12"
                              onClick={() => window.open(item.url)}
                            >
                              . preview
                            </span>
                          </div>
                        </div>
                        <span className="fs-10">
                          {(item.document_size / 1024).toFixed(2)}mb
                        </span>
                      </div>
                    ))}
                  </Row>
                </div>
                <div className="d-flex justify-content-center mt-80 ">
                  <UtilityButton
                    btnName="Submit"
                    width="223px"
                    getUserLoading={getUserLoading}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div
          className="d-flex"
          style={{ background: "#d3edfc", paddingBottom: "50px" }}
        >
          <div style={{ width: "90%", margin: "auto" }}>
            <WebFooter />
          </div>
        </div>
      </Container>
    </>
  );
}
