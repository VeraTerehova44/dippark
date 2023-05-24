import React from "react";
import { Link } from "react-router-dom";

import classes from "./SAdmin.module.scss";
import ImgDropArea from "../../ImgDropArea/ImgDropArea";

const SAdmin = () => {
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.left_container}>
          <Link to="/">Назад</Link>
        </div>
        <div className={classes.right_container}>
          <ImgDropArea text={"Перетащите фото"} />
        </div>
      </div>
    </div>
  );
};

export default SAdmin;
