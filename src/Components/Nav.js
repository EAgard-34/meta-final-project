import React from 'react';
let logo = require("../icons_assets/Logo.svg");

function Nav(){
return (
    <>
        <img src="logo"></img>
        <nav>
            <ul>
                <li><a >Home</a></li>
                <li><a>About</a></li>
                <li><a >Menu</a></li>
                <li><a >Reservations</a></li>
                <li><a >Order Online</a></li>
                <li><a >Login</a></li>
            </ul>
        </nav>


    </>
)
}

export default Nav;