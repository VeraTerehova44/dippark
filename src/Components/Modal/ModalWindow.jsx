import React, { useState } from "react";

import MyButton from "../UI/MyButton/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import classes from "./ModalWindow.module.css";
import Registration from "../Registration/Registration";




const Modal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <a onClick={handleOpen}>Зарегистрироваться</a>
            <MyModal

                open={open}
                handleClose={handleClose}
                className={classes.container}
                children={
                    <div className={classes.square}>
                        <Registration/>
                    </div>
                }

            />
        </div>
    );
};

export default Modal;
