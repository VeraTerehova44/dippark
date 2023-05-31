import React from "react";

import img_team from "../../../../svg/team/1.png";

import classes from "./Profile.module.scss";
import Navbar from "../../../Navbar/Navbar";
import NavbarForProfile from "../../../NavbarForProfile/NavbarForProfile";

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <div className={classes.photo}>
          <img src={img_team} className={classes.img} />
        </div>
        <div className={classes.data}>
          <div className={classes.item}>Почта</div>
          <div className={classes.item}>ФИО</div>
          <div className={classes.item}>Мобильный телефон</div>
          <div className={classes.item}>Гос. номер</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
