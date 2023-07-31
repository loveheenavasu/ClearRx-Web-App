import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "utils/helper";

export default function PrivateRoute({ component: Component, ...rest }) {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}
