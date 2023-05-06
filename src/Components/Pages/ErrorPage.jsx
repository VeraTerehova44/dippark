import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Link to="/">
                Назад
            </Link>

            <div>Такой страницы пока не существует(</div>
        </div>
    );
};

export default ErrorPage;
