import React from 'react';
import "./NavBar.css";


const NavBar = () => {
    return(
        <nav>
            <a href="/">My APP</a>

            <div>
                <p>Welcome, <span> Guest</span></p>
            </div>
        </nav>
    )
}

export default NavBar;