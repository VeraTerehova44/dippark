import React, { useState } from "react";
import ImgDropArea from "../../ImgDropArea/ImgDropArea";

import classes from "./DropPhoto.module.scss";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";

const DropPhoto = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  return (
    <div className={classes.main_container}>
      <div className={classes.left_container}>
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
        </div>
      </div>
      <div className={classes.right_container}>
        <ImgDropArea name={name} address={address} />
      </div>
    </div>
  );
};

export default DropPhoto;
