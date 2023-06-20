import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ParkCard from "../../ParkCard/ParkCard";
import MyButton from "../../UI/MyButton/MyButton";
import { addLots } from "../../../store/action";

import classes from "./SettingParkZone.module.scss";

const SettingParkZone = () => {
  const [parking, setParking] = useState({});

  const dispatch = useDispatch();
  const params = useParams();

  const arrRow = Array.from(Array(parking.row).keys());
  const arrColumn = Array.from(Array(parking.column).keys());

  const items = useSelector((state) => state.lotsReducer.LOTS);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function postLots(name, blocked) {
    await axios
      .post(
        "https://localhost:7114/api/parkings/lots",
        {
          idParks: params.id,
          name: name,
          isBlocked: blocked,
          isBooked: false,
        },
        config
      )
      .then()
      .catch();
  }

  const editBlock = () => {
    items.map((park) => {
      postLots(String(park.name), park.blocked);
    });
  };

  useEffect(() => {
    async function getById() {
      await axios
        .get(`https://localhost:7114/api/parkings/parks/${params.id}`, config)
        .then((response) => {
          setParking(response.data);
          let parkItems = [];
          for (let i = 1; i <= response.data.row * response.data.column; i++) {
            parkItems.push({
              name: i,
              booked: false,
              blocked: false,
            });
          }
          dispatch(addLots(parkItems));
        })
        .catch();
    }
    getById();
  }, []);

  return (
    <div className={classes.main_container}>
      <div className={classes.container}>
        <div className={classes.section}>
          <div
            className={classes.column}
            style={{
              gridTemplateColumns: "repeat(" + parking.column + " ,1fr)",
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
              gridTemplateRows: "repeat(" + parking.row + " ,1fr)",
            }}
          >
            {arrRow.map((element) => (
              <div className={classes.number}>{element.valueOf() + 1} </div>
            ))}
          </div>
          <div
            className={classes.park_zone}
            style={{
              gridTemplateColumns: "repeat(" + parking.column + ",1fr)",
              gridTemplateRows: "repeat(" + parking.row + " ,1fr)",
            }}
          >
            {items.map((park) => (
              <ParkCard name={park.name} itemBlocked={park.blocked} />
            ))}
          </div>
          <div
            className={classes.row}
            style={{
              gridTemplateRows: "repeat(" + parking.row + " ,1fr)",
            }}
          >
            {arrRow.map((element) => (
              <div className={classes.number}>{element.valueOf() + 1} </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.button}>
        <MyButton onClick={editBlock}>Сохранить</MyButton>
      </div>
    </div>
  );
};

export default SettingParkZone;
