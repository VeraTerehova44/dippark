import React, { useContext, useState } from "react";

import img_team from "../../../../svg/team/1.png";

import classes from "./Profile.module.scss";
import settings from "../../../../svg/setting.png";
import Navbar from "../../../Navbar/Navbar";
import LayoutForProfile from "../../../LayoutForProfile/LayoutForProfile";
import { Button, Switch, TextField } from "@mui/material";
import MyModal from "../../../UI/MyModal/MyModal";
import MyButton from "../../../UI/MyButton/MyButton";

const Profile = () => {
  const [open, setOpen] = useState(false);

  function openSettings() {
    setOpen(true);
  }

  function save() {
    setOpen(false);
  }

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <div className={classes.photo}>
          <img src={img_team} className={classes.img} />
        </div>

        <div className={classes.data}>
          <div className={classes.setting_container}>
            <div onClick={openSettings} className={classes.setting}>
              <img src={settings} />
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.title}>Почта</div>
            <div className={classes.item}>vera@mail.ru</div>
            <div className={classes.title}>Имя</div>
            <div className={classes.item}>Анатолий</div>
            <div className={classes.title}>Фамилия</div>
            <div className={classes.item}>Петров</div>
            <div className={classes.title}>Мобильный телефон</div>
            <div className={classes.item}>89536208534</div>
            <div className={classes.title}>Гос. номер</div>
            <div className={classes.item}>Н303УВ44</div>
          </div>
        </div>
      </div>
      <MyModal
        open={open}
        handleClose={save}
        children={
          <div className={classes.modal_container}>
            <div className={classes.modal}>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Profile;
