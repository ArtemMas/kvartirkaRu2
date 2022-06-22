import React, {useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import ec from './ExampleCard.module.css'
import ModalWindow from "./ModalWindow";

const ExampleCard = (props) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={ec.card}>
            <Col className={ec.column}>
                <Card style={{ width: '18rem' }} className={ec.obj}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.nameOfCard}</Card.Title>
                        <Card.Title>{props.price}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setModalShow(true)}>Читать далее</Button>

                    </Card.Body>
                </Card>
            </Col>
            <ModalWindow
                nameOfAd={props.nameOfCard}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ExampleCard