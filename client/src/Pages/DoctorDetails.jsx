import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/HEADER";
import Footer from "../components/footer";
import "../assets/styles/doctordetails.css"

const DoctorDetails = () => {
  const { doctorId } = useParams();

  const doctorsList = [
    {
      id: 1,
      name: 'Dr. John Smith',
      speciality: 'Cardiologist',
      experience: '10 years',
      rating: 4.5,
      image: 'https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=',
      education: [
        {
          degree: "M.D. in Cardiology",
          institution: "Johns Hopkins University School of Medicine",
          details: "Graduated with honors, specializing in cardiovascular diseases. Conducted extensive research on advanced cardiac treatments, published in multiple peer-reviewed journals.",
        },
        {
          degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
          institution: "University of California, Los Angeles (UCLA)",
          details: "Graduated top of his class, gaining a solid foundation in general medicine. Completed a clinical internship focused on internal medicine and cardiology.",
        }
      ],
      certifications: [
        "Fellowship in Interventional Cardiology - Cleveland Clinic",
        "Certified in Advanced Cardiac Life Support (ACLS)",
        "Certified by the American Board of Internal Medicine (ABIM) in Cardiology"
      ],
      languages: ["English", "Spanish", "French"],
      memberships: ["American College of Cardiology (ACC)", "European Society of Cardiology (ESC)"],
      consultationFees: "$200 (First Visit), $150 (Follow-up Visit)",
      availability: "Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM, Sunday: Closed",
      contactEmail: "drjohnsmith@healthcareclinic.com",
      contactPhone: "(123) 456-7890",
      clinicAddress: "Cardiac Care Clinic, 123 Heartbeat Avenue, New York, NY 10016",
      reviews: [
        "Dr. Smith is highly knowledgeable and made me feel at ease during my treatment. - 5/5 ⭐",
        "Very patient and explained everything in detail, but the wait time was a bit long. - 4/5 ⭐",
        "His expertise in cardiology is evident, and I felt I was in good hands. - 5/5 ⭐",
      ]
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      speciality: 'Dermatologist',
      experience: '8 years',
      rating: 5,
      image: 'https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress-1600x900.jpg',
      education: [
        {
          degree: "M.D. in Dermatology",
          institution: "Johns Hopkins University School of Medicine",
          details: "Graduated with honors, specializing in cardiovascular diseases. Conducted extensive research on advanced cardiac treatments, published in multiple peer-reviewed journals.",
        },
        {
          degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
          institution: "University of California, Los Angeles (UCLA)",
          details: "Graduated top of his class, gaining a solid foundation in general medicine. Completed a clinical internship focused on internal medicine and cardiology.",
        }
      ],
      certifications: [
        "Fellowship in Interventional Cardiology - Cleveland Clinic",
        "Certified in Advanced Cardiac Life Support (ACLS)",
        "Certified by the American Board of Internal Medicine (ABIM) in Cardiology"
      ],
      languages: ["English", "Spanish", "French"],
      memberships: ["American College of Cardiology (ACC)", "European Society of Cardiology (ESC)"],
      consultationFees: "$200 (First Visit), $150 (Follow-up Visit)",
      availability: "Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM, Sunday: Closed",
      contactEmail: "drjohnsmith@healthcareclinic.com",
      contactPhone: "(123) 456-7890",
      clinicAddress: "Cardiac Care Clinic, 123 Heartbeat Avenue, New York, NY 10016",
      reviews: [
        "Dr. Smith is highly knowledgeable and made me feel at ease during my treatment. - 5/5 ⭐",
        "Very patient and explained everything in detail, but the wait time was a bit long. - 4/5 ⭐",
        "His expertise in cardiology is evident, and I felt I was in good hands. - 5/5 ⭐",
      ]
    },
    {
      id: 3,
      name: 'Dr. Adam Brown',
      speciality: 'Pediatrician',
      experience: '12 years',
      rating: 3.5,
      image: 'https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/03/board-certified-doctor-meaning.webp',
      education: [
        {
          degree: "M.D. in Dermatology",
          institution: "Johns Hopkins University School of Medicine",
          details: "Graduated with honors, specializing in cardiovascular diseases. Conducted extensive research on advanced cardiac treatments, published in multiple peer-reviewed journals.",
        },
        {
          degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
          institution: "University of California, Los Angeles (UCLA)",
          details: "Graduated top of his class, gaining a solid foundation in general medicine. Completed a clinical internship focused on internal medicine and cardiology.",
        }
      ],
      certifications: [
        "Fellowship in Interventional Cardiology - Cleveland Clinic",
        "Certified in Advanced Cardiac Life Support (ACLS)",
        "Certified by the American Board of Internal Medicine (ABIM) in Cardiology"
      ],
      languages: ["English", "Spanish", "French"],
      memberships: ["American College of Cardiology (ACC)", "European Society of Cardiology (ESC)"],
      consultationFees: "$200 (First Visit), $150 (Follow-up Visit)",
      availability: "Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM, Sunday: Closed",
      contactEmail: "drjohnsmith@healthcareclinic.com",
      contactPhone: "(123) 456-7890",
      clinicAddress: "Cardiac Care Clinic, 123 Heartbeat Avenue, New York, NY 10016",
      reviews: [
        "Dr. Smith is highly knowledgeable and made me feel at ease during my treatment. - 5/5 ⭐",
        "Very patient and explained everything in detail, but the wait time was a bit long. - 4/5 ⭐",
        "His expertise in cardiology is evident, and I felt I was in good hands. - 5/5 ⭐",
      ]
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



  const selectedDoctor = doctorsList.find(doctor => doctor.id === parseInt(doctorId));

  if (!selectedDoctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="doctor-details-container">
        {/* Doctor Image */}
        <div className="doctor-detail-left">
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-detail-image" />
        </div>

        {/* Doctor Info */}
        <div className="doctor-detail-right">
          <h1>{selectedDoctor.name}</h1>
          <p><strong>Speciality:</strong> {selectedDoctor.speciality}</p>
          <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
          <p><strong>Rating:</strong> {selectedDoctor.rating} Stars</p>
          <p><strong>Consultation Fees:</strong> {selectedDoctor.consultationFees}</p>
          <p><strong>Languages Spoken:</strong> {selectedDoctor.languages.join(", ")}</p>
          <p><strong>Clinic Address:</strong> {selectedDoctor.clinicAddress}</p>
          <p><strong>Contact:</strong> {selectedDoctor.contactPhone} | {selectedDoctor.contactEmail}</p>

          {/* Education Section */}
          <h2>Education</h2>
          <ul>
            {selectedDoctor.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong> - {edu.institution}
                <p>{edu.details}</p>
              </li>
            ))}
          </ul>

          {/* Certifications and Memberships */}
          <h2>Certifications & Fellowships</h2>
          <ul>
            {selectedDoctor.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>

          <h2>Professional Memberships</h2>
          <ul>
            {selectedDoctor.memberships.map((membership, index) => (
              <li key={index}>{membership}</li>
            ))}
          </ul>

          {/* Patient Reviews */}
          <h2>Patient Reviews</h2>
          <ul>
            {selectedDoctor.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          {/* Availability */}
          <h2>Availability</h2>
          <p>{selectedDoctor.availability}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDetails;