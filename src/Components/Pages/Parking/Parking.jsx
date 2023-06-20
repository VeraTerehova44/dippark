import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ParkingCard from "../../ParkingCard/ParkingCard";
import Navbar from "../../Navbar/Navbar";
import { fetchParking } from "../../../store/asyncActions/addParking";
import classes from "./Parking.module.scss";

const Parking = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.newParkReducer.PARKING);

  useEffect(() => {
    dispatch(fetchParking());
  }, []);

  return (
    <div className={classes.background}>
      <Navbar />
      <div className={classes.title_section}>
        <div className={classes.title}>Парковки с которыми мы работаем</div>
      </div>
      <div className={classes.container}>
        {items
          .sort((item1, item2) => {
            return Number(item1.parkId) > Number(item2.parkId) ? 1 : -1;
          })
          .map((item) => (
            <ParkingCard
              name={item.name}
              description={item.description}
              address={item.adress}
              id={item.parkId}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Parking;
