import React from "react";
import {Modal} from "@mui/material";



const MyModal = ({ open, handleClose, children, className}) => {
    return (
        <Modal open={open} onClose={handleClose} className={className} >
            {children}
        </Modal>
    );
};

export default MyModal;
