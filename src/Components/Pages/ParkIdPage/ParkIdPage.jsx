import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ParkIdPage = () => {
  const params = useParams();
  const items = useSelector((state) => state.newParkReducer.PARKING);
  return (
    <div>
      Ебааааать ты работаешь!!!
      <Link to={"/parking"}>К парковкам</Link>
      {items
        .filter((item) => item.id === params.id)
        .map((item) => (
          <div>
            {item.parkingItems.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ParkIdPage;
