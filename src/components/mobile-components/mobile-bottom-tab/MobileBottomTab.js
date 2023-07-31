import { useState } from "react";
import HomeIcon from "assets/svg/HomeIcon";
import ProfileIcon from "assets/svg/ProfileIcon";
import SavedIcon from "assets/svg/SavedIcon";
import SearchIcon from "assets/svg/SearchIcon";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./mobilebottomtab.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { router } from "App";
import { useLocation } from "react-router-dom";

export default function MobileBottomTab() {
  const [key, setKey] = useState("home");
  const { pathname } = useLocation();
  console.log(key, "asfasfdsa");
  return (
    <Navbar className="Small shadow" bg="white" data-bs-theme="light">
      <Container>
        <Nav
          className="me-auto d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <Nav.Link
            className="mobiletabhover12"
            active={pathname.includes("/home")}
            onClick={() => router.navigate("/home")}
          >
            <span className="mobiletabhover d-flex justify-content-center">
              <HomeIcon />
              <span className="ml-6">Home</span>
            </span>
          </Nav.Link>
          <Nav.Link
            className="mobiletabhover12"
            active={pathname.includes("/home")}
            onClick={() => router.navigate("/home")}
            href="#features"
          >
            <span className="mobiletabhover d-flex justify-content-center">
              <SavedIcon />
              <span className="ml-6">Saved</span>
            </span>
          </Nav.Link>
          <Nav.Link className="mobiletabhover12" href="#seach">
            <span className="mobiletabhover d-flex justify-content-center">
              <SearchIcon />
              <span className="ml-6">Search</span>
            </span>
          </Nav.Link>
          <Nav.Link
            className="mobiletabhover12"
            active={pathname.includes("/edit-profile")}
            onClick={() => router.navigate("/edit-profile")}
          >
            <span className="mobiletabhover d-flex justify-content-center">
              <ProfileIcon />
              <span className="ml-6">Profile</span>
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
