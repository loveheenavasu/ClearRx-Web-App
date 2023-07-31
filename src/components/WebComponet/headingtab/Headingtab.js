import React from "react";
import "./headingtab.css";
import PropTypes from "prop-types";

export default function Headingtab({ heading }) {
  return (
    <>
      <h2 className="heading-tab">{heading}</h2>
    </>
  );
}
Headingtab.propTypes = {
  heading: PropTypes.string,
};
