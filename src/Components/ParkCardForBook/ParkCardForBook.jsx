import React, { useState } from "react";
import MyModal from "../UI/MyModal/MyModal";

import classes from "./ParkCardForBook.module.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const ParkCardForBook = ({ blocked, isBooked, name }) => {
  const [open, setOpen] = useState(false);
  const openPlace = () => {
    if (blocked === false) {
      setOpen(true);
    }
  };

  const save = () => {
    setOpen(false);
  };

  return (
    <div
      onClick={openPlace}
      className={classes.item_card}
      style={blocked || isBooked ? { border: "1px lightgrey solid" } : {}}
    >
      <div
        className={classes.item}
        style={blocked || isBooked ? { color: "lightgrey" } : {}}
      >
        {name}
      </div>
      <MyModal
        open={open}
        handleClose={save}
        children={
          <div className={classes.container_modal}>
            <div className={classes.modal}>
              <FormControl className={classes.form_control} variant="standard">
                <InputLabel>Продолжительность</InputLabel>
                <Select label="Время">
                  <MenuItem value={10}>1 час</MenuItem>
                  <MenuItem value={20}>2 часа</MenuItem>
                  <MenuItem value={30}>3 часа</MenuItem>
                  <MenuItem value={40}>5 часов</MenuItem>
                  <MenuItem value={50}>10 часов</MenuItem>
                  <MenuItem value={60}>12 часов</MenuItem>
                </Select>
              </FormControl>
              <Button variant="outlined">Забронировать</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ParkCardForBook;
