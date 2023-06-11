import React, { useContext, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

import classes from "./Authorization.module.scss";

import ModalWindow from "../Modal/ModalWindow";

import axios from "axios";
import { Navigate } from "react-router-dom";

const Authorization = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState();

  async function postLogin() {
    await axios
      .post("https://localhost:7114/api/accounts/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        alert("Успешно!");
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        setTitle("Неверный логин или пароль");
      });
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>Авторизация</div>
      <div>{title}</div>
      <div className={classes.inputarea}>Логин</div>
      <div className={classes.element}>
        <MyInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Введите почту"
        />
      </div>
      <div className={classes.inputarea}>Пароль</div>
      <div className={classes.element}>
        <MyInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Введите пароль"
        />
      </div>
      <div className={classes.register}>
        <p>Нет аккаунта?&nbsp;</p>
        <ModalWindow />
      </div>
      <div>
        <MyButton onClick={postLogin} children="Войти" />
      </div>
    </div>
  );
};

export default Authorization;
