import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBlocked, editNameItem } from "../../store/action";
import { Button, IconButton, Switch, TextField } from "@mui/material";

import MyModal from "../UI/MyModal/MyModal";

import classes from "./ParkCard.module.scss";
import success from "../../svg/succes.png";

const ParkCard = ({ name, itemBlocked, id, parkingId, rows }) => {
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
    <div
      className={classes.park_item}
      style={
        itemBlocked
          ? { backgroundColor: "rgba(247, 247, 247, 0.68) " }
          : { backgroundColor: "rgba(144, 255, 237, 0.3) " }
      }
      onClick={handleOpen}
    >
      <div
        className={classes.title}
        style={itemBlocked ? { color: "rgba(197, 197, 197, 100" } : {}}
      >
        Место: {name}
      </div>
      <div style={itemBlocked ? { color: "rgba(156, 14, 14, 0.56" } : {}}>
        {itemBlocked ? (
          "Недоступно"
        ) : (
          <div>
            <img src={success} style={{ width: "40px" }} />
          </div>
        )}
      </div>
      <MyModal
        open={open}
        handleClose={save}
        className={classes.modal_container}
        children={
          <div className={classes.settings}>
            <div className={classes.input}>
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Изменить название"
                variant="standard"
              />
            </div>
            <div className={classes.input}>
              <Switch checked={checked} onChange={handleChange} />
            </div>

            <div className={classes.input}>
              <Button onClick={save} variant="outlined">
                Удалить
              </Button>
            </div>
            <div className={classes.input}>
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
