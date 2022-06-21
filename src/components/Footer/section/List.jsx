import React from 'react';
import l from './List.module.css'
import ab from "./About.module.css";

const List = (props) => {

    return (
        <div className={l.main}>
            <h1 className={ab.h1}>{props.headline}</h1>
            <ul className={l.group}>
                <li><a href='/'>{props.name ? props.name : 'Курсив'}</a></li>
                <li><a href='/'>{props.name ? props.name : 'Курсив'}</a></li>
                <li><a href='/'>{props.name ? props.name : 'Курсив'}</a></li>
                <li><a href='/'>{props.name ? props.name : 'Курсив'}</a></li>
            </ul>
        </div>
    )
}

export default List