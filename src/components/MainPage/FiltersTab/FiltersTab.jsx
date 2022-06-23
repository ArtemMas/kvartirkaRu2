import React from "react";
import {Button, Dropdown, Form, ListGroup} from "react-bootstrap";
import main from "../MainPage.module.css";

const FiltersTab = (props) => {


    let typeOfAction = ''
    let flatChange = () => { props.dispatch({ type: 'FLATS', pathName: props.pathName})}
    let roomChange = () => { props.dispatch({ type: 'ROOMS', pathName: props.pathName})}
    let bedPlaceOrSiteChange = () => {
        debugger
        if (props.labelName === 'Участок') {
            typeOfAction = 'SITE'
        } else if (props.labelName === 'Койко-место') {
            typeOfAction = 'BED-PLACE'
        }
        props.dispatch({ type: typeOfAction, pathName: props.pathName})}
    let houseChange = () => { props.dispatch({ type: 'HOUSES', pathName: props.pathName})}

        // , (e) => setChecked(e.currentTarget.checked)




    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Form.Check checked={props.flatsCheck} onChange={flatChange} type="checkbox" name='group1' id='default-checkbox-1' label="Квартира"/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check onChange={roomChange} type="checkbox" name='group1' id='default-checkbox-2' label="Комната"/>
                        <Form.Check onChange={bedPlaceOrSiteChange} type="checkbox" name='group1' id='default-checkbox-3' label={props.labelName}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check onChange={houseChange} type="checkbox" name='group1' id='default-checkbox-4' label="Дом, дача"/>
                    </ListGroup.Item>
                </ListGroup>
                {/*<Button variant="primary" className={main.searchBtn}*/}
                {/*        onClick={searchPath}>Найти</Button>*/}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FiltersTab