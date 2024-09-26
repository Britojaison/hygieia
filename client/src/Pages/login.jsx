import React, { useState, useContext } from 'react';
import "../assets/styles/login.css";
import { FaLock, FaArrowLeft, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext'; // Import AuthContext

function Login() {
  const { login } = useContext(AuthContext);
    const history = useNavigate();
    const { setAuth } = useContext(AuthContext); // Access setAuth from context
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', { phoneNumber, password });
            // Assuming the server returns user data and a token
            //setAuth({ user: res.data.user, token: res.data.token }); // Update auth context
            login();
            history("/");
        } catch (err) {
            console.error(err);

            alert('Login failed');
        }
    }

    return (
        <div className='body'>
            <div className='wrapper'>
                <Link to="/" className="back-arrow">
                    <FaArrowLeft />
                </Link>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    {/* Phone Number Field */}
                    <div className="input-box">
                        <input type='tel' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                        <FaPhone className='icon' />
                    </div>

                    {/* Password Field */}
                    <div className="input-box">
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remeber-forgot">
                        <label><input type='checkbox' />Remember Me</label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link className='signup' to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
