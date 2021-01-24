import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { appsMock } from '../mocks';


export default function DashboardApps() {
    return(
	<>
        { appsMock.map((card, index) => {
            return(
        <Card style={{ width: '18em' }} className="mx-3 my-3 justify-content-center">
            <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/802435203477667860/802625866948673567/redmine.png" 
                style={{ justifyContent: 'center', width: '100%', height: '40%'}}
            />
            <div style={{ paddin: '1em', margin: '0 1em' }}>
                <Card.Text>
                    { card.description }
                </Card.Text>
                <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between'}}>
                    <Button variant="primary">Modificar</Button>
                    <Button variant="danger">Eliminar</Button>
                </div>
            </div>
        </Card>
            )
        })
        }
	</>
    );
}

