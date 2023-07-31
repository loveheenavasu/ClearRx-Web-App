import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";
import BtnBackIcon from "assets/svg/BtnBackIcon";

export default function UtilityButton({
  btnName,
  bgColor = "#3DB8ED",
  width,
  height = "56px",
  color,
  border = "none",
  borderRadios = "100px",
  onclick,
  getUserLoading,
  suffix,
  ...props
}) {
  console.log(suffix, "suffixsuffix");
  return (
    <Button
      style={{
        backgroundColor: bgColor,
        fontWeight: 700,
        fontSize: "18px",
        borderRadius: borderRadios,
        width: width,
        border: border,
        height: height,
        color: color,
      }}
      variant="primary"
      type="submit"
      onClick={onclick}
      {...props}
    >
      {getUserLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="d-flex justify-content-center">
          {btnName}{" "}
          {suffix && (
            <span className="ml-12">
              <BtnBackIcon />
            </span>
          )}
        </div>
      )}
    </Button>
  );
}

UtilityButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderRadios: PropTypes.string,
  onclick: PropTypes.func,
};
