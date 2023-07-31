import React from "react";
import OTPInput from "otp-input-react";
import "./mobileotp.css";
import useIsmobile from "hooks/useResize";

export default function MobileOtp({ otp, ...props }) {
  // const [OTP, setOtp] = useState("");
  let margin = useIsmobile() ? "12px" : "42px";

  return (
    <>
      <OTPInput
        className="otp-input-root"
        value={otp}
        // onChange={setOtp}
        autoFocus
        OTPLength={4}
        placeholder={[0, 0, 0, 0]}
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
        {...props}
      />
    </>
  );
}
