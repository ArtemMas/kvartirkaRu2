import React from 'react';
import h from './Help.module.css';
import List from "./List";

const Help = () => {

    return (
        <div className={h.main}>
            <List headline='Помощь'/>
        </div>
    )
}

export default Help