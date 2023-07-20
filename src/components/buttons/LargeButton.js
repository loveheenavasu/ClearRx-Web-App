import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export function LargeButton({ label }) {
  return (
    <>
      <Container className="d-grid gap-2 mb-4" id="fixedbutton">
        <Button
          size="lg"
className="btn-style"
        >
          {label}
        </Button>
      </Container>
    </>
  );
}
