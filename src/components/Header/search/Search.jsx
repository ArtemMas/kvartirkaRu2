import React from 'react';
import s from './Search.module.css';
import {Form, FormControl} from "react-bootstrap";
//import {NavLink} from "react-router-dom";

const Search = () => {
    return (
                <FormControl
                    type="search"
                    placeholder="Поиск квартиры"
                    className="me-2"
                    aria-label="Search"
                />
    );
}

export default Search;
