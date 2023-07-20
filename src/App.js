import Otp from "pages/mobile/onboarding/Otp";
import Register from "pages/mobile/onboarding/Register";
import "./App.css";
import "./index.css";
import ConfirmOtp from "pages/mobile/onboarding/ConfirmOtp";

import {
  createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  createRoutesFromElements,
  // Router,
  Outlet,
} from "react-router-dom";
import Welcome from "pages/mobile/onboarding/Welcome";
// import Headingtab from "components/WebComponet/headingtab/Headingtab";
// import WebRegister from "pages/web/onboarding/Register";
import useIsmobile from "./hooks/useResize";
import Thankyou from "pages/mobile/onboarding/Thankyou";
import WebThanks from "pages/web/onboarding/WebThanks";
import WebConfirmOtp from "pages/web/onboarding/WebConfirmOtp";
import WebRegister from "pages/web/onboarding/WebRegister";
import WebOtp from "pages/web/onboarding/WebOtp";

const mobileRoutes = {
  register: <Register />,
  confirmotp: <ConfirmOtp />,
  welcome: <Welcome />,
  thanks: <Thankyou />,
  otp: <Otp />,
};

const webRoutes = {
  register: <WebRegister />,
  confirmotp: <WebConfirmOtp />,
  welcome: <Welcome />,
  thanks: <WebThanks />,
  otp: <WebOtp />,
};

function WebOrMobile({ component }) {
  const isMobile = useIsmobile();
  console.log("helosodfasdohfdsajfdjs", isMobile);
  return isMobile ? mobileRoutes[component] : webRoutes[component];
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route
        path="/confirm-otp"
        element={<WebOrMobile component="confirmotp" />}
      ></Route>
      <Route
        path="/register"
        element={<WebOrMobile component="register" />}
      ></Route>
      <Route
        path="/welcome"
        element={<WebOrMobile component="welcome" />}
      ></Route>
      <Route
        path="/thanks"
        element={<WebOrMobile component="thanks" />}
      ></Route>
      <Route path="/otp" element={<WebOrMobile component="otp" />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path="/confirmotp"
          element={<WebOrMobile component="" />}
        ></Route>
        <Route
          path="/register"
          element={<WebOrMobile component="register" />}
        ></Route>
        <Route
          path="/welcome"
          element={<WebOrMobile component="register" />}
        ></Route>
      </Route>
    </>
  );
}

export default App;
