import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function LoginForm() {
    return(
	<>
        <Container>
            <Row className="justify-content-center">
                <Col xs={4} sm={2}>
                    <h3>Sign In</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} sm={4}>
                    <Form className="border border-color-dark rounded py-2">
                        <Form.Group className="px-3">
                            <Form.Label htmlfor="username">Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="px-3">
                            <Form.Label htmlfor="username">Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="password" />
                        </Form.Group>
                        <Form.Group className="px-5">
                            <Button variant="primary" type="submit" block>Sign In</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
	</>
    );
}

