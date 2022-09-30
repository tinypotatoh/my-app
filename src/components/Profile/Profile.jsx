import React, {useEffect, useState} from 'react';
import "./Profile.css";
import Navigation from "./content/Navigation/Navigation";
import {FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';


const Profile = ({removeToken, token}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const response = fetch('http://localhost:8080/me',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then((data) => setUser(data.me))
    }, [token]);

    return(
        <div>
           <Navigation removeToken={removeToken} />
            <div className="profile">
                <div className="left">
                        <img src="./images/img2.jpeg"></img>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <h2>{user.address}</h2>
                        <h3>{user.profession}</h3>
                        
                        <a href="https://www.facebook.com" target="_blank">
                        <FaFacebookF className="icon"/>
                        </a>
                        
                        <a href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className="icon"/>
                        </a>
                        
                        <a href="https://www.twitter.com" target="_blank">
                        <FaTwitter className="icon"/>
                        </a>
                
                        <button className="unstyled-button" type="button">Settings</button>
                </div>    

                <div className="right">
                    <form>
                        <label for="username"> Username</label><br/>
                        <input type={"text"} placeholder={" "} value={user.username}></input><br/><br/>
                        
                        <label for="firstName"> First Name</label><br/>
                        <input type={"text"} placeholder={" "} value={user.firstName}></input><br/><br/>

                        <label for="lastName"> Last Name</label><br/>
                        <input type={"text"} placeholder={" "} value={user.lastName}></input><br/><br/>
                       
                        <label for="email"> Email</label><br/>
                        <input type={"text"}placeholder={" "} value={user.email}></input><br/><br/>
                        
                        <label for="phone">Phone Number</label><br/>
                        <input type={"text"} placeholder={" "} value={user.phoneNumber}></input><br/><br/>
                        
                        <label for="gender"> Gender</label><br/>
                        <select className="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                        <button type="submit" name="send" value="update">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

Profile.propTypes = {
    removeToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
}
export default Profile;