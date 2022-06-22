import React from "react";
import Cards from "../Cards/Cards";
import main from './MainPage.module.css'
import {Button, ListGroup} from "react-bootstrap";
import FiltersTab from "./FiltersTab/FiltersTab";
import CardsContainer from "../Cards/CardsContainer";

const MainPage = (props) => {
    debugger
    let truePath = () => {
        window.location.assign('http://localhost:3000/')
    }

    return (
        <div className={main.page}>
            <div className={main.firstTable}>
                <div className={main.list}>
                    <ListGroup horizontal className="justify-content-md-center">
                        <ListGroup.Item>
                            <FiltersTab labelName='Участок' pathName='buy' name='Купить'/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <FiltersTab labelName='Койко-место' pathName='long-term' name='Снять'/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <FiltersTab labelName='Койко-место' pathName='daily' name='Посуточно'/>
                        </ListGroup.Item>
                        <Button variant="primary" className={main.searchBtn} onClick={truePath}>Найти</Button>
                    </ListGroup>
                </div>
            </div>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards typeOfObj={props.state}/>
        </div>
    )
}

export default MainPage