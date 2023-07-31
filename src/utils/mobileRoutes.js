import {
  Thankyou,
  EditProfile,
  Welcome,
  ConfirmOtp,
  Register,
} from "pages/mobile";
import Home from "pages/mobile/home/Home";
import NewRx from "pages/mobile/home/NewRx";
import Otp from "pages/mobile/onboarding/Otp";

export const mobileRoutes = {
  home: <Home />,
  register: <Register />,
  confirmOtp: <ConfirmOtp />,
  welcome: <Welcome />,
  thanks: <Thankyou />,
  otp: <Otp />,
  editProfile: <EditProfile />,
  newrx: <NewRx />,
};
