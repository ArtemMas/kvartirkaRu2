import React from 'react';
import he from './Header.module.css';
import Image from "./name-of-site/image";
import Name from "./name-of-site/name";
import Login from "./Login/LogIn/Login";
import Search from "./search/Search";
import Filters from "./filters/Filters";
import SignUp from "./Login/SignUp/SignUp";
import SearchBtn from "./search/SearchBtn";
import {Container, Form, Nav, Navbar} from "react-bootstrap";

const Header = () => {

    return (
        <Navbar expand="lg" className={he.header}>
            <Container fluid>
                <Image/>
                <Name/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Login/>
                        <SignUp/>
                        <Filters/>
                    </Nav>
                    <Form className="d-flex">
                        <Search/>
                        <SearchBtn/>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header