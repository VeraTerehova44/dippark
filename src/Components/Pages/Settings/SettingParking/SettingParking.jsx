import React, { useEffect } from "react";
import classes from "./SettingParking.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ParkingCard from "../../../ParkingCard/ParkingCard";
import { Link } from "react-router-dom";
import { fetchParking } from "../../../../store/asyncActions/addParking";
import ConfigParkingCard from "../../../ConfigParkingCard/ConfigParkingCard";

const SettingParking = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParking());
  }, []);
  return (
    <div className={classes.main_container}>
      <div>
        {items
          .sort((item1, item2) => {
            return Number(item1.parkId) > Number(item2.parkId) ? 1 : -1;
          })
          .map((item) => (
            <ConfigParkingCard
              name={item.name}
              address={item.adress}
              id={item.parkId}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default SettingParking;
