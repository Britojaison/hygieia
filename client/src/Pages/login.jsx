import React from 'react'
import "../assets/styles/login.css";
import { FaUser,FaLock,FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function login(){
    
  return (
    <div className='body'>
    <div className='wrapper'>
    <Link to="/" className="back-arrow">
        <FaArrowLeft /> 
    </Link>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type='Password' placeholder='Password' required />
                <FaLock className='icon' />
            </div>

            <div className="remeber-forgot">
                <label><input type='checkbox'/>Remember Me</label>
                <a href='#'>Forgot Password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Dont have an account?<Link className='signup' to="/signup">Register</Link></p>
            </div>
        </form>

    </div>
    </div>
  )
}

export default login; 