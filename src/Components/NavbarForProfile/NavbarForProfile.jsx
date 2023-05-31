import React from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./NavbarForProfile.module.scss";
const NavbarForProfile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_navbar}>
        <div className={classes.logo}>
          <Link to="/" className={classes.link}>
            {" "}
            ТУТ ЛОГОТИП{" "}
          </Link>
        </div>
        <div className={classes.navbar}>
          <Link to="/" className={classes.link}>
            Главная
          </Link>

          <Link to="Error" className={classes.link}>
            Парковки
          </Link>

          <Link to="Error" className={classes.link}>
            Связь с нами
          </Link>
          <Link className={classes.link}>Выйти</Link>
        </div>
      </div>
      <div className={classes.profile_page}>
        <div className={classes.navbar_profile}>
          <Link to="/profile" className={classes.link_profile}>
            Личные данные
          </Link>
          <Link to="favorite" className={classes.link_profile}>
            Избранное
          </Link>
          <Link to="history" className={classes.link_profile}>
            История
          </Link>
          <Link to="theme" className={classes.link_profile}>
            Настройка темы
          </Link>
        </div>
        <div className={classes.display_profile}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavbarForProfile;
