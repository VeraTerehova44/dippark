import React from 'react';

import Youcancard from "../Youcancard/Youcancard";
import icon_booking from '../../svg/iconbooking.png'
import classes from "./Youcan.module.scss";


const Youcan = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}> Здесь вы можете </div>
            <div className={classes.section}>
                <Youcancard image={icon_booking} header="Писос" text="Любим большие арраырвмпфымрг фырвмш грвф рвшгмр ф выр"/>
                <Youcancard image={icon_booking} header="Писос" text="Любим большие арраырвмпфымрг фырвмш грвф рвшгмр ф выр"/>
                <Youcancard image={icon_booking} header="Писос" text="Любим большие арраырвмпфымрг фырвмш грвф рвшгмр ф выр"/>
                <Youcancard image={icon_booking} header="Писос" text="Любим большие арраырвмпфымрг фырвмш грвф рвшгмр ф выр"/>

            </div>

        </div>
    );
};

export default Youcan;
