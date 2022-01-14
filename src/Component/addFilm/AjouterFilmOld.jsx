import React, { Fragment, useState } from 'react'
    export const AjoutFilm = (props) => {
        const [film, setFilm] = useState({ titre: "", resume: "" , realisateur:""})

        const handleChangeTitre = (event) => {
            setFilm({ ...film, titre: event.target.value })
        }

        const handleChangeResume = (event) => {
            setFilm({ ...film, resume: event.target.value })
        }
        const handleChangeRealisateur = (event) => {
            setFilm({ ...film, realisateur: event.target.value })
        }
        const handleSummit = (event) => {
            event.preventDefault();
            props.children(film);
            console.log(film);
        }
        return (
            <Fragment>

              <form onSubmit={handleSummit}>
                    <div>
                        <label >Titre:
                    <input name="titre" onChange={(event) => handleChangeTitre(event)} placeholder="entrer un titre" />
                        </label>
                    </div>
                    <div>
                        <label >Resumer:
                    <input name="resume" onChange={(event) => handleChangeResume(event)} placeholder="entrer un resume" />
                        </label>
                    </div><div>
                        <label >Realisateur:
                    <input name="realisateur" onChange={(event) => handleChangeRealisateur(event)} placeholder="entrer un realisateur" />
                        </label>
                    </div>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </Fragment>
        )
    }

    export default AjoutFilm;