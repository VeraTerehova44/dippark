import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainWindow from "../Components/Pages/MainWindow/MainWindow";
import ErrorPage from "../Components/Pages/ErrorPage";
import Auth from "../Components/Pages/Auth/Auth";
import SAdmin from "../Components/Pages/SAdmin/SAdmin";
import SAdminGrid from "../Components/Pages/SAdminGrid/SAdminGrid";
import Profile from "../Components/Pages/PagesForProfile/Profil/Profile";
import SettingParkZone from "../Components/Pages/SettingParkZone/SettingParkZone";
import LayoutForProfile from "../Components/LayoutForProfile/LayoutForProfile";
import History from "../Components/Pages/PagesForProfile/History/History";
import Logout from "../Components/Pages/PagesForProfile/Logout/Logout";
import Parking from "../Components/Pages/Parking/Parking";
import AddParkingLayout from "../Components/AddParkingLayout/AddParkingLayout";
import DropPhoto from "../Components/Pages/DropPhoto/DropPhoto";
import ProtectedRoute from "./ProtectedRoute";
import ParkIdPage from "../Components/Pages/ParkIdPage/ParkIdPage";
import SettingParkingLayout from "../Components/SettingParkingLayout/SettingParkingLayout";
import SettingParking from "../Components/Pages/Settings/SettingParking/SettingParking";
import ConfigParkingLots from "../Components/ConfigParkingLots/ConfigParkingLots";
import NewPassword from "../Components/Pages/PagesForProfile/NewPassword/NewPassword";

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
        <Route
          index
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
        <Route
          path="changepass"
          element={
            <ProtectedRoute>
              <NewPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="changepass"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
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
          path={"photo"}
          element={<ProtectedRoute children={<DropPhoto />} />}
        />
        <Route
          path="sadmingrid"
          element={
            <ProtectedRoute>
              <SAdminGrid />
            </ProtectedRoute>
          }
        />
        <Route
          path="settingpark/:id"
          element={
            <ProtectedRoute>
              <SettingParkZone />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/configparking"
        element={
          <ProtectedRoute>
            <SettingParkingLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute>
              <SettingParking />
            </ProtectedRoute>
          }
        />
        <Route
          path="configlots/:id"
          element={
            <ProtectedRoute>
              <ConfigParkingLots />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
