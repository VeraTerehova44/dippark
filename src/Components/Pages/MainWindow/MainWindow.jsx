import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import axios from "axios";

import Navbar from "../../Navbar/Navbar";
import MyButton from "../../UI/MyButton/MyButton";
import Contact from "../Contact/Contact";
import Youcan from "../../Youcan/Youcan";
import Howwork from "../../Howwork/Howwork";
import Statistics from "../../Statistics/Statistics";

import classes from "./MainWindow.module.scss";
import Mmap from "../../Map/Mmap";

const MainWindow = () => {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  console.log(scrollY);

  async function testPost() {
    const date = {
      email: "user@67ample.com",
      password: "12345",
      confirmPassword: "12345",
    };
    await axios
      .post("https://localhost:7114/api/Account/register", {
        email: "email9006@xuy",
        password: "4537",
        confirmPassword: "4537",
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Вы зарегистрированы!!!");
          console.log(response);
        }
      });
  }

  async function testPost2() {
    await axios
      .post("https://localhost:7114/api/Account/login", {
        email: "email9006@xuy",
        password: "4537",
      })
      .then((response) => {
        console.log(response);
      });
  }

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
      <div className={classes.about}>
        <div className={classes.rectangle}>
          <div className={classes.about_text}>О НАС</div>
        </div>
        <div className={classes.container_car}>
          <motion.div className={classes.motion_car} style={{}}></motion.div>
        </div>
        <div className={classes.bottom_line}></div>
      </div>

      <div className={classes.statistics}>
        <div className={classes.stat}>
          <Statistics number={1} description={"В нашем городе"} />
          <Statistics number={3} description={"Парковки"} />
          <Statistics number={25} description={"Счастливых клиентов"} />
          <Statistics number={27} description={"Забронированных мест"} />
          <Statistics number={6} description={"Отзывов"} />
        </div>
      </div>

      <Youcan />
      <Howwork />
      <Mmap />
      <Contact />
    </div>
  );
};

export default MainWindow;
