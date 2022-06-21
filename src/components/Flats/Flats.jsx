import React from "react";
import Cards from "../Cards/Cards";
import main from './Flats.module.css'

const Flats = (props) => {

    return (
        <div className={main.page}>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards object={props.state.flats}/>
        </div>
    )
}

export default Flats