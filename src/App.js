import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  createRoutesFromElements,
  // Router,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import useIsmobile from "./hooks/useResize";
import { webRoutes } from "utils/webRoutes";
import { mobileRoutes } from "utils/mobileRoutes";
import PrivateRoute from "routes/PrivateRoute";
import Verify from "components/verify-account/Verify";

function WebOrMobile({ component }) {
  const isMobile = useIsmobile();
  return isMobile ? mobileRoutes[component] : webRoutes[component];
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/home" element={<WebOrMobile component="home" />}></Route>
        <Route path="/" element={<WebOrMobile component="home" />}></Route>

        <Route
          path="/edit-profile"
          element={<WebOrMobile component="editProfile" />}
        ></Route>
        <Route
          path="/new-rx"
          element={<WebOrMobile component="newrx" />}
        ></Route>
      </Route>

      <Route path="/">
        <Route
          path="/confirm-otp"
          element={<WebOrMobile component="confirmOtp" />}
        ></Route>
        <Route path="/" element={<WebOrMobile component="otp" />}></Route>
        <Route
          path="/register"
          element={<WebOrMobile component="register" />}
        ></Route>
        <Route
          path="/welcome"
          element={<WebOrMobile component="welcome" />}
        ></Route>
        <Route path="/login" element={<WebOrMobile component="otp" />}></Route>

        <Route path="/verify" element={<Verify />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route
        path="/thanks"
        element={<WebOrMobile component="thanks" />}
      ></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
