import LogoutIcon from "assets/svg/LogoutIcon";
import React from "react";
import Button from "react-bootstrap/Button";

export default function LogoutButton({ width, height }) {
  return (
    <Button
      className="d-flex justify-content-center align-items-center Regular shadow"
      variant="light"
      style={{ width: width, height: height }}
    >
      <LogoutIcon /> &nbsp;
      <span className="fs-14 fw-500 text-purple text-center">Logout</span>
    </Button>
  );
}
