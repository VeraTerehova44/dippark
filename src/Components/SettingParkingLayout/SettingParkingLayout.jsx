import React from "react";

import classes from "./SettingParkingLayout.module.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SettingParkingLayout = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container_top}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <div className={classes.container_navbar}>
          <div className={classes.navbar}>
            <NavLink
              to={"/configparking"}
              children={"Настройки"}
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            />
            <NavLink
              to={"/newparking/photo"}
              children={"Создать новую парковку"}
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            />
          </div>
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingParkingLayout;
