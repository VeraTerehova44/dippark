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
import SAdminGrid from "./Pages/SAdminGrid/SAdminGrid";
import Profile from "./Pages/PagesForProfile/Profil/Profile";
import SettingParkZone from "./Pages/SettingParkZone/SettingParkZone";
import NavbarForProfile from "./NavbarForProfile/NavbarForProfile";
import Favorite from "./Pages/PagesForProfile/Favorite/Favorite";
import History from "./Pages/PagesForProfile/History/History";
import { ThemeContext } from "@emotion/react";
import ThemeSetting from "./Pages/PagesForProfile/ThemeSetting/ThemeSetting";
import Parking from "./Pages/Parking/Parking";
import ParkIdPage from "./Pages/ParkIdPage/ParkIdPage";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);
  return auth ? (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="auth" element={<Auth />} />
      <Route path="sadmin" element={<SAdmin />} />
      <Route path="sadmingrid" element={<SAdminGrid />} />
      <Route path="settingpark" element={<SettingParkZone />} />
      <Route exact path="parking" element={<Parking />} />
      <Route exact path="parking/:id" element={<ParkIdPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="profile" element={<NavbarForProfile />}>
        <Route index element={<Profile />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="history" element={<History />} />
        <Route path="theme" element={<ThemeSetting />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
