import React from "react";

import classes from "./AddParkingLayout.module.scss";
import { NavLink, Outlet } from "react-router-dom";

const AddParkingLayout = () => {
  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <NavLink
          to={"photo"}
          children={"Добавление фото"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        />
        <NavLink
          to={"sadmingrid"}
          children={"Разметка мест"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        />
        <NavLink
          to={"settingpark"}
          children={"Настройка мест"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        />
      </div>
      <div className={classes.page}>
        <Outlet />
      </div>
    </div>
  );
};

export default AddParkingLayout;
