import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slider } from "@mui/material";

import MyButton from "../../UI/MyButton/MyButton";

import classes from "./SAdminGrid.module.scss";

const SAdminGrid = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  const arr = Array.from(Array(width * height).keys());

  const items = useSelector((state) => state.newParkReducer.PARKING);
  const navigate = useNavigate();

  async function postPark() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const formData = new FormData();
    formData.append("Name", items[0].name);
    formData.append("Adress", items[0].address);
    formData.append("Row", width);
    formData.append("Column", height);
    formData.append("Image", items[0].image);
    await axios
      .post("https://localhost:7114/api/parkings/parks", formData, config)
      .then((response) => {
        alert("Успешно");
        const id = response.data.parkId;
        navigate(`/newparking/settingpark/${id}`);
      })
      .catch(() => {
        alert("Ошибка");
      });
  }

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

          <MyButton onClick={postPark} children={"Далее"} />
        </div>
        <div className={classes.right_container}>
          <div
            className={classes.constructor}
            style={{
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
