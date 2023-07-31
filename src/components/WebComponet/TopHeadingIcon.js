import BakcIcon from "assets/svg/BackIcon";
import React from "react";
import Container from "react-bootstrap/Container";

export default function TopHeadingIcon({ onClick }) {
  return (
    <>
      <Container className=" d-flex justify-content-end mt-24">
        <div className="back-icon" onClick={onClick}>
          <BakcIcon />
        </div>
        {/* <div className="cross">
          <Cross />
        </div> */}
      </Container>
    </>
  );
}
