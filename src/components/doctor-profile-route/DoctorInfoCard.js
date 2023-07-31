import React from "react";
import Card from "react-bootstrap/Card";
import "./doctorinfocard.css";
import Avtar from "components/Avtar";
export default function DoctorInfoCard() {
  return (
    <>
      <Card className="doctor-info-card  ">
        <Avtar
          height="58px"
          width="60px"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        />
        <div className="doctor-detail">
          <span className="text-white fs-16 fw-700 m-0">Dr Arun Gowda</span>
          <span className="text-white fs-14 fw-400 mb-10">MD Dermatology</span>
          <span className="text-white fs-12 fw-400 mb-10">License-12345</span>
        </div>
      </Card>
    </>
  );
}
