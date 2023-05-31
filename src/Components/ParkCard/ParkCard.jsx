import React, { useState } from "react";
import classes from "./ParkCard.module.scss";
import MyModal from "../UI/MyModal/MyModal";
import Registration from "../Registration/Registration";
import { Switch } from "@mui/material";
import MyButton from "../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { editBlocked } from "../../store/action";

const ParkCard = ({ name, itemBlocked, id, parkingId }) => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const brodus = () => {
    check ? setCheck(false) : setCheck(true);
    console.log(check);
  };

  const dispatch = useDispatch();

  const save = () => {
    dispatch(editBlocked({ id: id, parkingId: parkingId, newState: check }));
  };

  return (
    <div className={classes.park_item} onClick={handleOpen}>
      <div className={classes.title}>Паркововчное место: {name}</div>
      <div
        style={itemBlocked ? { background: "red" } : { background: "green" }}
      >
        {itemBlocked ? "Доступно" : "Не доступно"}
      </div>
      <MyModal
        open={open}
        handleClose={handleClose}
        className={classes.modal_container}
        children={
          <div className={classes.settings}>
            А я работаю {name} {id}
            <div>
              <Switch defaultChecked onChange={brodus} />
              <MyButton onClick={save} children="Заблокировать" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ParkCard;
