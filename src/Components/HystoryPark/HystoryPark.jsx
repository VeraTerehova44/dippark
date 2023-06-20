import React, { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";

const HystoryPark = ({ idPark }) => {
  const [park, setPark] = useState({});
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function getParkById() {
      await axios
        .get(`https://localhost:7114/api/parkings/parks/${idPark}`, config)
        .then((response) => setPark(response.data))
        .catch((e) => e);
    }
    getParkById().then((r) => r);
  }, [config]);

  return <div>{park.name}</div>;
};

HystoryPark.propTypes = {
  idPark: propTypes.number,
};

HystoryPark.defaultProps = {
  idPark: 20,
};

export default HystoryPark;
