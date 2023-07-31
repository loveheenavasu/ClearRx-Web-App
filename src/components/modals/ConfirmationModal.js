import React from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";

import UtilityButton from "components/buttons/UtilityButton";

export default function ConfirmationModal({ setIsModal }) {
  return (
    <Modal
      show={true}
      backdrop="static"
      keyboard={false}
      onHide={() => setIsModal(false)}
    >
      <Modal.Header className="border-0">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center border-0 fw-500 fs-14">
        Are You Sure want to Logout
      </Modal.Body>
      <Modal.Footer
        className="d-flex justify-content-evenly  border-0"
        style={{ width: "70%", margin: "auto" }}
      >
        <UtilityButton
          btnName="No"
          width="108px"
          bgColor="white"
          height="40px"
          color="#3DB8ED"
          border="2px solid #3DB8ED"
          onClick={() => setIsModal(false)}
        />
        <UtilityButton
          btnName="Yes"
          onClick={() => localStorage.clear()}
          width="108px"
          height="40px"
        />
      </Modal.Footer>
    </Modal>
  );
}
