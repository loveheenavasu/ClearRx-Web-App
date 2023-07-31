import MobileInput from "components/mobile-components/mobile-Input/MobileInput";
import Mobileheader from "components/mobile-components/mobile-header/Mobileheader";
import React from "react";
import Container from "react-bootstrap/Container";
import Radios from "components/form-radios/Radios";
import { LargeButton } from "components/buttons";
import InputField from "components/input-field/InputField";

// import Radios from "components/formradios/Radios";
export default function NewRx() {
  return (
    <>
      <Container className="p-16 mt-20">
        <Mobileheader pageName="New Rx" />
        <div className="mt-30">
          <MobileInput label="Patient Phone Number" />
        </div>
        <InputField label="Patient Name" labelstar={false} />
        <InputField label=" Age" labelstar={false} />

        <label
          className="label lightgray fs-18 mb-14"
          htmlFor="floatingPasswordCustom"
        >
          Sex
        </label>
        <div className="d-flex justify-content-around">
          <Radios label="male" />
          <Radios label="female" />
        </div>
        {/* <AddDrugModal /> */}

        {/* <label
          className="label lightgray fs-18 mb-14"
          htmlFor="floatingPasswordCustom"
        >
          Existing Members
        </label>
        <div
          className="d-flex justify-content-between "
          style={{
            width: "66%",
          }}
        >
          <div>
            <Radios />
          </div>
          <div>
            <Radios />
          </div>
        </div>
        <div
          className="d-flex justify-content-between "
          style={{
            width: "66%",
          }}
        >
          <div>
            <Radios />
          </div>
          <div>
            <Radios />
          </div>
        </div> */}
        {/* <div className="d-flex add-Members mt-30">
          <LargeButton btnName="Add Members" />
        </div> */}
      </Container>
    </>
  );
}
