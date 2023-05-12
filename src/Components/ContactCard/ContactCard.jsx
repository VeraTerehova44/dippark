import React from 'react';

import classes from "./ContactCard.module.scss";

const ContactCard = ({name, job, image}) => {
    return (
        <div className={classes.card}>

            <div className={classes.img}>
                <img src={image}/>
            </div>
            <div className={classes.name}>{name}</div>
            <div className={classes.job}>{job}</div>
        </div>
    );
};

export default ContactCard;
