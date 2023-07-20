import BakcIcon from "assets/svg/BackIcon";
import React from "react";
import "./index.css";

export default function Mobileheader({ pageName }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="back-icon-parent">
          <BakcIcon />
        </div>
        <div className="header-center">{pageName}</div>
        <div>icons</div>
      </div>
    </>
  );
}
