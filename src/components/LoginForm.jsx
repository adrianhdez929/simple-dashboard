import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { authMock } from '../mocks';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../types';


function LoginForm(props) {
    const { isAuthenticated } = props;
    const dispatch = useDispatch();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function login() {
        if (username === authMock.username && password === authMock.password) {
            dispatch({
                type: LOGIN_SUCCESS,
            });
        }
        else {
            dispatch({
                type: LOGIN_FAILED,
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        login();
    }    
    

    if (isAuthenticated) {
        return <Redirect to='/dashboard/aplicaciones' />
    }

    return(
	<>
        <Container>
            <Row className="justify-content-center">
                <Col xs={6} sm={2}>
                    <h3>Sign In</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} sm={4}>
                    <Form className="border border-color-dark rounded py-2" onSubmit={ handleSubmit }>
                        <Form.Group className="px-3">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Username" onChange={ (event) => setUsername(event.target.value) } />
                        </Form.Group>
                        <Form.Group className="px-3">
                            <Form.Label htmlFor="username">Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={ (event) => setPassword(event.target.value) } />
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

const mapStateToProps = ({ isAuthenticated }) => ({
    isAuthenticated
});

export default withRouter(connect(mapStateToProps)(LoginForm))
