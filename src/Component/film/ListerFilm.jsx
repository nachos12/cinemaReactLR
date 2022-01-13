import React, { Fragment, useState } from 'react'
import  AjoutFilm  from './AjouterFilm'


export const ListeFilms = () => {
    const [ListeFilms, setListeFilms] = useState([])

    
    const handleAjoutFilm = (film) => {
        setListeFilms([...ListeFilms, film])
    }

    return (
        <Fragment>
                <AjoutFilm>
                    {handleAjoutFilm}
                </AjoutFilm>
        </Fragment>
    )
}

export default ListeFilms;