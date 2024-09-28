import React, { useState, useEffect } from "react";
import Header from "../components/HEADER";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom"; // For navigation
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
  const navigate = useNavigate(); // For page navigation

  // State for the autocomplete functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);

  const cities = ["Banglore", "Chennai", "Kochi", "Thrissur", "Kannur"];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Handle navigation to doctors page
const handleDoctorSearch = () => {
  // You can pass searchTerm or other data as query parameters if needed
  navigate(`/doctors?search=${searchTerm}`);
};

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false); // Close the dropdown after selecting a city
  };

  // Mock data fetch (you can replace this with your real data later)
  useEffect(() => {
    // Mock data array
    const mockData = [
      { name: 'Dr. John Smith', speciality: 'Cardiologist' },
      { name: 'Dr. Jane Doe', speciality: 'Dermatologist' },
      { name: 'Dr. Adam Brown', speciality: 'Pediatrician' },
      { name: 'Fever' },
      { name: 'Cold' },
      { name: 'General Checkup' },
    ];
    setData(mockData);
  }, []);

  // Handle input change to update suggestions
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        (item.speciality && item.speciality.toLowerCase().includes(value.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selection of a suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
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
          <div className="search-container">
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

            {/* Autocomplete Search Bar */}
            <div className="search-wrapper">
              <input
                type="text"
                className="search-bar"
                placeholder="Search for doctors, Specialities, Symptoms, Hospitals etc."
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button className="search-btn" onClick={handleDoctorSearch}>
                Search
              </button>

              {/* Display suggestions */}
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name} {suggestion.speciality && `(${suggestion.speciality})`}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="appointment-section">
            <h3>Book an Appointment in 3 simple steps</h3>
            <div className="appointment-form">
              <input type="text" className="input-field" placeholder="Search location" />
              <input type="text" className="input-field" placeholder="Today" />
              <input type="text" className="input-field" placeholder="Enter Speciality" />
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
                <li><img src={person} alt='person' /> Choose a doctor</li>
                <li><img src={calendar} alt='calendar' /> Book a slot</li>
                <li><img src={cards} alt='credit-cards' /> Make payment</li>
                <li><img src={camera} alt='video-camera' /> Be present in the consult room on hygieia.com at the time of consult</li>
              </ul>
            </div>
          ) : (
            <div className="offline-steps">
              <h3>HOW TO CONSULT DOCTOR OFFLINE?</h3>
              <ul className="steps-list">
                <li><img src={person} alt='person' /> Choose a doctor</li>
                <li><img src={calendar} alt='calendar' /> Book a slot at the clinic</li>
                <li><img src={hospital} alt='hospital' /> Visit the doctor at the Hospital/Clinic</li>
                <li><img src={cards} alt='credit-cards' /> Make payment</li>
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
