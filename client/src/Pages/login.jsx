import React from 'react'
import "../assets/styles/login.css";
import { FaUser,FaLock,FaArrowLeft, FaPhone } from "react-icons/fa";
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

          {/* Phone Number Field */}
          <div className="input-box">
            <input type='tel' placeholder='Phone Number' required />
            <FaPhone className='icon'/>
          </div>

          {/* Password Field */}
          <div className="input-box">
            <input type='password' placeholder='Password' required />
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
  )
}

export default login; 