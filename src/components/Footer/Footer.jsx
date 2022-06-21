import React from 'react';
import fo from './Footer.module.css';
import Information from "./section/Information";
import Help from "./section/Help";
import About from "./section/About";
import Other from "./section/Other";
import Social from "./section/Social";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {

    return (
        <div className={fo.main}>
            <Container className={fo.cont}>
                <Row xs={1} md={2} xl={4} className='justify-content-md-center' >
                    <Col><Information/></Col>
                    <Col><Help/></Col>
                    <Col><About/></Col>
                    <Col><Other/></Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Social/>
                </Row>
            </Container>
        </div>
    )
}

export default Footer