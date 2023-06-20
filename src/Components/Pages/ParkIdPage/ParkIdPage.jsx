import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { fetchLots } from "../../../store/asyncActions/addLots";
import Navbar from "../../Navbar/Navbar";
import ParkCardForBook from "../../ParkCardForBook/ParkCardForBook";

import classes from "./ParkIdPage.module.scss";

const ParkIdPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [parkingData, setParkingData] = useState([]);
  const [loading, setLoading] = useState(false);

  const items = useSelector((state) => state.lotsReducer.LOTS);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    console.log("123");
    dispatch(fetchLots(params));
    setLoading(true);
    async function getById() {
      await axios
        .get(`https://localhost:7114/api/parkings/parks/${params.id}`, config)
        .then((response) => {
          setParkingData(response.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    getById();
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <div className={classes.left_section}>
          <div className={classes.info_park}>
            <div className={classes.photo}>
              {parkingData.image && (
                <img
                  className={classes.image}
                  src={`data:image/jpeg;base64,${parkingData.image}`}
                />
              )}
            </div>
            <div className={classes.text}>{parkingData.name}</div>
            <div className={classes.text}>{parkingData.adress}</div>
          </div>
        </div>
        <div className={classes.right_section}>
          {loading ? (
            <div>Загрузка</div>
          ) : (
            <div
              className={classes.grid}
              style={{
                gridTemplateColumns: "repeat(" + parkingData.column + ",1fr)",
                gridTemplateRows: "repeat(" + parkingData.row + " ,1fr)",
              }}
            >
              {items
                .sort((item1, item2) => {
                  return Number(item1.name) > Number(item2.name) ? 1 : -1;
                })
                .map((item) => (
                  <ParkCardForBook
                    name={item.name}
                    isBooked={item.isBooked}
                    blocked={item.isBlocked}
                    id={item.lotId}
                    setLoading={setLoading}
                    parkId={params}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkIdPage;
