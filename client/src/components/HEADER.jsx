import React from 'react';
import Logo from "../assets/logo.png";
import Userimg from "../assets/user.svg"
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
    
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
            </Link>
            <ul className="options">
                <li><Link to="/">Pharmacy</Link></li>
                <li><a href="/">Consultation</a></li>
                <li><a href="/">Lab Test</a></li>
                <li><a href="/">About us</a></li>
            </ul>
            <h2>
                {isLoggedIn ? (
                    <Link to="/profile"><img style={{width:'2.6rem'}} src={Userimg} alt='user' /></Link>
                ) : (
                    <Link to="/login">Login</Link>
                    
                )}
                
            </h2>
        </div>
    );
}

export default Header;
