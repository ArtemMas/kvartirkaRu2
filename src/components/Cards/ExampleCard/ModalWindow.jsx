import React from "react";
import {Button, Modal} from "react-bootstrap";
import mod from './ExampleCard.module.css'
import ExampleCarousel from "./elements/ExampleCarousel";

const ModalWindow = (props) => {

    return (
        <Modal
            {...props}
            nameOfAd={props.nameOfAd}
            size="xl"
            aria-labelledby="staticBackdropLabel"
            backdrop="static" keyboard="false" tabindex="-1"
            aria-hidden="true"
            scrollable='true'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.nameOfAd ? props.nameOfAd : 'Название объявления'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ExampleCarousel/>
                <h2 className="display-6 title">О квартире</h2>
                <dl className="row">
                    <dt className="col-sm-3">Количество комнат:</dt>
                    <dd className="col-sm-9">3 комнаты.</dd>
                    <dt className="col-sm-3">Этаж:</dt>
                    <dd className="col-sm-9">
                        <p>2 из 10.</p>
                    </dd>
                    <dt className="col-sm-3">Бытовая техника:</dt>
                    <dd className="col-sm-9">холодильник, плита, микроволновка, стиральная машина, телевизор, фен,
                        утюг.
                    </dd>
                    <dt className="col-sm-3 text-truncate">Интернет и ТВ:</dt>
                    <dd className="col-sm-9"> Wi-Fi, телевидение.</dd>
                </dl>
                <h2 className="display-6">Описание</h2>
                <p> Однокомнатная квартира со всеми удобствами!
                    На куxнe пpедоcтaвлены все принaдлежнoсти: в пеpвую oчepeдь для пpигoтoвлeниe eды и пpиёма пищи,
                    чайник, микровoлновaя печь, плитa, xoлoдильник и вся нeобxoдимaя посуда
                    🎛🍵🍽🍴🍷🍸🍹🍺🥄🔪🥗🥣🍲🥘🍳</p>

                <ul className="list">
                    <li>This is a list.</li>
                    <li>It appears completely unstyled.</li>
                    <li>Structurally, it's still a list.</li>
                    <li>However, this style only applies to immediate child elements.</li>
                    <li>Nested lists:
                        <ul>
                            <li>are unaffected by this style</li>
                            <li>will still show a bullet</li>
                            <li>and have appropriate left margin</li>
                        </ul>
                    </li>
                    <li>This may still come in handy in some situations.</li>
                </ul>
                <p>💥 БУДЕМ РАДЫ ВАС ЗАСЕЛИТЬ</p>
                <h2 className="display-6 title">Расположение</h2>
                <div className={mod.location}>
                    <a href="https://yandex.ru/maps/org/rtu_mirea/1026238431/?utm_medium=mapframe&utm_source=maps"
                       className={mod.loc1}>РТУ МИРЭА</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
                       className={mod.loc2}>Учебный центр в Москве</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps"
                       className={mod.loc3}>Дополнительное образование в Москве</a>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCUJELRhLB" width="700" height="300" frameBorder="1"
                            allowFullScreen="true" className={mod.loc4}></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                    <dl className="row ">
                        <dt><h1 className='display-6 col-sm-3'>Контакты</h1></dt>
                        <dt className="col-sm-3 text-truncate">ФИО</dt>
                        <dd className="col-sm-9">Матвеев Артём Андреевич</dd>
                        <dt className="col-sm-3">Номер телефона:</dt>
                        <dd className="col-sm-9">
                            <a className={mod.a} href="tel:+79163621682"> +7-916-362-16-82</a>
                        </dd>
                        <dt className="col-sm-3">Почта:</dt>
                        <dd className="col-sm-9">
                            <a className={mod.a} href="mailto:reackman@yandex.ru">reackman@yandex.ru</a>
                        </dd>
                        <dt className="col-sm-3">WhatsApp:</dt>
                        <dd className="col-sm-9">есть</dd>
                        <dt className="col-sm-3 text-truncate">Telegram:</dt>
                        <dd className="col-sm-9">есть</dd>
                    </dl>
                <Button variant='dark' onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow