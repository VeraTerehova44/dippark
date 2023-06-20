import React, { useEffect, useState } from "react";
import axios from "axios";

import HystoryPark from "../HystoryPark/HystoryPark";
import propTypes from "prop-types";

const HystoryLot = ({ id }) => {
  const [lot, setLot] = useState({});
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function getLotsById() {
      await axios
        .get(`https://localhost:7114/api/parkings/lots/${id}`, config)
        .then((response) => setLot(response.data))
        .catch((e) => e);
    }
    getLotsById().then((r) => r);
  }, []);

  return (
    <div>
      <HystoryPark idPark={lot.idParks} />
      <div>Место: {lot.name}</div>
    </div>
  );
};

HystoryLot.propTypes = {
  id: propTypes.number,
};

export default HystoryLot;
