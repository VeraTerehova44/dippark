import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainWindow from "./Pages/MainWindow/MainWindow";
import ErrorPage from "./Pages/ErrorPage";
import Auth from "./Pages/Auth/Auth";

import SAdmin from "./Pages/SAdmin/SAdmin";
import SAdminGrid from "./Pages/SAdminGrid/SAdminGrid";
import Profile from "./Pages/PagesForProfile/Profil/Profile";
import SettingParkZone from "./Pages/SettingParkZone/SettingParkZone";
import LayoutForProfile from "./LayoutForProfile/LayoutForProfile";
import Favorite from "./Pages/PagesForProfile/Favorite/Favorite";
import History from "./Pages/PagesForProfile/History/History";

import ThemeSetting from "./Pages/PagesForProfile/ThemeSetting/ThemeSetting";
import Parking from "./Pages/Parking/Parking";

import AddParkingLayout from "./AddParkingLayout/AddParkingLayout";
import DropPhoto from "./Pages/DropPhoto/DropPhoto";
import ProtectedRoute from "./ProtectedRoute";
import ParkIdPage from "./Pages/ParkIdPage/ParkIdPage";
import SettingParkingLayout from "./SettingParkingLayout/SettingParkingLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <LayoutForProfile />
          </ProtectedRoute>
        }
      >
        <Route index element={<Profile />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="history" element={<History />} />
        <Route path="theme" element={<ThemeSetting />} />
      </Route>
      <Route path="auth" element={<ProtectedRoute children={<Auth />} />} />
      <Route
        exact
        path="parking"
        element={
          <ProtectedRoute>
            <Parking />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="parking/:id"
        element={
          <ProtectedRoute>
            <ParkIdPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="newparking"
        element={
          <ProtectedRoute>
            <AddParkingLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<SAdmin />} />
        <Route
          path="photo"
          element={<ProtectedRoute children={<DropPhoto />} />}
        />
        <Route path="sadmingrid" element={<SAdminGrid />} />
        <Route path="settingpark" element={<SettingParkZone />} />
      </Route>
      <Route path="/settingparking" element={<SettingParkingLayout />}></Route>
    </Routes>
  );
};

export default AppRouter;

/*auth ? (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="profile" element={<LayoutForProfile />}>
        <Route index element={<Profile />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="history" element={<History />} />
        <Route path="theme" element={<ThemeSetting />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="Error" element={<ErrorPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="newparking" element={<AddParkingLayout />}>
        <Route index element={<SAdmin />} />
        <Route path="photo" element={<DropPhoto />} />
        <Route path="sadmingrid" element={<SAdminGrid />} />
        <Route path="settingpark" element={<SettingParkZone />} />
      </Route>
    </Routes>*/
