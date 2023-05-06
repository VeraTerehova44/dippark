import React from 'react';

import classes from "./Registartion.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const Registration = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                Регистрация
            </div>
            <div className={classes.element}>
                Логин
            </div>
            <div>
                <MyInput/>
            </div>
            <div className={classes.element}>
                Пароль
            </div>
            <div>
                <MyInput/>
            </div>
            <div className={classes.element}>
                Повторите пароль
            </div>
            <div>
                <MyInput/>
            </div>
            <div className={classes.button}>
                <MyButton children={"Зарегистрироваться"}/>
            </div>
        </div>
    );
};

export default Registration;
