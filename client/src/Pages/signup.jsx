import React, { useState } from 'react';
import "../assets/styles/signup.css";
import { FaUser, FaLock, FaArrowLeft, FaEnvelope, FaPhone, FaHome, FaCalendar, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [activeTab, setActiveTab] = useState('User');

  const renderForm = () => {
    switch (activeTab) {
      case 'User':
        return (
          <div>
            <form>
              <h1>Sign-Up as User</h1>

              <div className="input-box">
                <input type="text" placeholder="Full Name" required />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input type="tel" placeholder="Phone Number" required />
                <FaPhone className="icon" />
              </div>

              <div className="input-box">
                <input type="text" placeholder="Address" required />
                <FaHome className="icon" />
              </div>

              <div className="input-box">
                <input type="date" placeholder="Date of Birth" required />
                <FaCalendar className="icon" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>

        );
      case 'Doctor':
        return (
          <div>
            <form>
              <h1>Sign-Up as Doctor</h1>

              <div className="input-box">
                <input type="text" placeholder="Doctor Name" required />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input type="tel" placeholder="Phone Number" required />
                <FaPhone className="icon" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>

              <div className="input-box">
                <input type="text" placeholder="Qualification" required />
                <FaGraduationCap className="icon" />
              </div>

              <div className="input-box">
                <input type="text" placeholder="Specialization" required />
                <FaBriefcase className="icon" />
              </div>

              <div className="input-box">
                <input type="text" placeholder="Address" required />
                <FaHome className="icon" />
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        );
      case 'Pharmacist':
        return (
          <div>
            <form>
              <h1>Sign-Up as Pharmacist</h1>

              <div className="input-box">
                <input type="text" placeholder="Pharmacist Name" required />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input type="tel" placeholder="Phone Number" required />
                <FaPhone className="icon" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="signup-body">
      <div className='wrapper'>
        <Link to="/login" className="back-arrow">
          <FaArrowLeft /> {/* Back arrow to go to home */}
        </Link>
        <div className="tab-buttons">
          <button className={activeTab === 'User' ? 'active' : ''} onClick={() => setActiveTab('User')}>User</button>
          <button className={activeTab === 'Doctor' ? 'active' : ''} onClick={() => setActiveTab('Doctor')}>Doctor</button>
          <button className={activeTab === 'Pharmacist' ? 'active' : ''} onClick={() => setActiveTab('Pharmacist')}>Pharmacist</button>
        </div>
        <div className="form-container">
          {renderForm()}
        </div>
      </div>
    </div>
  );
}

export default Signup;
