import React, { useContext } from 'react';
import Logo from "../assets/imgs/logo.png";
import Userimg from "../assets/imgs/user.svg";
import Cartimg from "../assets/imgs/cart.png";  // Import the cart image
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
            <h2 className="right" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/cart" style={{ marginRight: '10px' }}>
                    <img src={Cartimg} alt="cart" style={{ width: '4.8rem' }} />  {/* Cart image */}
                </Link>
                {isLoggedIn ? (
                    <Link to="/profile">
                        <img style={{ width: '2.6rem' }} src={Userimg} alt="user" />
                    </Link>
                ) : (
                    <Link to="/login" style={{ textDecoration: 'none', color: '#0073e6' }}>
                        <p style={{ margin: 0, fontSize: '1rem' }}>Login</p>
                    </Link>
                )}
            </h2>
        </div>
    );
}

export default Header;
