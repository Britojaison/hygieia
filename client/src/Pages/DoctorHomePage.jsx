import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import "../assets/styles/doctorHomePage.css";

const DoctorHomePage = () => {
  const [doctorProfile, setDoctorProfile] = useState(null); // To hold doctor profile info
  const [appointmentRequests, setAppointmentRequests] = useState([]); // To hold appointment requests
  const [currentAppointments, setCurrentAppointments] = useState([]); // To hold current appointments

  useEffect(() => {
    // Fetch doctor profile
    async function fetchDoctorProfile() {
      try {
        const res = await axios.get('http://localhost:5000/doctor/profile', { withCredentials: true });
        setDoctorProfile(res.data);
      } catch (err) {
        console.error("Error fetching doctor profile:", err);
      }
    }

    // Fetch appointment requests
    async function fetchAppointmentRequests() {
      try {
        const res = await axios.get('http://localhost:5000/doctor/appointmentRequests');
        setAppointmentRequests(res.data);
      } catch (err) {
        console.error("Error fetching appointment requests:", err);
      }
    }

    // Fetch current appointments
    async function fetchCurrentAppointments() {
      try {
        const res = await axios.get('http://localhost:5000/doctor/currentAppointments');
        setCurrentAppointments(res.data);
      } catch (err) {
        console.error("Error fetching current appointments:", err);
      }
    }

    fetchDoctorProfile();
    fetchAppointmentRequests();
    fetchCurrentAppointments();
  }, []);

  return (
    <div className="doctor-homepage">
      <div className="background-decor"></div>
      <header className="doctorheader">
        <button className="back-btn"></button>
        <h2 className='doctorheade'>Welcome, Dr. {doctorProfile?.name || 'Doctor'}</h2>
        <button className="logout-btn"><FaSignOutAlt /></button>
      </header>

      <section className="profile-section">
        <div className="profile-image-container">
          <img
            src={doctorProfile?.image || 'data:image/jpeg;base64,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'}
            alt={doctorProfile?.name || 'Doctor Profile'}
            className="profile-image"
          />
        </div>
        <div className="profile-details">
          <h3>{doctorProfile?.name || 'Doctor Name'}</h3>
          <p><strong>Speciality:</strong> {doctorProfile?.speciality || 'Not Available'}</p>
          <p><strong>Experience:</strong> {doctorProfile?.experience || 'Not Available'} years</p>
          <p><strong>Rating:</strong> {doctorProfile?.rating || 'Not Available'}</p>
        </div>
      </section>

      <div className="appointments-section">
        <div className="appointment-card">
          <h3>Current Appointments</h3>
          {currentAppointments.length > 0 ? (
            <ul>
              {currentAppointments.map((appointment) => (
                <li key={appointment.id}>
                  {appointment.patientName}: {appointment.time} ({appointment.type})
                  <p>{appointment.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Current Appointments</p>
          )}
        </div>

        <div className="appointment-card">
          <h3>Appointment Requests</h3>
          {appointmentRequests.length > 0 ? (
            <ul>
              {appointmentRequests.map((request) => (
                <li key={request.id}>
                  {request.patientName}: {request.time} ({request.type})
                  <p>{request.description}</p>
                  <div className="action-btns">
                    <button className="accept-btn">Accept</button>
                    <button className="decline-btn">Decline</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Appointment Requests</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorHomePage;
