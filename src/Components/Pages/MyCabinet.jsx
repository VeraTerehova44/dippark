import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../../Context";
import Navbar from "../Navbar/Navbar";

const MyCabinet = () => {

    const {setAuth} = useContext(AuthContext);

    const logout = event => {
        event.preventDefault();
        setAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div>
            <Navbar/>
            <div>
                <Link to="/"> LOGO </Link>
            </div>
            Добро пожаловать! вы в личном кабинете.
            <MyButton onClick={logout} children="Выйти"></MyButton>
        </div>
    );
};

export default MyCabinet;
