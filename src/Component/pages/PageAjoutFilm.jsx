import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ListerFilms from "../addFilm/ListerFilm";

export const FilmDetails = (props) => {
    return ( 
        <Fragment>
            <p>ceci compose page AjouterFilm</p>
            <ListerFilms/>
        </Fragment>
    )
};

export default FilmDetails;