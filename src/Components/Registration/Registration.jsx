import React, {useState} from 'react';

import classes from "./Registartion.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import axios from "axios";

const Registration = () => {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    async function postRegister() {

        await axios.post('https://localhost:7114/api/Account/register',{
            email: login,
            password: password,
            confirmPassword: confirmPass
        })
            .then((response) => {
                alert("Вы успешно зарегистрированы!")
                console.log(response)
            })
            .catch((error) => {
                alert("Что-то пошло не так(")
                console.log(error)
            })
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                Регистрация
            </div>
            <div className={classes.element}>
                Логин
            </div>
            <div>
                <MyInput
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                />
            </div>
            <div className={classes.element}>
                Пароль
            </div>
            <div>
                <MyInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </div>
            <div className={classes.element}>
                Повторите пароль
            </div>
            <div>
                <MyInput
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                />
            </div>
            <div className={classes.button}>
                <MyButton onClick={postRegister} children={"Зарегистрироваться"}/>
            </div>
        </div>
    );
};

export default Registration;
