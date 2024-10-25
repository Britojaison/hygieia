import React, { useContext } from 'react';
import Logo from "../assets/imgs/logo.png";
import Userimg from "../assets/imgs/user.svg"
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthContext';
function Header() {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div className="header">
            <Link to="/">
                <img className="logo active" src={Logo} alt="logo" />
            </Link>
            <ul className="options">
                <li><Link to="/pharm">Pharmacy</Link></li>
                <li><Link to="/consult">Consultation</Link></li>
                <li><Link to="/labpage">Lab</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                
            </ul>
            <h2 className='right'>
                {isLoggedIn ? (
                    <Link to="/profile"><img style={{ width: '2.6rem' }} src={Userimg} alt='user' /></Link>
                ) : (
                    <Link to="/login" className='login-btn'><p className='login-btn'>Login</p></Link>

                )}
                <Link to="/cart" className='login-btn'><p className='login-btn'>cart</p></Link>
            </h2>
        </div>
    );
}

export default Header;