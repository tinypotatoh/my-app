import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

async function loginUser(credentials) {
    const response = await fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    if (!response.ok){
        throw new Error(JSON.parse(await response.text()).error)
    }
    const json = await response.json()
    return json
}

const Login = ({ setToken }) => {
    const nav = useNavigate();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await loginUser({
                username,
                password
            });
            setToken(res.token);
            nav("/profile");
            
        } catch (error) {
            setError(error.message)
        }
        
        
    }
   
    return(
    <div className="login">
        <h1>Login To Continue</h1>
        <form onSubmit={handleSubmit}>
            <input type={'username'} placeholder={' Username'} onChange={e => setUserName(e.target.value)}/>
            <input type={'password'} placeholder={' ••••••••'} onChange={e => setPassword(e.target.value)}/>
            <div className="error">{error}</div>
            <button type={'submit'}>Login</button>
        </form>
    </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;