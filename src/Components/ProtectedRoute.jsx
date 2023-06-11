import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const arr = [
    "/profile",
    "/profile/favorite",
    "/profile/history",
    "/profile/theme",
  ];

  /*const location = useLocation();
  if (
    localStorage.getItem("token") === null &&
    arr.includes(location.pathname) &&
    localStorage.getItem("role") === null
  ) {
    return <Navigate to={"/"} />;
  }*/

  return <>{children}</>;
};

export default ProtectedRoute;
