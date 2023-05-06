import React, {useContext} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

import classes from "./Authorization.module.css";

import ModalWindow from "../Modal/ModalWindow";
import {AuthContext} from "../../Context";

const Authorization = () => {
    const {auth, setAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setAuth(true);
        localStorage.setItem('auth', 'true')

    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                Авторизация
            </div>
            <div className={classes.inputarea}>
                Логин
            </div>
            <div className={classes.element}>
                <MyInput ></MyInput>
            </div>
            <div className={classes.inputarea}>
                Пароль
            </div>
            <div className={classes.element}>
                <MyInput ></MyInput>
            </div>
            <div className={classes.register}>
                <p>Нет аккаунта?&nbsp;</p> <ModalWindow/>
            </div>
            <div >
                <MyButton onClick={login} children="Войти"/>
            </div>
        </div>
    );
};

export default Authorization;
