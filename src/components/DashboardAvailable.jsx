import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { appsMock } from '../mocks';


export default function DashboardAvailable() {
    return(
	<>
        { appsMock.map((card, index) => {
            return(
            <Card className="mx-4 mb-4">
                <Row className="no-gutters">
                    <Col md={3}>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/802435203477667860/802625866948673567/redmine.png" 
                    style={{ width: '100%', height: '100px'}}
                />
                </Col>
                <Col md={8}>
                    <Card.Text className="py-2 px-2">
                        { card.description }
                    </Card.Text>                
                </Col>
                <Col className="justify-content-center py-2">
                        <Button variant="primary" className="my-1 mx-1">Instalar</Button>
                        <Button variant="primary" className="my-1 mx-1">Mas info</Button>
                </Col>
            </Row>
        </Card>
            )
        })
        }
	</>
    );
}

