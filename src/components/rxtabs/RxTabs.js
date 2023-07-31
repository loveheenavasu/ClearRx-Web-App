import NewRxIcon from "assets/svg/NewRxIcon";
import RightArrowIcon from "assets/svg/RightArrowIcon";
import React from "react";
import Card from "react-bootstrap/Card";
import "./rxtabs.css";
import PropTypes from "prop-types";

export default function RxTabs({ RxTitle, RxIcon }) {
  return (
    <>
      <Card className="RxTabs Regular shadow">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {RxIcon}
            <Card.Title className="ml-20 RxTabs-title">{RxTitle}</Card.Title>
          </div>
          <Card.Subtitle className="RxTabs-icon mb-2 text-muted">
            <RightArrowIcon />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
RxTabs.propTypes = {
  RxTitle: PropTypes.string,
  RxIcon: PropTypes.string,
};
