import BakcIcon from "assets/svg/BackIcon";
import Cross from "assets/svg/Cross";
import React from "react";
import Container from "react-bootstrap/Container";

export default function TopHeadingIcon() {
  return (
    <>
      <Container className=" d-flex justify-content-end mt-24">
        <div className="back-icon">
          <BakcIcon />
        </div>
        <div className="cross">
          <Cross />
        </div>
      </Container>
    </>
  );
}
