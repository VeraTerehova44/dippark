import React from "react";

import classes from "./SettingParkingLayout.module.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

const SettingParkingLayout = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container_navbar}>
        <div className={classes.navbar}>
          <Link to={"/"}>Настройка парковки</Link>
          <Link to={"/"}>Настройка мест</Link>
          <Link to={"/"}>Создать парковку</Link>
        </div>
      </div>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingParkingLayout;
