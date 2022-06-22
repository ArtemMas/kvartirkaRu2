import React from "react";
import Cards from "../Cards/Cards";
import main from './Site.module.css'

const Site = (props) => {

    let typeOfObject = {}

    if (props.longTerm) {
        typeOfObject = props.longTerm
    } else if (props.daily) {
        typeOfObject = props.daily
    } else if (props.buy) {
        typeOfObject = props.buy
    }

    return (
        <div className={main.page}>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards typeOfObj={typeOfObject}/>
        </div>
    )
}

export default Site