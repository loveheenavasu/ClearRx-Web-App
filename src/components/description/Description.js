import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function Description({
  description,
  subdescription,
  link,
  fSize,
}) {
  return (
    <>
      {description && (
        <p className="description   mb-12 align-self-start ">{description}</p>
      )}
      <p className={`subdescription ${fSize} m-0`}>
        {subdescription} &nbsp;
        {link && <a href="/">{link}</a>}
      </p>
    </>
  );
}
Description.propTypes = {
  description: PropTypes.string,
  subdescription: PropTypes.string,
  link: PropTypes.string,
  fSize: PropTypes.string,
};
