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
      photo: null,
      name: name,
      address: address,
      description: description,
      parkingItems: [],
      rows: 0,
      columns: 0,
    };
    dispatch(addParking(Parking));
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.input}>
            <MyInput
              placeholder="Название парковки"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <MyInput
              placeholder="Адрес парковки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <MyInput
              placeholder="Описание парковки"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <MyButton onClick={addNewPark} children="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAdmin;
