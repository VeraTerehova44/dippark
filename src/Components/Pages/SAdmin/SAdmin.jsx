import React, { useState } from "react";

import MyInput from "../../UI/MyInput/MyInput";
import { addParking } from "../../../store/action";
import MyButton from "../../UI/MyButton/MyButton";

import classes from "./SAdmin.module.scss";

const SAdmin = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.input}>
            <MyInput
              placeholder="Название парковки"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <MyInput
              placeholder="Адрес парковки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={classes.input}></div>
        </div>
      </div>
    </div>
  );
};

export default SAdmin;
