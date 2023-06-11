import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./ParkIdPage.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
import Navbar from "../../Navbar/Navbar";
import MyModal from "../../UI/MyModal/MyModal";
import { editNameItem } from "../../../store/action";
import ParkCardForBook from "../../ParkCardForBook/ParkCardForBook";

const ParkIdPage = () => {
  const params = useParams();
  const [preview, setPreview] = useState();

  const items = useSelector((state) => state.newParkReducer.PARKING);
  const park = items.filter((item) => item.id === params.id);

  useEffect(() => {
    if (!park[0].photo) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(park[0].photo);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [park[0].photo]);

  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <div className={classes.left_section}>
          <div className={classes.info_park}>
            <div className={classes.photo}>
              <img src={preview} />
            </div>
            <div className={classes.text}>{park[0].name}</div>
            <div className={classes.text}>{park[0].address}</div>
            <div className={classes.text}>{park[0].description}</div>
          </div>
        </div>
        <div className={classes.right_section}>
          <div
            className={classes.grid}
            style={{
              gridTemplateColumns: "repeat(" + park[0].columns + ",1fr)",
              gridTemplateRows: "repeat(" + park[0].rows + " ,1fr)",
            }}
          >
            {items
              .filter((item) => item.id === params.id)
              .map((item) =>
                item.parkingItems.map((item) => (
                  <ParkCardForBook
                    name={item.name}
                    isBooked={item.isBooked}
                    blocked={item.blocked}
                  />
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkIdPage;
