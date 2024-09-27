import React, { useContext } from 'react';
import '../assets/styles/UserProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProfilePage = () => {
    const { logout } = useContext(AuthContext);  // Get logout function from AuthContext
    const navigate = useNavigate();  // For redirecting after logout

    const handleLogout = () => {
        logout();  // Call the logout function to update auth state
        navigate("/login");  // Redirect to login page after logging out
    };

    return (
        <div className="profile-page">
            <div className="header">
                <Link to="/" ><button  className="back-button">➔</button></Link>
                <button className="logout-button" onClick={handleLogout}>Log-Out</button>  
            </div>
            <div className="welcome-section">
                <div className="profile-pic"></div>
                <div className="welcome-message">
                    <h1>Welcome, Nayana!</h1>
                    <p>Your health is our priority. Please take care of your health, and we’ll assist you in doing the same.</p>
                </div>
            </div>
            <div className="info-section">
                <div className="info-box appointments">
                    <h2>Appointments:</h2>
                    <p>Dr. Ben: 10:30pm (online) <br /> Cardiology</p>
                    <p>Dr. John: 11:00am (offline) <br /> ENT</p>
                </div>
                <div className="info-box lab-results">
                    <h2>Lab Results:</h2>
                    <p>Blood test: AB+<br /> X-Ray Scan: waiting</p>
                </div>
                <div className="info-box profile-info">
                    <h2>Profile:</h2>
                    <p>E-Mail: idk@gmail.com <br /> Phone: 123456789 <br /> Address: Brooklyn, New York</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
