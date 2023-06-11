import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ParkingCard from "../../ParkingCard/ParkingCard";
import classes from "./Parking.module.scss";
import Navbar from "../../Navbar/Navbar";

const Parking = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);

  return (
    <div className={classes.background}>
      <Navbar />
      <div className={classes.title_section}>
        <div className={classes.title}>Парковки с которыми мы работаем</div>
      </div>

      <div className={classes.container}>
        {/*<ParkingCard
          name={"Парковка у бассейна Спартак"}
          address={"Кострома, ул.Балельщиков дом 71"}
          description={"Большая парковка с видеонаблюдением у СК Спартак"}
        />
        <ParkingCard
          name={"Подземная парковка ТЦ Чемпион"}
          address={"Кострома, пр.Мира 45"}
          description={
            "Подземная парковка с отоплением, установлено видеонаблюдение и пожарная охрана"
          }
        />*/}
        {items.map((item) => (
          <ParkingCard
            name={item.name}
            description={item.description}
            address={item.address}
            id={item.id}
            photo={item.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Parking;
