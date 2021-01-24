import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';


export default function DashboardNav(props) {
    return(
	<>
        <Row className="justify-content-center border">
            <Nav
                variant="pills"
                activeKey={ props.location.pathname }
                onSelect={ (selectedKey) => props.history.push(selectedKey) }        
            >
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/aplicaciones">Aplicaciones</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/disponibles">Disponibles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/usuarios">Usuarios</Nav.Link>
                </Nav.Item>
            </Nav>
        </Row>        
	</>
    );
}

