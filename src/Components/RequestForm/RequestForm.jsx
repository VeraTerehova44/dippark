import React from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

import classes from "./RequestForm.module.scss";
import propTypes from "prop-types";

const RequestForm = ({ title }) => {
  return (
    <div className={classes.section}>
      <div className={classes.container_input}>
        <div className={classes.title}>{title}</div>
        <div className={classes.form_text}>Почта</div>
        <MyInput placeholder={"Введите почту"} />
        <div className={classes.form_text}>Имя</div>
        <MyInput placeholder={"Введите имя"} />
      </div>
      <div className={classes.container_button}>
        <MyButton children={"Отправить"} />
      </div>
    </div>
  );
};

RequestForm.propTypes = {
  title: propTypes.string,
};

export default RequestForm;
