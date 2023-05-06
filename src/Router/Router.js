import React from "react";

import Auth from "../Components/Pages/Auth/Auth";
import MainWindow from "../Components/Pages/MainWindow/MainWindow";
import ErrorPage from "../Components/Pages/ErrorPage";


export const mainRoutes = [
    {path: "/", element: MainWindow, exact: true},
    {path: "/Error", element: ErrorPage, exact: true}
]
export const authRoutes = [
    {path: "/Auth", element: Auth, exact: true},
]


