import React, { useState } from 'react';
import "./Registration.css";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function registerUser(data) {
    const response = await fetch('http://localhost:8080/register',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok){
        throw new Error(JSON.parse(await response.text()).error)
    }
    const json = await response.json()
    return json
}

const Registration = ({ setToken }) => {
    const nav = useNavigate();
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [profession, setProfession] = useState(null);
    const [address, setAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const  {id,value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "profession"){
            setProfession(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registerUser({
            email,
            firstName,
            lastName,
            profession,
            address,
            phoneNumber,
            username,
            password
        });
       
        setToken(res.token);
        nav("/profile");
    }

    return(
        <div className="register">
            <h1>Sign Up</h1>
            <form>
                <input type={'email'} value={email} id="email" placeholder={' Email'} onChange={(e) => handleInputChange(e)}/>
                <input type={'firstName'} value={firstName} id="firstName" placeholder={' First Name'} onChange={(e) => handleInputChange(e)}/>
                <input type={'lastName'} value={lastName} id="lastName" placeholder={' Last Name'} onChange={(e) => handleInputChange(e)} />
                <input type={'profession'} value={profession} id="profession" placeholder={' Profession'} onChange={(e) => handleInputChange(e)} />
                <input type={'address'} value={address} id="address" placeholder={' Address'} onChange={(e) => handleInputChange(e)} />
                <input type={'phoneNumber'} value={phoneNumber} id="phoneNumber" placeholder={' Phone Number'} onChange={(e) => handleInputChange(e)} />
                <input type={'username'} value={username} id="username" placeholder={' Username'} onChange={(e) => handleInputChange(e)}/>
                <input type={'password'} value={password} id="password" placeholder={' Password '} onChange={(e) => handleInputChange(e)}/>
                <input type={'password'} value={confirmPassword} id="confirmPassword" placeholder={' Confirm Password'} onChange={(e) => handleInputChange(e)}/>
                <button type={'submit'} onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    )
}

Registration.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Registration;