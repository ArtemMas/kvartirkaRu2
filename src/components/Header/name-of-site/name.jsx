import React from 'react';
import na from './name.module.css';
import {Navbar} from "react-bootstrap";

const Name = () => {
   return (
       <Navbar.Brand href="/mainpage" className={na.net}>
          <span className={na.ar}>Квартирка</span>
          <span className={na.nw}>.ру</span>
       </Navbar.Brand>
   )
}

export default Name;
