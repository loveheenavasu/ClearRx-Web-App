import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
import Container from "react-bootstrap/Container";
export default function DesktopButton({ btnName }) {
  return (
    <Container>
      <Button
        style={{
          width: "270px",
          height: "64px",
          backgroundColor: "#3DB8ED",
          borderRadius: "100px",
          color: "#FFF",
          border: "none",
          fontWeight: 700,
        }}
        // className="desktop-btn-style"
      >
        {btnName}
      </Button>
    </Container>
  );
}
