import React from "react";

import classes from "./Statistics.module.scss";

const Statistics = ({ number, description }) => {
  return (
    <div className={classes.stat_item}>
      <div className={classes.number}>{number}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default Statistics;
