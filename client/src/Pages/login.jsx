import React from 'react'
import "../assets/styles/login.css";
import { FaUser,FaLock } from "react-icons/fa";



export const login = () => {
  return (
    <div className='body'>
    <div className='wrapper'>
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
                <p>Dont have an account?<a href='#'>Register</a></p>
            </div>
        </form>

    </div>
    </div>
  )
}

export default login; 