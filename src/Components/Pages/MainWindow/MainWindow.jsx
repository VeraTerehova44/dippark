import React from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import classes from "./MainWindow.module.scss";
import Navbar from "../../Navbar/Navbar";
import MyButton from "../../UI/MyButton/MyButton";
import Contact from "../Contact/Contact";
import Youcan from "../../Youcan/Youcan";
import Howwork from "../../Howwork/Howwork";
import Map from "../../Map/Map";



const MainWindow = () => {
    const { scrollYProgress } = useScroll();
    const { scrollY } = useScroll();
    console.log(scrollY);




    return (
        <div>
            <div className={classes.background}>
                <Navbar/>
                <div className={classes.container}>
                    <div className={classes.left_container}>
                        <div className={classes.text}>
                            <div className={classes.skypark}>SKYPARKING</div>
                            <div className={classes.description}>удобный сервис бронирования парковочных мест</div>
                            <div className={classes.button}>
                                <MyButton>Найти парковку</MyButton>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right_container}>
                        <div className={classes.car}></div>
                    </div>
                </div>

            </div>
            <div className={classes.about}>
                <div className={classes.rectangle}>
                    <div className={classes.about_text}>О НАС</div>
                </div>
                <div className={classes.container_car}>
                    <motion.div className={classes.motion_car} style={{}}></motion.div>
                </div>
                <div className={classes.bottom_line}></div>
            </div>

            <Youcan/>
            <Howwork/>
            <Map/>
            <Contact/>



        </div>



    );
};

export default MainWindow;
