import React, { useEffect, useState } from "react";

import classes from "./ImgDropArea.module.scss";

import MyButton from "../UI/MyButton/MyButton";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../../store/action";
import axios from "axios";

const ImgDropArea = ({ text }) => {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const items = useSelector((state) => state.newParkReducer.PARKING);
  const dispatch = useDispatch();

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  const formData = new FormData();

  function onDropHandler(e) {
    e.preventDefault();
    setDrag(false);
    const files = [...e.dataTransfer.files];
    setFile(files[0]);
  }

  const test12 = () => {
    dispatch(addPhoto({ id: items[items.length - 1].id, photo: file }));
  };

  const test122 = () => {
    formData.append("ParkId", 7853);
    formData.append("Image", file);
    formData.append("Name", "Парковка");
    formData.append("Adress", "пизда");
    formData.append("Row", 6);
    formData.append("Column", 3);
  };
  const test1formdata = () => {
    console.log(formData);
    console.log(formData.get("Row"));
    console.log(formData.get("Name"));
    console.log(formData.get("ParkId"));
    console.log(formData.get("Image"));
  };

  async function postPark1() {
    await axios
      .post("https://localhost:7114/api/parkings/parks", formData)
      .then((response) => {
        alert("Успешно");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Ошибка");
      });
  }

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className={classes.main_container}>
      <div className={classes.preview}>
        <div className={classes.image}>
          <img src={preview} />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.title}>
          {drag ? (
            <div>Отпустите файлы в зону ниже</div>
          ) : (
            <div>Перетащите файлы в зону ниже</div>
          )}
        </div>
        <div className={classes.container_drop}>
          {drag ? (
            <div
              className={classes.drop_area_done}
              onDragStart={(e) => dragStartHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDrop={(e) => onDropHandler(e)}
            >
              drop here
            </div>
          ) : (
            <div
              className={classes.drop_area}
              onDragStart={(e) => dragStartHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
            >
              drop here
            </div>
          )}
          <MyButton onClick={test12} children={"Сохранить фото"} />
          <MyButton onClick={test122} children={"jkdfjede"} />
          <MyButton onClick={test1formdata} children={"test1formdata"} />
          <MyButton onClick={postPark1} children={"ПОСТ"} />
        </div>
      </div>
    </div>
  );
};

export default ImgDropArea;
