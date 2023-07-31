import WebNavbar from "components/WebComponet/web-navbar/WebNavbar";
import UtilityButton from "components/buttons/UtilityButton";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import user from "services/user";
export default function WebHome() {
  const userData = localStorage.getItem("userData");
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
  console.log(userDocuments, "userDocuments");
  const { id } = JSON.parse(userData);
  useEffect(() => {
    user.getUser(id);
  }, []);
  return (
    <Container style={{ margin: "0px", maxWidth: "100%", padding: "0px" }}>
      <WebNavbar
        name={full_name}
        licenceNumber={licence_number}
        speciality={degree_speciality}
      />
      <div
        style={{ background: "#3DB8ED", height: "594px", paddingTop: "60px" }}
      >
        <div
          style={{
            width: "90%",
            margin: " auto",
            padding: "72px",
            border: "1px solid white",
            borderRadius: "8px",
          }}
        >
          <p
            classname="fs-30 fw-500 text-center"
            style={{
              fontSize: "30px",
              color: "white",
              lineHeight: "40px",
              letterSpacing: "-0.3px",
              textAlign: "center",
            }}
          >
            alhfasdljfasjlfjd lsfjds jfldjsalfjdlsfjlsdjf alhfasdljfas jlfjdlsfj
            dsjf ldjsalfjdlsfjlsdjf alhfasdljfasj lfjdlsf
            jdsjfldjsalfjdlsfjlsdjf alhfasdljfasjlf jdlsfjd
            sjfldjsalfjdlsfjlsdjf alhfasdlj fasjlfj dlsfjdsjfldjsal fjdlsfjlsdjf
            alhfasdl jfasjlfjdls fjdsjfld jsalfjdlsfjlsdjf alhfasd ljfasjl
            fjdlsfj dsjfldjs alfjdls fjlsd jf alhfasdljfasjlf
          </p>
          <div className="d-flex justify-content-center">
            <div style={{ margin: "12px" }}>
              <UtilityButton
                btnName="New Rx"
                bgColor="#FFFFFF"
                width="202px"
                color="#3db8ed"
                borderRadios="10px"
              />
            </div>
            <div
              className="d-flex align-items-center"
              style={{ margin: "12px" }}
            >
              <UtilityButton
                btnName="Search Rx"
                color="white"
                width="202px"
                border="1px solid white"
                borderRadios="10px"
                getUserLoading={getUserLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
