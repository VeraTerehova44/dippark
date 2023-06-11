import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ParkingCard.module.scss";

const ParkingCard = ({ name, description, address, id, photo }) => {
  const [file, setFile] = useState(photo);
  const [preview, setPreview] = useState();
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
    <div className={classes.container}>
      <div
        className={classes.photo}
        style={{ backgroundImage: "url(" + preview + ")" }}
      >
        <img src={photo} />
      </div>
      <div className={classes.section}>
        <div className={classes.description}>
          <div className={classes.description_text}>{name}</div>
          <div className={classes.description_text}>{description}</div>
          <div className={classes.description_text}>{address}</div>
        </div>
        <div className={classes.section_button}>
          <Link className={classes.button} to={`/parking/${id}`}>
            Просмотр парковки
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
