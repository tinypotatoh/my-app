import React from 'react';
import "./Navigation.css";
import PropTypes from 'prop-types';


const Navigation = ({ removeToken }) => {
    return(
        <nav className="navigation">
            <a href="/" className="myapp">My App</a>
            <ul>
                <li><a href="/findpeople">Find People</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/contacts">My Contacts</a></li>
                <li><button className="unstyled-button" onClick={removeToken}>Log Out</button></li>
            </ul>    
        </nav>
    )
};

Navigation.propTypes = {
    removeToken: PropTypes.func.isRequired
}

export default Navigation;