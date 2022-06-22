import React from "react";
import {Button, Dropdown, Form, ListGroup} from "react-bootstrap";
import main from "../MainPage.module.css";

const FiltersTab = (props) => {


    let truePath = ''

    let flatChange = () => {truePath = 'flats/' + props.pathName}
    let roomChange = () => {truePath = 'room/' + props.pathName}
    let bedPlaceOrSiteChange = () => {
        if (props.labelName === 'Участок') {
            truePath = 'site/' + props.pathName
        }
        else if (props.labelName === 'Койко-место') {
            truePath = 'bed-place/' + props.pathName
        }
        //
        //
        // props.labelName = 'Участок'
        // ? truePath = 'site/' + props.pathName
        // : truePath = 'bed-place/' + props.pathName
    }
    let houseChange = () => {truePath = 'houses/' + props.pathName}


    let searchPath = () => {
        window.location.assign('http://localhost:3000/' + truePath)
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Form.Check onChange={flatChange} type="checkbox" name='group1' id='default-checkbox-1' label="Квартира"/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check onChange={roomChange} type="checkbox" name='group1' id='default-checkbox-2' label="Комната"/>
                        <Form.Check onChange={bedPlaceOrSiteChange} type="checkbox" name='group1' id='default-checkbox-3' label={props.labelName}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check onChange={houseChange} type="checkbox" name='group1' id='default-checkbox-4' label="Дом, дача"/>
                    </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className={main.searchBtn} onClick={searchPath}>Найти</Button>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FiltersTab