import React, { useState } from 'react';
import '../assets/styles/appointmentModal.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppointmentModal = ({ doctor, isOpen, onClose }) => {
  // State variables to hold form data
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form reload

    // Convert date and time to a single Date object
    const dateTime = new Date(`${date}T${time}`);

    // Send collected data to backend
    axios.put('http://localhost:5000/appointment', {
      doctorId: doctor._id,
      dateTime,
      reason,
      notes
    }, { withCredentials: true })
      .then(response => {
        console.log("Appointment updated:", response.data);
        navigate('/')
      })
      .catch(error => {
        console.error("Error updating appointment:", error);
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Book Appointment with {doctor.name}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason for the appointment"
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Additional Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional notes"
            ></textarea>
          </div>
          <button type="sub mit">Confirm Appointment</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AppointmentModal;
