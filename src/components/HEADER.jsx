import React from "react";
import Logo from "../assets/logo.png"

function header()
{
    return (
        
            <div className="header">
                <img className="logo" src={Logo} alt="logo"></img>
                <ul className="options">
                    <li>Pharmacy</li>
                    <li><a href="/about">Consultation</a></li>
                    <li><a href="/">Lab Test</a></li>
                    <li><a href="#aboutus1">About us</a></li>
                </ul>
                <h2>
                    Profile
                </h2>
            </div>
    )
}

export default header