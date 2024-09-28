// Doctors.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import Header from "../components/HEADER";
import Footer from "../components/footer";
import "../assets/styles/doctors.css";

const Doctors = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const navigate = useNavigate(); // Use navigate here

  const handleDoctorClick = (doctorId) => {
    console.log(`Navigating to doctor details page with ID: ${doctorId}`);
    navigate(`/DoctorDetails/${doctorId}`); // Use navigate to change the page
  };

  // Sample doctor data
  const doctorsList = [
    {
      id: 1,
      name: 'Dr. John Smith',
      speciality: 'Cardiologist',
      experience: '10 years',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo='
    },
    {
      id: 2,
      name: 'Dr. Jane Doe',
      speciality: 'Dermatologist',
      experience: '8 years',
      rating: 5,
      image: 'https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress-1600x900.jpg'
    },
    {
      id: 3,
      name: 'Dr. Adam Brown',
      speciality: 'Pediatrician',
      experience: '12 years',
      rating: 3,
      image: 'https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/03/board-certified-doctor-meaning.webp'
    },
    {
      id: 4,
      name: 'Dr. Emily White',
      speciality: 'Neurologist',
      experience: '15 years',
      rating: 4,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg'
    },
    {
      id: 5,
      name: 'Dr. Michael Green',
      speciality: 'General Physician',
      experience: '5 years',
      rating: 4,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg'
    },
    {
      id: 6,
      name: 'Dr. Sarah Brown',
      speciality: 'ENT Specialist',
      experience: '7 years',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63WdsTMcDKjdDQCkQaS1LBrer0DpqHxqX6Q&s'
    },
    {
      id: 7,
      name: 'Dr. Steven Clark',
      speciality: 'Orthopedic',
      experience: '11 years',
      rating: 4,
      image: 'https://www.liveabout.com/thmb/zNzhc9WxUE_lf6r3P0yuAfBaoV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-with-stethoscope-in-hospital-642394515-5aa9a0b8a9d4f90037431454.jpg'
    },
    {
      id: 8,
      name: 'Dr. Laura Adams',
      speciality: 'Dermatologist',
      experience: '9 years',
      rating: 3,
      image: 'https://www.liveabout.com/thmb/-VaSFroYZ6nANNpc-HQvnypdw5U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-doctor-in-hospital-looking-at-camera-733931963-5aa9a9de30371300379c0116.jpg'
    },
    {
      id: 9,
      name: 'Dr. Daniel Turner',
      speciality: 'Cardiologist',
      experience: '10 years',
      rating: 4,
      image: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg='
    }
  ];



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
            <div className="doctor-card" key={doctor.id} onClick={() => handleDoctorClick(doctor.id)}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-speciality">{doctor.speciality}</p>
                <p className="doctor-experience">{doctor.experience} of experience</p>
                <div className="doctor-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`star ${index < doctor.rating ? 'filled' : ''}`}>&#9733;</span>
                  ))}
                </div>
                <div className="doctor-actions">
                  <button className="book-btn online">Book Online</button>
                  <button className="book-btn offline">Book Offline</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
