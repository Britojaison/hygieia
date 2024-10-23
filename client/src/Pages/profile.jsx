import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/UserProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    //const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({});
    useEffect(()=>{
       

        axios.get('http://localhost:5000/profile', { withCredentials: true })
        .then(response => {
            console.log(response.data)
            setUserData(response.data.user)
        })
        .catch(error => console.error(error));
    

    },[])

    const handleLogout = () => {
        localStorage.removeItem('userId');  // Clear user data
        navigate("/login");  // Redirect to login page after logging out
    };

    // if (!userData) {
    //     return <div>Loading...</div>;  // Show loading while fetching data
    // }

    return (
        <div className="profile-page">
            <div className="header">
                <Link to="/" ><button className="back-button">➔</button></Link>
                <button className="logout-button" onClick={handleLogout}>Log-Out</button>
            </div>
            <div className="welcome-section">
                <div className="profile-pic"></div>
                <div className="welcome-message">
                    <h1>Welcome, {userData.name}!</h1>
                    <p>Your health is our priority. Please take care of your health, and we’ll assist you in doing the same.</p>
                </div>
            </div>
            <div className="info-section">
                <div className="info-box appointments">
                    <h2>Appointments:</h2>
                    <p>{userData.appointments || 'No appointments available'}</p>
                </div>
                <div className="info-box lab-results">
                    <h2>Lab Results:</h2>
                    <p>{userData.labResults || 'No lab results available'}</p>
                </div>
                <div className="info-box profile-info">
                    <h2>Profile:</h2>
                    <p>
                        E-Mail: {userData.email} <br /> 
                        Phone: {userData.phone} <br /> 
                        Address: {userData.address || 'No address available'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
