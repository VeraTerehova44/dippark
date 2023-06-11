import React from "react";
import { motion } from "framer-motion";

import Statistics from "../Statistics/Statistics";

import classes from "./About.module.scss";

const About = () => {
  return (
    <div>
      <div className={classes.about}>
        <div className={classes.rectangle}>
          <div className={classes.about_text}>О НАС</div>
        </div>
        <div className={classes.container_car}>
          <div className={classes.about_us}>
            <p className={classes.about_us_text}>
              Sky parking - это тот сервис, где вы сможете сократить трату
              времени на поиск парковочного места. Здесь потребуется лишь пару
              кликов для быстрого бронирования места на желаемой парковке на
              подходящий промежуток времени, а не тратить своё драгоценное время
              на долгие поездки вокруг здания или уезжать намного дальше от
              нужного объекта, с целью - найти местечко, чтобы припарковаться и
              бежать по делам.
            </p>
          </div>
          <motion.div className={classes.motion_car}></motion.div>
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
    </div>
  );
};

export default About;
