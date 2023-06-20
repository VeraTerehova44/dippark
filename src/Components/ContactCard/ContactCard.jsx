import React from "react";

import classes from "./ContactCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import propTypes, { string } from "prop-types";

const ContactCard = ({ name, job, image, linkVK, linkTg, linkWt }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_item}>
        <div className={classes.card_inner}>
          <div className={classes.card_img}>
            <img className={classes.img} src={image} />
          </div>
          <div className={classes.card_text}>
            <div className={classes.social_container}>
              <a className={classes.social_item} href={linkVK}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a className={classes.social_item} href={linkTg}>
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a className={classes.social_item} href={linkWt}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.card_info}>
          <div className={classes.name}>{name}</div>
          <div className={classes.job}>{job}</div>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  name: propTypes.string,
  job: propTypes.string,
  image: propTypes.string,
  linkVK: propTypes.string,
  linkTg: propTypes.string,
  linkWt: propTypes.string,
};

export default ContactCard;
