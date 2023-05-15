import React from "react";

import Youcancard from "../Youcancard/Youcancard";
import icon_booking from "../../svg/bookingicon.svg";
import icon_like from "../../svg/likeicon.svg";
import icon_application from "../../svg/applicationicon.svg";
import icon_design from "../../svg/designicon.svg";

import classes from "./Youcan.module.scss";

const Youcan = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}> Здесь вы можете </div>
      <div className={classes.section}>
        <Youcancard
          image={icon_booking}
          header="Забронировать место"
          text="Быстро забронируйте понравившееся парковочное место"
        />
        <Youcancard
          image={icon_design}
          header="Получить макет"
          text="Мы создаем макет парковочных мест, а далее добавляем парковку на сайт"
        />
        <Youcancard
          image={icon_application}
          header="Подать заявку"
          text="Оставте заявку, чтобы ваша парковка была на этом сайте"
        />
        <Youcancard
          image={icon_like}
          header="Выбрать лучшее"
          text="Выбирайте удобное парковочное место на желаемое время"
        />
      </div>
    </div>
  );
};

export default Youcan;
