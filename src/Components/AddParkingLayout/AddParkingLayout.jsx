import React from "react";

import classes from "./AddParkingLayout.module.scss";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

const AddParkingLayout = () => {
  const location = useLocation();
  const params = useParams();
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
        {`/newparking/settingpark/${params.id}` === location.pathname ? (
          <Link to={"/parking"} className={classes.navlink}>
            Парковки
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className={classes.page}>
        <Outlet />
      </div>
    </div>
  );
};

export default AddParkingLayout;
