import React from "react";
import { useScroll } from "framer-motion";
import axios from "axios";

import Navbar from "../../Navbar/Navbar";
import MyButton from "../../UI/MyButton/MyButton";
import Contact from "../Contact/Contact";
import Youcan from "../../Youcan/Youcan";
import Howwork from "../../Howwork/Howwork";

import classes from "./MainWindow.module.scss";
import Mmap from "../../Map/Mmap";
import About from "../../About/About";
import { useLocation } from "react-router-dom";

const MainWindow = () => {
  const test5647 = () => {};

  return (
    <div>
      <div className={classes.background}>
        <Navbar />
        <div className={classes.container}>
          <div className={classes.left_container}>
            <div className={classes.text}>
              <div className={classes.skypark}>SKYPARKING</div>
              <div className={classes.description}>
                удобный сервис бронирования парковочных мест
              </div>
              <div className={classes.button}>
                <MyButton>Найти парковку</MyButton>
              </div>
            </div>
          </div>
          <div className={classes.right_container}>
            <div className={classes.car}></div>
          </div>
        </div>
      </div>
      <About />

      <Youcan />
      <Howwork />
      <Mmap />
      <Contact />
      <MyButton onClick={test5647} children={"test"} />
    </div>
  );
};

export default MainWindow;
