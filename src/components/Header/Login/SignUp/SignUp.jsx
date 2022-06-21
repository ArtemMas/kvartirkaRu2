import React, {useState} from 'react';
import sUp from './SignUp.module.css';
import {Button, Form, Modal} from "react-bootstrap";
//import {NavLink, Redirect} from "react-router-dom";

const SignUp = (props) => {

    const [showSignUp, setShowSignUp] = useState(false);

    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    return (
        <div>
            <Button variant="outline-light" onClick={handleShowSignUp}>Зарегистрироваться</Button>
            <Modal fade show={showSignUp} onHide={handleCloseSignUp}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Зарегистрироваться</h5>
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
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Повторите пароль</Form.Label>
                            <Form.Control
                                type='password'
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Создать аккаунт
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SignUp;
