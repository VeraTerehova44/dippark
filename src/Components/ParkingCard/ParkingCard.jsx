import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import classes from "./ParkingCard.module.scss";

const ParkingCard = ({ name, address, id, image }) => {
  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <img
          className={classes.image}
          src={`data:image/jpeg;base64,${image}`}
        />
      </div>
      <div className={classes.section}>
        <div className={classes.description}>
          <div className={classes.description_text}>{name}</div>
          <div className={classes.description_text}>{address}</div>
        </div>
        <div className={classes.section_button}>
          <Link className={classes.button} to={`/parking/${id}`}>
            Просмотр парковки
          </Link>
        </div>
      </div>
    </div>
  );
};

ParkingCard.propTypes = {
  name: propTypes.string,
  address: propTypes.string,
  id: propTypes.number,
  image: propTypes.string,
};

export default ParkingCard;
