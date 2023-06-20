import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import propTypes from "prop-types";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import MyModal from "../UI/MyModal/MyModal";
import { fetchLots } from "../../store/asyncActions/addLots";

import classes from "./ParkCardForBook.module.scss";

const ParkCardForBook = ({
  blocked,
  isBooked,
  name,
  id,
  parkId,
  setLoading,
}) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [valueTime, setValueTime] = useState(1);

  const openPlace = () => {
    if (blocked === false && isBooked === false) {
      setOpen(true);
    }
  };

  const save = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValueTime(event.target.value);
  };

  async function postBooking4() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const eDate = new Date();
    const eeDate = eDate.setMinutes(eDate.getMinutes() + valueTime);
    const a = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    const b = moment(eeDate).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    await axios
      .post(
        "https://localhost:7114/api/booking",
        {
          startBookedTime: a,
          endBookedTime: b,
          idLots: id,
        },
        config
      )
      .then((response) => {
        save();
        alert(`Место ${name} забронировано`);
        setTimeout(() => {
          dispatch(fetchLots(parkId));
        }, 1000);
      })
      .catch(() => setLoading(false));
  }

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
                <Select value={valueTime} onChange={handleChange} label="Время">
                  <MenuItem value={1}>1 минута</MenuItem>
                  <MenuItem value={2}>2 часа</MenuItem>
                  <MenuItem value={3}>3 часа</MenuItem>
                  <MenuItem value={5}>5 часов</MenuItem>
                  <MenuItem value={10}>10 часов</MenuItem>
                  <MenuItem value={12}>12 часов</MenuItem>
                </Select>
              </FormControl>
              <div className={classes.button}>
                <Button onClick={postBooking4} variant="outlined">
                  Забронировать
                </Button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

ParkCardForBook.propTypes = {
  blocked: propTypes.bool,
  isBooked: propTypes.bool,
  name: propTypes.string,
  id: propTypes.number,
};

export default ParkCardForBook;
