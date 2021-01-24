import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';


function NavBar(props) {
    const { isAuthenticated } = props;

    return(
        <Navbar bg="light" className="mt-0 mb-5">
            <Navbar.Brand>NaaS</Navbar.Brand>            
            <Navbar.Collapse className="justify-content-end">
            { isAuthenticated ?
                <Image src="https://cdn.discordapp.com/attachments/802435203477667860/802625872431284254/userIcon.png" 
                    style={{ width: '3%'}}
                />
                : 
                <Navbar.Text><Link to='/login'>Sign In</Link></Navbar.Text>
            }
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = ({ isAuthenticated }) => ({
    isAuthenticated
});

export default connect(mapStateToProps)(NavBar)
