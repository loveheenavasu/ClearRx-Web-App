import React from "react";
import Form from "react-bootstrap/Form";
import "./inputfield.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import useIsmobile from "hooks/useResize";

export default function InputField({
  label,
  sublabel,
  width = "100%",
  labelstar = true,
  value,
  name,
  onChange,
}) {
  const mobileScreen = useIsmobile();
  return (
    <>
      <Row className="mb-20 ">
        <Form.Group
          as={Col}
          md="4"
          style={{ width: width, fontSize: "0.875rem" }}
          controlId="validationCustom01"
        >
          <Form.Label className="label mb-1">
            <span className={`lable ${mobileScreen ? "fs-12" : "fs-16"}`}>
              {label}
            </span>
            {sublabel && (
              <span
                className={`sub-lable mb-1 ${mobileScreen ? "fs-10" : "fs-14"}`}
              >
                {" "}
                &nbsp;{`(${sublabel})`}
              </span>
            )}
            {labelstar && <span className="label-star">&nbsp;*</span>}
          </Form.Label>

          <Form.Control
            className="global-input"
            required
            type="text"
            placeholder={label}
            value={value}
            name={name}
            onChange={onChange}
            size="lg"
            style={{
              fontSize: "14px",
              padding: "13px 20px",
              height: "45px",
            }}
          />
        </Form.Group>
      </Row>
    </>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  sublabel: PropTypes.string,
  width: PropTypes.string,
  labelstar: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
