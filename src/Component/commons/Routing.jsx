import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min";
import Accueil from "../pages/Accueil"
import PageListeFilm from "../pages/PageAjoutFilm"
import NavBar from "./NavBar";

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
    return (
        <Fragment>
            <BrowserRouter>
                <NavBar pages={pages} />
                <Routes>
                    <Route path="/Accueil" element={<Accueil/>} />
                    <Route path="/AjoutFilm" element={<PageListeFilm/>} />
                    {/* <Route path="/FilmDetails" element={<FilmDetails/>} /> */}
{/*                     <Route path="/ListeFilms" element={<ListeFilms/>} />  
 */}                   
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}