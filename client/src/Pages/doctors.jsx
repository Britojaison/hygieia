import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../components/HEADER";
import Footer from "../components/footer";
import axios from 'axios';
import AppointmentModal from './AppointmentModal'; // Import the modal component
import "../assets/styles/doctors.css";

const Doctors = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const [doctorsList, setDoctorsList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // For selected doctor in the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [appointmentId, setAppointmentId] = useState(null); // Store appointment ID
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    console.log(`Navigating to doctor details page with ID: ${doctorId}`);
    navigate(`/DoctorDetails/${doctorId}`);
  };

  const handleBookOnline = (doctor) => {
    console.log("Button clicked"); // Debugging log
    console.log("hello"); // Should print "hello"
    setSelectedDoctor(doctor);
    setIsModalOpen(true); // Open modal when booking online
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleAppointmentSubmit = async (formData) => {
    console.log(`Appointment booked with Doctor: ${selectedDoctor.name}`);
    console.log(`Form Data:`, formData);
  };

  useEffect(() => {
    axios.post('http://localhost:5000/doctorSearchQuery', { searchQuery }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setDoctorsList(response.data.doctorsList);
      });
  }, [searchQuery]);

  return (
    <div className="doctors-page">
      <Header />
      <section className="doctors-banner">
        <h2 className="title_doctor">Doctors</h2>
      </section>
      <div className="main-content">
        <div className="results-header">
          {searchQuery && <p>Showing results for: <strong>{searchQuery}</strong></p>}
        </div>
        <div className="doctors-grid">
          {doctorsList.map(doctor => (
            <div className="doctor-card" key={doctor._id}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-speciality">{doctor.doctor_info.specialization}</p>
                <p className="doctor-experience">{doctor.experience} years of experience</p>
                <div className="doctor-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`star ${index < doctor.rating ? 'filled' : ''}`}>&#9733;</span>
                  ))}
                </div>
                <div className="doctor-actions">
                  {/* Add a console log here to see if the button renders */}
                  {console.log('Rendering book online button for doctor:', doctor.name)}
                  <button className="book-btn online" onClick={() => handleBookOnline(doctor)}>Book Online</button>
                  <button className="book-btn offline">Book Offline</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Appointment Modal */}
      {selectedDoctor && (
        <AppointmentModal
          doctor={selectedDoctor} // Ensure the correct appointment ID is passed
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleAppointmentSubmit} // Pass the form submit handler
        />
      )}

      <Footer />
    </div>
  );
};

export default Doctors;
