import React from "react";
import ExampleCard from "./ExampleCard/ExampleCard";
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import cs from './Cards.module.css'
import {Container, Row} from "react-bootstrap";

const Cards = (props) => {

    debugger
    // let adElements = [...props.typeOfObj]
    //     .map(obj => <ExampleCard key={obj.longTerm.id} nameOfCard={obj.longTerm.nameOfAd} price={obj.longTerm.price} img={img1}/>)


    return (
        <div className={cs.cards}>
            <Container>
                <Row xs={1} md={2} xl={4} className="justify-content-md-center">
                    <ExampleCard nameOfCard={props.typeOfObj[0].nameOfAd} price={props.typeOfObj[0].price} img={img1}/>
                    <ExampleCard nameOfCard={props.typeOfObj[1].nameOfAd} price={props.typeOfObj[1].price} img={img2}/>
                    <ExampleCard nameOfCard={props.typeOfObj[2].nameOfAd} price={props.typeOfObj[2].price} img={img3}/>
                    <ExampleCard nameOfCard={props.typeOfObj[3].nameOfAd} price={props.typeOfObj[3].price} img={img1}/>
                    {/*<div>{adElements}</div>*/}
                </Row>
                <Row xs={1} md={2} xl={4} className="justify-content-md-center">
                    <ExampleCard nameOfCard={props.typeOfObj[4].nameOfAd} price={props.typeOfObj[0].price} img={img2}/>
                    <ExampleCard nameOfCard={props.typeOfObj[5].nameOfAd} price={props.typeOfObj[1].price} img={img3}/>
                    <ExampleCard nameOfCard={props.typeOfObj[6].nameOfAd} price={props.typeOfObj[2].price} img={img1}/>
                    <ExampleCard nameOfCard={props.typeOfObj[7].nameOfAd} price={props.typeOfObj[3].price} img={img2}/>
                    {/*<div>{adElements}</div>*/}
                </Row>
            </Container>
        </div>
    )
}

export default Cards