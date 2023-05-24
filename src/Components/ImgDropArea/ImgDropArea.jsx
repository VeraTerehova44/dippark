import React, { useState } from "react";

import classes from "./ImgDropArea.module.scss";
import axios from "axios";
import MyButton from "../UI/MyButton/MyButton";

const ImgDropArea = ({ text }) => {
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState(null);

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
    console.log(files);
    const formData = new FormData();
    formData.append("photo", files[0]);
    setFiles(files[0]);
  }

  async function imgPost() {
    console.log(files);
    await axios.post("url", files).then((response) => {
      console.log(response);
    });
  }

  return (
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
        <MyButton children={"Отправить фото"} onClick={imgPost} />
      </div>
    </div>
  );
};

export default ImgDropArea;
