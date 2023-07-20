import React from "react";
import "./index.css";

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
