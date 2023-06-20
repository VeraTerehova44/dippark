import React from "react";

import classes from "./Contact.module.scss";
import ContactCard from "../../ContactCard/ContactCard";
import img_team from "../../../svg/team/1.png";
import img_team_1 from "../../../svg/team/2.png";
import img_team_2 from "../../../svg/team/3.png";

import RequestForm from "../../RequestForm/RequestForm";

const Contact = () => {
  return (
    <div id="contact" className={classes.main_section}>
      <div className={classes.section}>
        <div className={classes.contact}>
          <div className={classes.header}>Связь с нами</div>
          <div className={classes.text}>
            <p>
              На нашем сайте вы можете связаться с сотрудниками данного сервиса
              бронирования парковочных мест. Наводя на фотографию выбранного
              работника Вы сможете нажать на иконку соц.сети или почты и перейти
              на нужную страницу.
            </p>
          </div>
        </div>

        <div className={classes.cards}>
          <ContactCard
            name={"Боб"}
            job={"Backend-разработчик"}
            image={img_team}
          />
          <ContactCard
            name={"Боб 1"}
            job={"Frontend-разработчик"}
            image={img_team_1}
          />
          <ContactCard
            name={"Боб 2"}
            job={"Frontend-разработчик"}
            image={img_team_2}
          />
        </div>
        <div className={classes.form}>
          <RequestForm title={"Оставьте заявку"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
