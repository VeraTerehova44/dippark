import React from "react";
import propTypes from "prop-types";

import classes from "./Youcancard.module.scss";

const Youcancard = ({ header, text, image }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>{header}</div>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <div className={classes.container_text}>
        <div className={classes.border}>
          <div className={classes.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

Youcancard.propTypes = {
  header: propTypes.string,
  text: propTypes.string,
  image: propTypes.string,
};

export default Youcancard;
