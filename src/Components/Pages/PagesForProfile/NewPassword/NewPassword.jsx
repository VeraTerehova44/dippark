import React, { useState } from "react";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

import classes from "./NewPassword.module.scss";
import axios from "axios";

const NewPassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatNewPassword, setRepeatNewPassword] = useState();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function postNewPass() {
    await axios
      .patch(
        "https://localhost:7114/api/accounts/change-password",
        {
          oldPassword: oldPassword.toString(),
          newPassword: newPassword.toString(),
          confirmPassword: repeatNewPassword.toString(),
        },
        config
      )
      .then((r) => {
        alert("Пароль успешно изменен!");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        window.location.reload();
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.header}>Смена пароля</div>
        <div className={classes.input_item}>
          <MyInput
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Введите старый пароль"
          ></MyInput>
        </div>
        <div className={classes.input_item}>
          <MyInput
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Введите новый пароль"
          ></MyInput>
        </div>
        <div className={classes.input_item}>
          <MyInput
            value={repeatNewPassword}
            onChange={(e) => setRepeatNewPassword(e.target.value)}
            placeholder="Повторите новый пароль"
          ></MyInput>
        </div>
        <div className={classes.input_item}>
          <MyButton onClick={postNewPass} children={"Сохранить"}></MyButton>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
