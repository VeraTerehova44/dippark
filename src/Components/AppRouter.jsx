import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/LayoutNotAuth/Layout";
import MainWindow from "./Pages/MainWindow/MainWindow";
import ErrorPage from "./Pages/ErrorPage";
import Auth from "./Pages/Auth/Auth";
import LayoutAuth from "./Layout/LayoutAuth/LayoutAuth";
import MyCabinet from "./Pages/MyCabinet";
import { AuthContext } from "../Context";
import SAdmin from "./Pages/SAdmin/SAdmin";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);
  return auth ? (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="Profile" element={<MyCabinet />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="auth" element={<Auth />} />
      <Route path="Sadmin" element={<SAdmin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
