import React, {useContext, useState} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

import classes from "./Authorization.module.css";

import ModalWindow from "../Modal/ModalWindow";
import {AuthContext} from "../../Context";
import axios from "axios";


const Authorization = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [title, setTitle] = useState();

    const {auth, setAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setAuth(true);
        localStorage.setItem('auth', 'true')
    }

    async function postLogin() {

        await axios.post('https://localhost:7114/api/Account/login',{
            email: email,
            password: password
        })
            .then((response) => {
                alert("Успешно!")
                console.log(response)
                setAuth(true)
                localStorage.setItem('auth', 'true')
            })
            .catch(error => {
                setTitle("Неверный логин или пароль")
                console.log(error)

            })
    }


    return (
        <div className={classes.container}>

            <div className={classes.header}>
                Авторизация
            </div>
            <div>
                {title}
            </div>
            <div className={classes.inputarea}>
                Логин
            </div>
            <div className={classes.element}>
                <MyInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="введите почту"
                />
            </div>
            <div className={classes.inputarea}>
                Пароль
            </div>
            <div className={classes.element}>
                <MyInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="введите пароль"
                />
            </div>
            <div className={classes.register}>
                <p>Нет аккаунта?&nbsp;</p> <ModalWindow/>
            </div>
            <div >
                <MyButton onClick={postLogin} children="Войти"/>
            </div>
        </div>
    );
};

export default Authorization;
