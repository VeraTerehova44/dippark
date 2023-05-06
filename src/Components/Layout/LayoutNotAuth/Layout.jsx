import React from 'react';
import {Link, Outlet} from "react-router-dom";

import classes from "../../Navbar/Layout.module.scss";

const Layout = () => {
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

                    <Link to="/auth" className={classes.link}>
                        Войти
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;
