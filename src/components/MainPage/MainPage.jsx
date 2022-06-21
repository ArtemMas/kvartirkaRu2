import React from "react";
import Cards from "../Cards/Cards";
import main from './MainPage.module.css'

const MainPage = (props) => {

    return (
        <div className={main.page}>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards object={props.state.best}/>
        </div>
    )
}

export default MainPage