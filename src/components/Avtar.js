import React from "react";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

export default function Avtar({ width, height, src }) {
  return <Image width={width} height={height} src={src} rounded />;
}

Avtar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
};
