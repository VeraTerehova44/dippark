import React from "react";

import classes from "./SettingParkZone.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ParkCard from "../../ParkCard/ParkCard";
const SettingParkZone = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);

  return (
    <div>
      <div className={classes.top_background}></div>
      <div className={classes.content}>
        <div className={classes.park_zone}>
          {items
            .filter((item) => item.id === items[items.length - 1].id)
            .map((item) =>
              item.parkingItems.map((park) => (
                <ParkCard
                  name={park.name}
                  itemBlocked={park.blocked}
                  id={park.id}
                  parkingId={items[items.length - 1].id}
                />
              ))
            )}
        </div>
        <div className={classes.control_container}></div>
      </div>
      <div className={classes.bottom_background}></div>
    </div>
  );
};

export default SettingParkZone;
