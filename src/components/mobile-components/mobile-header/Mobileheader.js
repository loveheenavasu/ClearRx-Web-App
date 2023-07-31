import BakcIcon from "assets/svg/BackIcon";
import React from "react";
import "./mobileheader.css";
import HelpLineIcon from "assets/svg/HelpLineIcon";
import PropTypes from "prop-types";

export default function Mobileheader({
  pageName,
  onClick,
  isHelpLineIcon = false,
}) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="back-icon-parent" onClick={onClick}>
          <BakcIcon />
        </div>
        <div className="header-center">{pageName}</div>
        <div>
          {isHelpLineIcon && (
            <div className="header-left">
              <>
                <HelpLineIcon /> <span className="ml-6">Help</span>{" "}
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
Mobileheader.propTypes = {
  pageName: PropTypes.string,
};
