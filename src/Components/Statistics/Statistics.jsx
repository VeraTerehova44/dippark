import React from "react";

import classes from "./Statistics.module.scss";
import propTypes from "prop-types";

const Statistics = ({ number, description }) => {
  return (
    <div className={classes.stat_item}>
      <div className={classes.number}>{number}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

Statistics.propTypes = {
  number: propTypes.number,
  description: propTypes.string,
};

export default Statistics;
