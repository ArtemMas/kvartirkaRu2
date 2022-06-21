import React from 'react';
import filt from './Filters.module.css';
import {Button, Dropdown} from "react-bootstrap";
//import {NavLink} from "react-router-dom";

const Filters = () => {
    return (
                <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                        Фильтры
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/houses">Дом</Dropdown.Item>
                        <Dropdown.Item href="/flats">Квартира</Dropdown.Item>
                        <Dropdown.Item href="#/buy">Покупка</Dropdown.Item>
                        <Dropdown.Item href="#/daily">Посуточно</Dropdown.Item>
                        <Dropdown.Item href="#/longterm">Аренда</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
    );
}

export default Filters;
