import React from "react";
import MyButton from "../../../UI/MyButton/MyButton";
import { Button } from "@mui/material";

import classes from "./Logout.module.scss";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navigate = useNavigate();

  const back = () => {
    navigate(`/profile`);
  };
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.title}>Вы уверены, что хотите выйти?</div>
        <div className={classes.buttons}>
          <div>
            <Button onClick={logout} variant="outlined">
              Да
            </Button>
          </div>
          <div>
            <Button onClick={back} variant="outlined">
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
