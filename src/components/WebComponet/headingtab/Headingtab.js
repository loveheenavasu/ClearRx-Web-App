import React from "react";
import "./index.css";

export default function Headingtab({ heading }) {
  return (
    <>
      <h2 className="heading-tab">{heading}</h2>
      <span className="tab-line"></span>
      {/* <p className="heading-tab-para">{desc}</p> */}
    </>
  );
}
