import React from "react";
import classes from "./SettingParking.module.scss";
import { useSelector } from "react-redux";
import ParkingCard from "../../../ParkingCard/ParkingCard";
import { Link } from "react-router-dom";

const SettingParking = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);
  return (
    <div className={classes.main_container}>
      <div>
        {items.map((item) => (
          <div>
            <div
              className={classes.photo}
              style={{ backgroundImage: "url(" + preview + ")" }}
            >
              <img src={photo} />
            </div>
            <div className={classes.section}>
              <div className={classes.description}>
                <div className={classes.description_text}>{name}</div>
                <div className={classes.description_text}>{description}</div>
                <div className={classes.description_text}>{address}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingParking;
