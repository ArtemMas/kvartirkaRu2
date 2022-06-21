import React from 'react';
import im from './image.module.css';
import icon from '../../../assets/images/icon.png'

const Image = () => {
   return (
      <div className={im.divImStyle}>
          <a href="/mainpage">
            <img className={im.ima} src={icon} alt=""/>
          </a>
      </div>
      )
}
export default Image;
