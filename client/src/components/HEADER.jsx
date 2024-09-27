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
                <img className="logo" src={Logo} alt="logo" />
            </Link>
            <ul className="options">
                <li><Link to="/pharm">Pharmacy</Link></li>
                <li><Link to="/consult">Consultation</Link></li>
                <li><Link to="/labpage">Lab page</Link></li>
                <li><a href="/">About us</a></li>
            </ul>
            <h2>
                {isLoggedIn ? (
                    <Link to="/profile"><img style={{ width: '2.6rem' }} src={Userimg} alt='user' /></Link>
                ) : (
                    <Link to="/login" className='login-btn'><p className='login-btn'>Login</p></Link>

                )}

            </h2>
        </div>
    );
}

export default Header;
