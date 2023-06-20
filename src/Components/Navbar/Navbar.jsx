import React from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/" className={classes.link}>
          SKYPARKING
        </Link>
      </div>
      <div className={classes.navbar}>
        <Link to="/" className={classes.link}>
          Главная
        </Link>

        {"/parking" === location.pathname &&
        localStorage.getItem("role") !== "user" ? (
          <Link to="/configparking" className={classes.link}>
            Настройки парковок
          </Link>
        ) : (
          ""
        )}

        {"/parking" === location.pathname ? (
          ""
        ) : (
          <Link to="/parking" className={classes.link}>
            Парковки
          </Link>
        )}

        {/*<Link to="/newparking" className={classes.link}>
          Создание
        </Link>*/}
        {/*<Link to="/settingparking" className={classes.link}>
          Настройки
        </Link>*/}

        {location.pathname === "/" ? (
          <a className={classes.link} href={"#contact"}>
            Связь с нами
          </a>
        ) : (
          ""
        )}

        {localStorage.getItem("role") === null ? (
          <Link to="/auth" className={classes.link}>
            Войти
          </Link>
        ) : (
          <Link to="/profile" className={classes.link}>
            Личный кабинет
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
