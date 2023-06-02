import React from "react";
import { Link } from "react-router-dom";

const ParkingCard = ({ name, description, address, id }) => {
  return (
    <div>
      <div style={{ background: "grey", width: "300px", height: "200px" }}>
        {name}
        {description}
        {address}
        <Link to={`/parking/${id}`}>Перейти к бронированию</Link>
      </div>
    </div>
  );
};

export default ParkingCard;
