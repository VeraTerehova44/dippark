import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import ImgDropArea from "../../ImgDropArea/ImgDropArea";
import MyInput from "../../UI/MyInput/MyInput";
import { addItems, addParking } from "../../../store/action";
import MyButton from "../../UI/MyButton/MyButton";
import { Button } from "@mui/material";

import classes from "./SAdmin.module.scss";

const SAdmin = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.newParkReducer.PARKING);
  const addNewPark = () => {
    const Parking = {
      id: uuidv4(),
      name: name,
      address: address,
      description: description,
      parkingItems: [],
    };
    dispatch(addParking(Parking));
    console.log(Parking);
  };

  const testParking = () => {
    console.log(items);
  };

  return (
    <div>
      <div className={classes.background}>
        <div className={classes.left_container}>
          {/*<Link to="/">Назад</Link>*/}
          <MyButton onClick={addNewPark} children="test" />
          {/*<Button onClick={testParking}>test2</Button>*/}
        </div>
        <div className={classes.right_container}>
          <ImgDropArea text={"Перетащите фото"} />
          <MyInput
            placeholder="Название парковки"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MyInput
            placeholder="Адрес парковки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <MyInput
            placeholder="Описание парковки"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SAdmin;
