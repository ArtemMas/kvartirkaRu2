import React from "react";
import Cards from "../Cards/Cards";
import main from './Houses.module.css'

const Houses = (props) => {

    return (
        <div className={main.page}>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards object={props.state.houses}/>
        </div>
    )
}

export default Houses