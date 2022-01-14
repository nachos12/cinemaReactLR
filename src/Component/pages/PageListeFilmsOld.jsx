import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ListeDesFilms from "../afficherFilm/ListeDesFilms"
export const ListeFilms = (props) => {
    return ( 
        <Fragment>
            <h4>ListeFilms</h4>
            <ListeDesFilms/>
        </Fragment>
    )
};

export default ListeFilms;