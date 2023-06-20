import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBlockedLot, editNameLot } from "../../store/action";
import { Button, Switch, TextField } from "@mui/material";

import MyModal from "../UI/MyModal/MyModal";

import classes from "./ParkCard.module.scss";
import success from "../../svg/succes.png";
import propTypes from "prop-types";
import axios from "axios";

const ParkCard = ({ name, itemBlocked, idLot, itemBooked }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [checkedForPut, setCheckedForPut] = useState(true);
  const [title, setTitle] = useState(name);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    setCheckedForPut(e.target.checked);
    if (idLot === undefined) {
      dispatch(editBlockedLot({ name: name, blocked: checked }));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function putLot() {
    await axios
      .put(
        "https://localhost:7114/api/parkings/lots/",
        {
          lotId: idLot,
          name: title,
          isBlocked: checkedForPut,
          isBooked: itemBooked,
        },
        config
      )
      .then((response) => {
        alert("Парковочное место обновлено!");
        window.location.reload();
      })
      .catch((e) => alert(e.message));
  }

  const save = () => {
    setOpen(false);
    if (idLot === undefined) {
      dispatch(editNameLot({ name: name, nName: title }));
    }
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
              {idLot ? (
                <Button onClick={putLot} variant="text">
                  Сохранить
                </Button>
              ) : (
                <Button onClick={save} variant="text">
                  Сохранить
                </Button>
              )}
            </div>
          </div>
        }
      />
    </div>
  );
};

ParkCard.propTypes = {
  name: propTypes.string,
  itemBlocked: propTypes.bool,
};

export default ParkCard;
