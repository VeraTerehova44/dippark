import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import classes from "./History.module.scss";
import { fetchParking } from "../../../../store/asyncActions/addParking";
import axios from "axios";
import HystoryLot from "../../../HystoryLot/HystoryLot";
import moment from "moment/moment";

const History = () => {
  const [parkLots, setParkLots] = useState([]);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function getHistory() {
      await axios
        .get("https://localhost:7114/api/booking", config)
        .then((response) => setParkLots(response.data));
    }
    getHistory();
  }, []);

  return (
    <div className={classes.main_container}>
      <div className={classes.container}>
        {parkLots.map((lot) => (
          <div className={classes.card}>
            <HystoryLot id={lot.idLots} />
            <div>
              Бронь истекла:
              {lot.endBookedTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
