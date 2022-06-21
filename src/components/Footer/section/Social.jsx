import React from 'react';
import soc from './Social.module.css';
import inst from "../../../assets/images/instagram.png"
import tg from "../../../assets/images/telegram.png"
import vk from "../../../assets/images/vk.png"
import yt from "../../../assets/images/youtube.png"

const Social = () => {

    return (
        <div className={soc.main}>
            <h2 className={soc.h1}>Наши соцсети:</h2>
            <a href="https://www.instagram.com/" target="_blank"><img className={soc.logo} src={inst}/></a>
            <a href="https://web.telegram.org/" target="_blank"><img className={soc.logo} src={tg}/></a>
            <a href="https://vk.com/" target="_blank"><img className={soc.logo} src={vk}/></a>
            <a href="https://youtube.com/" target="_blank"><img className={soc.logo} src={yt}/></a>
            <span>© 2021—2022 квартирка.ру — сделано в России. Посуточная аренда жилья с гарантией заселения.</span>
        </div>
    )
}

export default Social