import React, {useState} from 'react';
import l from './Login.module.css';
import {Button, Form, Modal} from "react-bootstrap";

const Login = (props) => {

    const [showLogIn, setShowLogIn] = useState(false);

    const handleCloseLogIn = () => setShowLogIn(false);
    const handleShowLogIn = () => setShowLogIn(true);

    return (
        <div>
            <Button variant="outline-light" onClick={handleShowLogIn}>Войти</Button>
            <Modal fade show={showLogIn} onHide={handleCloseLogIn}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Вход в личный кабинет</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Адрес электронной почты</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type='password'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Войти
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;
