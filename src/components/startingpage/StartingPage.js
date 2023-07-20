import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import LogoIcon from "assets/svg/LogoIcon";

export default function StartingPage() {
  return (
    <>
      <Container
        className="parent-container d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundImage: `url(/images/bg.png)`,
        }}
      >
        <LogoIcon width={107} heigth={107}/>
        <p className="starting-page-para blue">ClearRx</p>
      </Container>
    </>
  );
}
