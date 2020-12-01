import React from "react";
import "./Forms.css"
import { Form, Col, Row, Button } from "react-bootstrap";

const Forms = () => {
    return (

        <div id="form">
            <Form>
                <Form.Group className="formGroup">
                    <Form.Label>Full Name</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control required placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control required placeholder="Last name" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="formGroup" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="formGroup" as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        <Form.Label>Sex</Form.Label>
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                    </Col>
                </Form.Group>
                <Form.Group className="formGroup" controlId="exampleForm">
                    <Row>
                        <Col>
                            <Form.Label>Adress</Form.Label>
                            <Form.Control required type="text" placeholder="address" />
                        </Col>
                        <Col>
                            <Form.Label>City</Form.Label>
                            <Form.Control required as="select">
                                <option>choose a city</option>
                                <option>Tunis</option>
                                <option>Ariana</option>
                                <option>Ben Arous</option>
                                <option>Manouba</option>
                                <option>Nabeul</option>
                                <option>Zaghouan</option>
                                <option>Bizerte</option>
                                <option>Beja</option>
                                <option>Jandouba</option>
                                <option>Kef</option>
                                <option>Siliana</option>
                                <option>Sousse</option>
                                <option>Monastir</option>
                                <option>Mahdia</option>
                                <option>Sfax</option>
                                <option>Kairouan</option>
                                <option>Kasserine</option>
                                <option>Sidi Bouzid</option>
                                <option>Gabes</option>
                                <option>Mednine</option>
                                <option>Tataouine</option>
                                <option>Gafsa</option>
                                <option>Tozeur</option>
                                <option>Kebili</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>ZIP code</Form.Label>
                            <Form.Control required type="number" placeholder="ZIP code" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="formGroup" as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 0 }}>
                        <Form.Check label="I agree with the terms and conditions" />
                    </Col>
                </Form.Group>
                <Button type="submit" variant="outline-secondary">Submit</Button>{' '}
            </Form>
        </div>
    );
}

export default Forms;