import React from "react";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";

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
                    <Link to="/login">Login</Link>
                </h2>
            </div>
    )
}

export default header