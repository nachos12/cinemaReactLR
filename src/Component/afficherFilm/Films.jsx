import React, { Fragment, useState,Component } from 'react'
import ListeDesFilms from './ListeDesFilms';

const Films = ({data, setData}) => {
    return (
        <Fragment>
            
                    <h3>Films</h3>
                    <ListeDesFilms films={data} setFilms={setData}/>
            
            
        </Fragment>
    )
}

export default Films;