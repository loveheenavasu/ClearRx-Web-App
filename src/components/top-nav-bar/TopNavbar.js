import React from "react";
import "./topnavbar.css";
export default function TopNavbar() {
  return (
    <>
      <div className="top-nav-bar-parent">
        <div className="d-flex justify-content-between top-nav-bar">
          <span>Welcome to Healthcare. We provides Best Doctors</span>
          <span className="d-flex align-items-center">
            {/* <span className="icon">@</span> */}
            healthcare@mail.com
          </span>
        </div>
      </div>
    </>
  );
}
