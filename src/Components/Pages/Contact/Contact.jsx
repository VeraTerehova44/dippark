import React from 'react';

import classes from "./Contact.module.css";


const Contact = () => {
    return (
        <div className={classes.section}>
            <div className={classes.contact}>
                <div className={classes.section_header}>
                    <div className={classes.header}>Связь с нами</div>
                    <div className={classes.text}>
                        <p>На нашем сайте вы можете связаться с сотрудниками данного сервиса
                            бронирования парковочных мест. Наводя на фотографию выбранного работника
                            Вы сможете нажать на иконку соц.сети или почты и перейти на нужную страницу.
                        </p>
                    </div>
                </div>

                <div className={classes.card}>

                </div>

            </div>
        </div>
    );
};

export default Contact;
