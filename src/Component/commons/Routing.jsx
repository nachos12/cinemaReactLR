import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min";
import Accueil from "../pages/Accueil"
import PageAddFilm from "../addFilm/addFilm"
import NavBar from "./NavBar";
import Films from "../afficherFilm/Films"
import filmsData from "../db/db"
import React, {useState} from 'react';

let pages = [
    {
        to: "/Accueil",
        nom :"Accueil"
    },
    {
        to: "/AjoutFilm",
        nom :"AjoutFilm"
    },
    // {
    //     to: "/FilmDetails",
    //     nom :"FilmDetails"
    // },
    {
        to: "/ListeFilms",
        nom :"ListeFilms"
    },
]

export const Routing = (props) => {
    const [data, setData] = useState(filmsData)

    return (
        <Fragment>
            <BrowserRouter>
                <NavBar pages={pages} />
                <Routes>
                    <Route path="/Accueil" element={<Accueil/>} />
                    <Route path="/AjoutFilm" element={<PageAddFilm data={data} setData={setData}/>} />
                    <Route path="/ListeFilms" element={<Films/>} />  
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}