import React from "react";

import classes from "./MyButton.module.scss";

const MyButton = ({ onClick, children, disabled }) => {
  return (
    <div>
      <button disabled={disabled} className={classes.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
