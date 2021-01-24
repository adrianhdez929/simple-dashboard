import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { appsMock } from '../mocks';


export default function DashboardApps() {
    return(
	<>
        <Col xs={10}>
        { appsMock.map((card, index) => {
            return(
        <Card className="mx-3 my-3">
            <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/802435203477667860/802625866948673567/redmine.png" 
                style={{ height: '150px', width: '150px'}}
            />
            <Card.Body>
                <Card.Text>
                    { card.description }
                </Card.Text>
                <Button variant="primary" clasName="mx-4">Modificar</Button>
                <Button variant="danger" className="mx-4">Eliminar</Button>
            </Card.Body>
        </Card>
            )
        })
        }
        </Col>
	</>
    );
}

