import React from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./LayoutForProfile.module.scss";
import Navbar from "../Navbar/Navbar";
const LayoutForProfile = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.profile_page}>
        <div className={classes.navbar_profile}>
          <Link to="/profile" className={classes.link_profile}>
            Личные данные
          </Link>
          <Link to="history" className={classes.link_profile}>
            История
          </Link>
          <Link to="logout" className={classes.link_profile}>
            Выйти
          </Link>
        </div>
        <div className={classes.display_profile}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutForProfile;
