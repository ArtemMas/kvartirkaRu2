import React from 'react';
import ab from './About.module.css';
import List from "./List";

const About = () => {

    return (
        <div className={ab.main}>
            <List headline='О нас'/>
        </div>
    )
}

export default About