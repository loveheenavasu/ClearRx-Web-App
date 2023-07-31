import { Welcome } from "pages/mobile";
import WebConfirmOtp from "pages/web/onboarding/WebConfirmOtp";
import WebEditprofile from "pages/web/onboarding/WebEditprofile";
import WebHome from "pages/web/onboarding/WebHome";
import WebOtp from "pages/web/onboarding/WebOtp";
import WebRegister from "pages/web/onboarding/WebRegister";
import WebThanks from "pages/web/onboarding/WebThanks";

export const webRoutes = {
  home: <WebHome />,
  register: <WebRegister />,
  confirmOtp: <WebConfirmOtp />,
  welcome: <Welcome />,
  thanks: <WebThanks />,
  otp: <WebOtp />,
  editProfile: <WebEditprofile />,
  newrx: <WebEditprofile />,
};
