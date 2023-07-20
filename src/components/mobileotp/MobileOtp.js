import React, { useState } from "react";
import OTPInput from "otp-input-react";
import "./index.css";
import useIsmobile from "hooks/useResize";

export default function MobileOtp() {
  const [OTP, setOTP] = useState("");
  console.log(setOTP, "setOTP");
  let margin = useIsmobile() ? "12px" : "42px";

  return (
    <>
      <OTPInput
        className="otp-input-root"
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType="number"
        inputStyles={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue",
          background: "#ECEEF3",
          marginRight: margin,
        }}
        focusStyles={{
          border: "1px solid green",
          outline: "none",
        }}
        disabled={false}
      />
    </>
  );
}
