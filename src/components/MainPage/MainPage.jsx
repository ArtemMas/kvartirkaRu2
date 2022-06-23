import React from "react";
import Cards from "../Cards/Cards";
import main from './MainPage.module.css'
import {Button, ListGroup} from "react-bootstrap";
import FiltersTab from "./FiltersTab/FiltersTab";
import CardsContainer from "../Cards/CardsContainer";

const MainPage = (props) => {
    debugger
    let searchPath = () => {
        props.dispatch({type: 'SEARCH-PATH'})
    }

    return (
        <div className={main.page}>
            <div className={main.firstTable}>
                <div className={main.list}>
                    <ListGroup horizontal className="justify-content-md-center">
                        <ListGroup.Item>
                            <FiltersTab flatsCheck={props.flatsCheck} labelName='Участок' pathName='buy' name='Купить'
                                        truePath={props.truePath} dispatch={props.dispatch}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <FiltersTab flatsCheck={props.flatsCheck} labelName='Койко-место' pathName='long-term' name='Снять'
                                        truePath={props.truePath} dispatch={props.dispatch}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <FiltersTab flatsCheck={props.flatsCheck} labelName='Койко-место' pathName='daily' name='Посуточно'
                                        truePath={props.truePath} dispatch={props.dispatch}/>
                        </ListGroup.Item>
                        <Button variant="primary" className={main.searchBtn} onClick={searchPath}>Найти</Button>
                    </ListGroup>
                </div>
            </div>
            <h1 className={main.title}>Лучшие предложения</h1>
            <Cards typeOfObj={props.ads}/>
        </div>
    )
}

export default MainPage