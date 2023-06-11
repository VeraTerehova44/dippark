import React, { useState } from "react";

import classes from "./SettingParkZone.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ParkCard from "../../ParkCard/ParkCard";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import axios from "axios";
const SettingParkZone = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);
  const rows = items[items.length - 1].rows;
  const columns = items[items.length - 1].columns;
  const arrRow = Array.from(Array(rows).keys());
  const arrColumn = Array.from(Array(columns).keys());

  /*  async function postPark() {
    await axios
      .post("https://localhost:7114/api/parkings/parks", {
        ParkId: items[items.length - 1].id,
        Image: items[items.length - 1].photo,
        Name: items[items.length - 1].name,
        Adress: items[items.length - 1].address,
        Row: items[items.length - 1].rows,
        Column: items[items.length - 1].columns,
      })
      .then((response) => {
        alert("Успешно");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Ошибка");
      });
  }*/

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div
          className={classes.column}
          style={{
            gridTemplateColumns: "repeat(" + columns + " ,1fr)",
          }}
        >
          {arrColumn.map((element) => (
            <div className={classes.number}>{element.valueOf() + 1} </div>
          ))}
        </div>
      </div>
      <div className={classes.content}>
        <div
          className={classes.row}
          style={{
            gridTemplateRows: "repeat(" + rows + " ,1fr)",
          }}
        >
          {arrRow.map((element) => (
            <div className={classes.number}>{element.valueOf() + 1} </div>
          ))}
        </div>
        <div
          className={classes.park_zone}
          style={{
            gridTemplateColumns: "repeat(" + columns + ",1fr)",
            gridTemplateRows: "repeat(" + rows + " ,1fr)",
          }}
        >
          {items[items.length - 1].parkingItems.map((park) => (
            <ParkCard
              name={park.name}
              itemBlocked={park.blocked}
              id={park.id}
              parkingId={items[items.length - 1].id}
            />
          ))}
        </div>
        <div
          className={classes.row}
          style={{
            gridTemplateRows: "repeat(" + rows + " ,1fr)",
          }}
        >
          {arrRow.map((element) => (
            <div className={classes.number}>{element.valueOf() + 1} </div>
          ))}
        </div>
      </div>
      {/*<MyButton onClick={postPark} />*/}
      <Link to={"/parking"}>К парковкам</Link>
    </div>
  );
};

export default SettingParkZone;
