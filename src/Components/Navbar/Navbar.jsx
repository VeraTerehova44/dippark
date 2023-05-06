import React, {useContext} from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from "../../Context";
import classes from "./Layout.module.scss";


const Navbar = () => {
    const {auth} = useContext(AuthContext);
    return (

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
                    {auth
                    ?
                    <Link to="/profile" className={classes.link}>
                        Личный кабинет
                    </Link>
                    :
                    <Link to="/auth" className={classes.link}>
                        Войти
                    </Link>}


                </div>
            </div>

    );
};

export default Navbar;
