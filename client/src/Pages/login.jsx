import React, { useState } from "react";
import "../assets/styles/login.css"
import axios from "axios"

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
        axios.post('http://localhost:5000/login',{username,password})
        .then(res=>console.log(res))
        .catch(res=>console.log(err));
        
    };

    return (
    <div className="login">
        <div className="login-container">
            <h2>Welcome to HealthCare App</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </p>
            </form>
        </div>
        </div>
    );
}

export default App;
