import React from "react";
import LogoIcon from "assets/svg/LogoIcon";
import "./footer.css";
import Form from "react-bootstrap/Form";
import HealthCareIcon from "assets/svg/HealthCareIcon";
import UtilityButton from "components/buttons/UtilityButton";
import BakcIcon from "assets/svg/BackIcon";
import BtnBackIcon from "assets/svg/BtnBackIcon";
export default function WebFooter() {
  return (
    <>
      <div className="d-flex flex-column flex-wrap">
        <div className="d-flex align-items-center mt-50">
          <LogoIcon width="61px" height="57px" />
          <HealthCareIcon />
        </div>
        <div className="footer-li d-flex justify-content-between mt-24 ">
          <span className="quotes fw-700 fs-30">
            “A Simple Story About The Doctorate Medical Center & Health Care
            Foundation"
          </span>
          <span>
            <h2 className="fs-20">Explore</h2>
            <li>Home</li>
            <li>New</li>
            <li>Search</li>
            <li>Profile</li>
          </span>
          <span className="text-decoration-none">
            <h2 className="fs-20">Utility Pages</h2>
            <li>About Us</li>
            <li>Contact Us</li>
          </span>
          <span>
            <h2 className="fs-20">Get In Touch</h2>
            <li>
              It is a long established fact that a reader will be distracted
            </li>
            <li>
              <Form.Control
                className="footer-email-input br-0"
                type="email"
                placeholder="Enter email"
                size="lg"
              />
            </li>
            <li>
              <UtilityButton
                btnName="Submit"
                width="11.625rem"
                height="3.125rem"
                borderRadius="10px"
                suffix={<BtnBackIcon />}
              />
            </li>
          </span>
        </div>
      </div>
    </>
  );
}
