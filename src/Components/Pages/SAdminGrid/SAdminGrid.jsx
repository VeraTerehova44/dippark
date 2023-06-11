import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import classes from "./SAdminGrid.module.scss";
import { Slider } from "@mui/material";
import MyButton from "../../UI/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { addColumns, addItems, addRows } from "../../../store/action";

const SAdminGrid = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const arr = Array.from(Array(width * height).keys());

  const dispatch = useDispatch();

  const items = useSelector((state) => state.newParkReducer.PARKING);

  const addParkItems = () => {
    let ParkItems = [];
    for (let i = 1; i <= width * height; i++) {
      ParkItems.push({
        id: uuidv4(),
        name: i,
        isBooked: false,
        blocked: false,
      });
    }
    const id = items[items.length - 1].id;
    dispatch(addItems({ items: ParkItems, id: id }));
    dispatch(addRows({ rows: width, id: id }));
    dispatch(addColumns({ columns: height, id: id }));
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.background}>
        <div className={classes.left_container}>
          <div className={classes.sliders}>
            <Slider
              className={classes.item_slider}
              aria-label="Ширина"
              orientation="vertical"
              defaultValue={1}
              onChange={(e) => setWidth(e.target.value)}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={6}
            />
            <Slider
              className={classes.item_slider}
              aria-label="Высота"
              orientation="vertical"
              defaultValue={1}
              onChange={(e) => setHeight(e.target.value)}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
          </div>
          <MyButton onClick={addParkItems} children={"Сохранить"} />
        </div>
        <div className={classes.right_container}>
          <div
            className={classes.constructor}
            style={{
              /* gridTemplateRows: "repeat(height,1fr)",*/
              gridTemplateColumns: "repeat(" + height + ",1fr)",
              gridTemplateRows: "repeat(" + width + " ,1fr)",
            }}
          >
            {arr.map((element) => (
              <div className={classes.park_card}>{element.valueOf() + 1} P</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAdminGrid;
