import React from "react";
import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "utils/helper";

export default function PublicRoute() {
  console.log(isAuthenticated());
  return isAuthenticated() ? <Navigate to="/login" /> : <Outlet />;
}
