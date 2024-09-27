import React, { useState } from "react";
import Header from "../components/HEADER";
import Footer from "../components/footer";
import "../assets/styles/consult.css";
import person from '../assets/imgs/person.png';
import calendar from '../assets/imgs/calendar.png';
import cards from '../assets/imgs/credit-cards.png';
import camera from '../assets/imgs/video-camera.png';
import tool from '../assets/imgs/doctor_tools.png';
import hospital from '../assets/imgs/hospital.png';

function Consultation() {
  const [isOnline, setIsOnline] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('ALL CITIES');

  const cities = ["Bangalore", "Chennai", "Kochi", "Thrissur", "Kannur"];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false); // Close the dropdown after selecting a city
  };

  return (
    <div className="consultation-page">
      <Header />
      <section className="consult-banner">
        <h2 className="title_consult">Consultation</h2>
        <img src={tool} alt="stethoscope" />
      </section>

      <div className="main-content">
        <div className="find-doctors">
          <h2>FIND DOCTORS</h2>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={handleDropdownToggle}>
              {selectedCity}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {cities.map((city, index) => (
                  <li key={index} onClick={() => handleCitySelect(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input type="text" className="search-bar" placeholder="Search for doctors, Specialties, Symptoms, Hospitals etc." />
          <div className="appointment-section">
            <h3>Book an Appointment in 3 simple steps</h3>
            <div className="appointment-form">
              <input type="text" className="input-field" placeholder="Search location" />
              <input type="text" className="input-field" placeholder="Today" />
              <input type="text" className="input-field" placeholder="Enter Specialty" />
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>
        </div>

        <div className="consultation-info">
          <button className="contact-btn">📞 8934561-728</button>
          <h2>HOW DOCTOR CONSULTATION WORKS?</h2>
          <div className="toggle-buttons">
            <button 
              className={`toggle-btn ${isOnline ? 'active' : ''}`} 
              onClick={() => setIsOnline(false)}
            >
              Online
            </button>
            <button 
              className={`toggle-btn ${!isOnline ? 'active' : ''}`} 
              onClick={() => setIsOnline(true)}
            >
              Offline
            </button>
          </div>
          
          {isOnline ? (
            <div className="online-steps">
              <h3>HOW TO CONSULT DOCTOR ONLINE?</h3>
              <ul className="steps-list">
                <li> <img src={person} alt='person' /> Choose a doctor</li>
                <li> <img src={calendar} alt='calendar' /> Book a slot</li>
                <li> <img src={cards} alt='credit-cards' /> Make payment</li>
                <li> <img src={camera} alt='video-camera' /> Be present in the consult room on hygieia.com at the time of consult</li>
              </ul>
            </div>
          ) : (
            <div className="offline-steps">
              <h3>HOW TO CONSULT DOCTOR OFFLINE?</h3>
              <ul className="steps-list">
                <li> <img src={person} alt='person' /> Choose a doctor</li>
                <li> <img src={calendar} alt='calendar' /> Book a slot at the clinic</li>
                <li> <img src={hospital} alt='hospital' /> Visit the doctor at the Hospital/Clinic</li>
                <li> <img src={cards} alt='credit-cards' /> Make payment</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultation;
