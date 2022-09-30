import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';
import "./LoginRegistration.css";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import NavBar from "../NavBar/NavBar"

const LoginRegistration = ({setToken}) => {
    const [login, setLogin] = useState(true);
    const LoginRegistrationRef = useRef(null);
    
    const handleClick = () => {
        setLogin(!login);

        LoginRegistrationRef.current.classList.toggle("active");
    }
   
    return(
        <div className="login-wrapper">
            <NavBar />
        <div className="login-reg" ref={LoginRegistrationRef}>
            <Login setToken={setToken}/>
            <div className="side">
                <button type="button" onClick={handleClick}>
                    {login ? "Sign Up Here" : "Login"}
                </button>
            </div>
            <Registration setToken={setToken} />
            </div>
        </div>
    );
};

LoginRegistration.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginRegistration;