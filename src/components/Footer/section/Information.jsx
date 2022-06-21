import React from 'react';
import inf from './Information.module.css';
import List from "./List";

const Information = () => {

    return (
        <div className={inf.main}>
            <List headline='Информация'/>
        </div>
    )
}

export default Information