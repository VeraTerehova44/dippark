import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import classes from "./Layout.module.scss";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/" className={classes.link}>
          ТУТ ЛОГОТИП
        </Link>
      </div>
      <div className={classes.navbar}>
        <Link to="/" className={classes.link}>
          Главная
        </Link>

        {/*<Link to="/parking" className={classes.link}>
          Парковки
        </Link>*/}
        <Link to="/settingparking" className={classes.link}>
          Настройки
        </Link>

        <a className={classes.link} href={"#contact"}>
          Связь с нами
        </a>

        <Link to="/profile" className={classes.link}>
          Личный кабинет
        </Link>
        {/*
        <Link to="/auth" className={classes.link}>
          Войти
        </Link>*/}
      </div>
    </div>
  );
};

export default Navbar;
