// DoctorHomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/styles/doctorHomePage.css";

const DoctorHomePage = () => {
  const [doctorProfile, setDoctorProfile] = useState(null); // To hold doctor profile info
  const [appointmentRequests, setAppointmentRequests] = useState([]); // To hold appointment requests
  const [currentAppointments, setCurrentAppointments] = useState([]); // To hold current appointments

  useEffect(() => {
    // Fetch doctor profile
    async function fetchDoctorProfile() {
      try {
        const res = await axios.get('http://localhost:5000/doctor/profile',{withCredentials: true});
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
      <div className="top-section">
        <div className="doctor-profile half-screen">
          <h2>Doctor Profile</h2>
          {doctorProfile ? (
            <div className="profile-details">
              <img src={doctorProfile.image} alt={doctorProfile.name} className="profile-image" />
              <h3>{doctorProfile.name}</h3>
              <p>Speciality: {doctorProfile.speciality}</p>
              <p>Experience: {doctorProfile.experience} years</p>
              <p>Rating: {doctorProfile.rating}</p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>

        <div className="appointment-requests half-screen">
          <h2>Appointment Requests</h2>
          {appointmentRequests.length > 0 ? (
            <ul>
              {appointmentRequests.map((request) => (
                <li key={request.id} className="appointment-item">
                  <p><strong>Patient:</strong> {request.patientName}</p>
                  <p><strong>Date:</strong> {request.date}</p>
                  <p><strong>Time:</strong> {request.time}</p>
                  <button className="accept-btn">Accept</button>
                  <button className="decline-btn">Decline</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointment requests</p>
          )}
        </div>
      </div>

      <div className="current-appointments-section">
        <h2>Current Appointments</h2>
        {currentAppointments.length > 0 ? (
          <ul>
            {currentAppointments.map((appointment) => (
              <li key={appointment.id} className="appointment-item">
                <p><strong>Patient:</strong> {appointment.patientName}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No current appointments</p>
        )}
      </div>
    </div>
  );
};

export default DoctorHomePage;
