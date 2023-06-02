import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBlocked, editNameItem } from "../../store/action";
import { Button, Switch, TextField } from "@mui/material";

import MyModal from "../UI/MyModal/MyModal";

import classes from "./ParkCard.module.scss";

const ParkCard = ({ name, itemBlocked, id, parkingId }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [title, setTitle] = useState(name);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    dispatch(editBlocked({ id: id, parkingId: parkingId, newState: checked }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const save = () => {
    setOpen(false);
    dispatch(editNameItem({ id: id, parkingId: parkingId, newState: title }));
  };

  return (
    <div className={classes.park_item} onClick={handleOpen}>
      <div className={classes.title}>Паркововчное место: {name}</div>
      <div
        style={itemBlocked ? { background: "red" } : { background: "green" }}
      >
        {itemBlocked ? "Не ноступно" : "Доступно"}
      </div>
      <MyModal
        open={open}
        handleClose={save}
        className={classes.modal_container}
        children={
          <div className={classes.settings}>
            А я работаю {name} {id} {itemBlocked ? "True" : "False"}
            <div>
              <Switch checked={checked} onChange={handleChange} />
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Изменить название"
                variant="standard"
              />
              <Button onClick={save} variant="text">
                Сохранить
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ParkCard;
