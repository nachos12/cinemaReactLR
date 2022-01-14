import React,{Fragment,useState} from "react";

const AddFilm = (props) => {
    
    const [film, setFilm] = useState({ titre: "", resume: "" , realisateur:""})

    const handleChangeTitre = (event) => {
        setFilm({titre: event.target.value,resume: film.resume, realisateur: film.realisateur})
    }

    const handleChangeResume = (event) => {
        setFilm({titre: film.titre,resume: event.target.value, realisateur: film.realisateur})
    }
    const handleChangeRealisateur = (event) => {
        setFilm({titre: film.titre,resume: film.resume, realisateur: event.target.value})
    }
    const handleSummit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(film)
        props.setData({...props.data, film})
        
    }
    return (
        <Fragment>
nouveau test
          <form onSubmit={handleSummit}>
                <div>
                    <label >Titre:
                <input name="titre"  onChange={(event) => handleChangeTitre(event)} placeholder="entrer un titre" />
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

export default AddFilm;
