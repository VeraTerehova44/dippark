import React from "react";

import { Link } from "react-router-dom";

import Authorization from "../../Authorization/Authorization";

import classes from "./Auth.module.css";

import { motion } from "framer-motion";

const Auth = () => {
  return (
    <div className={classes.container}>
      <div className={classes.auth}>
        <div className={classes.logo}>
          <Link to="/" className={classes.link}>
            SKYPARKING
          </Link>
        </div>
        <div className={classes.input}>
          <Authorization />
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.parking_background}>
          <motion.div className={classes.car}></motion.div>
        </div>
        <div className={classes.greeting}>
          <div className={classes.pointer}></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
