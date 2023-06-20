import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, TextField } from "@mui/material";
import MyModal from "../UI/MyModal/MyModal";

import classes from "./ConfigParkingCard.module.scss";
import propTypes from "prop-types";
import { string } from "prop-types";

const ConfigParkingCard = ({ name, address, id, image }) => {
  const [parkName, setParkName] = useState(name);
  const [parkAddress, setParkAddress] = useState(address);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const toLots = () => {
    navigate(`/configparking/configlots/${id}`);
  };

  const openPlace = () => {
    setOpen(true);
  };

  const save = () => {
    setOpen(false);
  };

  async function deletePark() {
    await axios
      .delete(`https://localhost:7114/api/parkings/parks/${id}`, config)
      .then((response) => {
        alert("Парковка удалена");
        window.location.reload();
      });
  }

  async function putParking() {
    const binaryData = atob(image);
    const byteArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      byteArray[i] = binaryData.charCodeAt(i);
    }
    const file = new File([byteArray], "image.png", { type: "image/png" });
    const formData = new FormData();
    formData.append("ParkId", id);
    formData.append("Name", parkName);
    formData.append("Adress", parkAddress);
    formData.append("Image", file);

    await axios
      .put("https://localhost:7114/api/parkings/parks", formData, config)
      .then((response) => alert("Изменения сохранены"))
      .catch((error) => console.log(error));
  }

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img
          className={classes.image_size}
          src={`data:image/jpeg;base64,${image}`}
        />
      </div>
      <div className={classes.data}>
        <div className={classes.text}>{parkName}</div>
        <div className={classes.text}>{parkAddress}</div>
      </div>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={openPlace}
          variant="outlined"
        >
          Изменить парковку
        </Button>
        <Button className={classes.button} onClick={toLots} variant="outlined">
          Изменить места
        </Button>
      </div>

      <MyModal
        open={open}
        handleClose={save}
        children={
          <div className={classes.container_modal}>
            <div className={classes.modal}>
              <div className={classes.form}>
                <div className={classes.input}>
                  <TextField
                    className={classes.element}
                    label="Название"
                    variant="standard"
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                  />
                </div>
                <div className={classes.input}>
                  <TextField
                    className={classes.element}
                    label="Адрес"
                    variant="standard"
                    value={parkAddress}
                    onChange={(e) => setParkAddress(e.target.value)}
                  />
                </div>
                <div className={classes.input}>
                  <Button
                    className={classes.element}
                    onClick={putParking}
                    variant="outlined"
                  >
                    Сохранить
                  </Button>
                </div>
                <div className={classes.input}>
                  <Button
                    className={classes.element}
                    variant="outlined"
                    color="error"
                    onClick={deletePark}
                  >
                    Удалить парковку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

ConfigParkingCard.propTypes = {
  name: propTypes.string,
  address: propTypes.string,
  id: propTypes.number,
  image: propTypes.string,
};

export default ConfigParkingCard;
