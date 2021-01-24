import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { appsMock } from '../mocks';


export default function DashboardAvailable() {
    return(
	<>
        { appsMock.map((card, index) => {
            return(
        <Card style={{ display: 'inline-flex' }} className="mx-3 my-3 justify-content-center">
            <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/802435203477667860/802625866948673567/redmine.png" 
                style={{ justifyContent: 'center', width: '20%', height: '100px'}}
            />
            <div style={{ padding: '0 1em', margin: '1em 0', display: 'inline-flex' }}>
                <Card.Text>
                    { card.description }
                </Card.Text>
                <div style={{ display: 'block' }}>
                    <Button variant="primary" className="my-1">Modificar</Button>
                    <Button variant="danger" className="my-1">Eliminar</Button>
                </div>
            </div>
        </Card>
            )
        })
        }
	</>
    );
}

