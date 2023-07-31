import HelpLineIcon from "assets/svg/HelpLineIcon";
import LogoIcon from "assets/svg/LogoIcon";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./webnavbar.css";
import { router } from "App";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function WebNavbar({ name, speciality, licenceNumber }) {
  const { pathname } = useLocation();
  // console.log(location, "this islocation");
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary Larger shadow web-nav
        
"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "1",
        }}
      >
        <Container>
          <Navbar.Brand>
            <div
              className="d-flex align-items-center cursor-pointer"
              onClick={() => router.navigate("/home")}
            >
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
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" style={{ color: "#636e88" }}>
              <Nav.Link
                className="fs-18 m-20 nav-menu"
                active={pathname.includes("/home")}
                onClick={() => router.navigate("/home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                active={pathname.includes("/route-rx")}
                className="fs-18 m-20 nav-menu"
              >
                New Rx
              </Nav.Link>
              <Nav.Link
                active={pathname.includes("/route-rx")}
                className="fs-18 m-20 nav-menu"
              >
                Search Rx
              </Nav.Link>
              <Nav.Link
                active={pathname.includes("/edit-profile")}
                onClick={() => router.navigate("/edit-profile")}
                className="fs-18 m-20 nav-menu"
              >
                Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="mr-16">
                <p className="text-blue fs-16 fw-700 m-0">{name}</p>
                <p className="text-blue fs-14 fw-500 m-0">{speciality}</p>
                <p className="text-blue fs-12 fw-400 m-0">{licenceNumber}</p>
              </div>
              <Nav.Link href="#deets">
                <div className="header-left">
                  <HelpLineIcon /> <span className="ml-6">Help</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

WebNavbar.propTypes = {
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  licenceNumber: PropTypes.string.isRequired,
};
