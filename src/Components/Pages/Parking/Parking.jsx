import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ParkingCard from "../../ParkingCard/ParkingCard";

const Parking = () => {
  const items = useSelector((state) => state.newParkReducer.PARKING);
  return (
    <div>
      <Link to="/sadmin">Создать парковку</Link>Я страница парковки!
      <div>
        {items.map((item) => (
          <ParkingCard
            name={item.name}
            description={item.description}
            address={item.address}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Parking;
