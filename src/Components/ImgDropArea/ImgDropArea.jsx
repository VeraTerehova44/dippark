import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addParking } from "../../store/action";
import { useNavigate } from "react-router-dom";

import MyButton from "../UI/MyButton/MyButton";

import classes from "./ImgDropArea.module.scss";

const ImgDropArea = ({ name, address }) => {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    setDrag(false);
    const files = [...e.dataTransfer.files];
    setFile(files[0]);
  }

  const addPark = () => {
    const parking = { name: name, address: address, image: file };
    dispatch(addParking(parking));
    navigate(`/newparking/sadmingrid`);
  };

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
              <div className={classes.image}>
                <img className={classes.image} src={preview} />
                <div className={classes.text_drop}>drop here</div>
              </div>
            </div>
          )}
        </div>
        <div className={classes.form}>
          <MyButton onClick={addPark} children={"Далее"} />
        </div>
      </div>
    </div>
  );
};

ImgDropArea.propTypes = {
  name: propTypes.string,
  address: propTypes.string,
};

export default ImgDropArea;
