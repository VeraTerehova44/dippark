import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const pathBanUnUser = [
    "/profile",
    "/profile/favorite",
    "/profile/history",
    "/profile/logout",
    "/parking",
    "/newparking",
    "/newparking/photo",
    "/newparking/sadmingrid",
    "/configparking",
    "/profile/changepass",
  ];

  const pathBanUser = [
    "/auth",
    "/newparking",
    "/newparking/photo",
    "/newparking/sadmingrid",
    "/configparking",
  ];

  const pathBanManager = [
    "/auth",
    "/newparking",
    "/newparking/photo",
    "/newparking/sadmingrid",
  ];

  const location = useLocation();
  if (
    localStorage.getItem("token") === null &&
    pathBanUnUser.includes(location.pathname.toLowerCase()) &&
    localStorage.getItem("role") === null
  ) {
    return <Navigate to={"/"} />;
  }

  if (
    localStorage.getItem("token") &&
    pathBanUser.includes(location.pathname.toLowerCase()) &&
    localStorage.getItem("role") === "user"
  ) {
    return <Navigate to={"/"} />;
  }

  if (
    localStorage.getItem("token") &&
    pathBanManager.includes(location.pathname.toLowerCase()) &&
    localStorage.getItem("role") === "manager"
  ) {
    return <Navigate to={"/"} />;
  }

  if (
    localStorage.getItem("token") &&
    "/auth" === location.pathname.toLowerCase() &&
    localStorage.getItem("role") === "admin"
  ) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
