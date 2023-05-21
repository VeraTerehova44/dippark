import React from "react";

import classes from "./MyButton.module.scss";

const MyButton = ({ onClick, children }) => {
  return (
    <div>
      <button className={classes.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
