import React from 'react';
import classes from "../../Navbar/Layout.module.scss";
import {Link, Outlet} from "react-router-dom";

const LayoutAuth = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Link to="/" className={classes.link}> ТУТ ЛОГОТИП </Link>
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

                    <Link to="/Profile" className={classes.link}>
                        Личный кабинет
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default LayoutAuth;
