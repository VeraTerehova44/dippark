import React, { useEffect, useState } from "react";
import axios from "axios";
import { addLots } from "../../store/action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLots } from "../../store/asyncActions/addLots";
import classes from "../Pages/SettingParkZone/SettingParkZone.module.scss";
import ParkCard from "../ParkCard/ParkCard";
import MyButton from "../UI/MyButton/MyButton";

const ConfigParkingLots = () => {
  const [parking, setParking] = useState({});
  const arrRow = Array.from(Array(parking.row).keys());
  const arrColumn = Array.from(Array(parking.column).keys());
  const params = useParams();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const dispatch = useDispatch();
  const items = useSelector((state) => state.lotsReducer.LOTS);

  useEffect(() => {
    dispatch(fetchLots(params));
    async function getParkById() {
      await axios
        .get(`https://localhost:7114/api/parkings/parks/${params.id}`, config)
        .then((response) => {
          setParking(response.data);
          let parkItems = [];
        })
        .catch();
    }
    getParkById();
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
            {items
              .sort((item1, item2) => {
                return Number(item1.name) > Number(item2.name) ? 1 : -1;
              })
              .map((park) => (
                <ParkCard
                  name={park.name}
                  itemBlocked={park.isBlocked}
                  idLot={park.lotId}
                  itemBooked={park.isBooked}
                />
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
    </div>
  );
};

export default ConfigParkingLots;
