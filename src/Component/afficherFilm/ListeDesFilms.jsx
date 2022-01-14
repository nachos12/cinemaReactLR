import React,{Fragment} from 'react';

const FilmsList = ({films, setFilms, ...props}) => {
    return (
        <Fragment>
            
                    <h2>list des films </h2>
                        {films.map((film, index) => {
                                return (
                                           <><h5>{film.titre}  {film.realisateur}</h5>
                                           <p>resume: {film.resume}</p></>
                                )
                            })
                        }
                    
                
           
        </Fragment>
    )
}

export default FilmsList;