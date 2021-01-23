import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';


export default function Login() {
     
    return(
	<>
        <NavBar />
        <LoginForm />
	</>
    );
}
