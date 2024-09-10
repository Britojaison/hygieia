import React, {useState} from 'react'
import "../assets/styles/login.css";
import { FaUser,FaLock } from "react-icons/fa";
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom';

function login(){
    const history= useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function handleSubmit (e) {
        e.preventDefault();
        // Implement login logic here
        console.log(username)
        await axios.post('http://localhost:5000/login',{username,password})
        .then(res=>{
            history("/")
        })
        .catch(res=>console.log(err));
        
    };
  return (
    <div className='body'>
    <div className='wrapper'>
        <form onSubmit={handleSubmit} action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input 
                type='text'
                placeholder='Username'
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input 
                type='Password' 
                placeholder='Password' 
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
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