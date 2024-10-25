import React from 'react';
import '../assets/styles/Aboutus.css';
import ceo from '../assets/imgs/CEO.jpg';
import manager from '../assets/imgs/manager.jpg';
import customer from '../assets/imgs/Customer.jpg';
import logo from '../assets/imgs/logo.png';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div class="logoinaboutus-container">
        <img class="logoinaboutus" src={logo} alt="Logo" />
      </div>

      {/* Header Section */}
      <header className="about-header" id="about-us">
        <p>Your Trusted Partner in Healthcare and Wellness</p>
      </header>

      {/* Our Mission Section */}
      <section id="mission-section" className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Hygeia, we strive to make healthcare accessible and affordable for everyone. Our goal is to provide you with a seamless healthcare journey by connecting you with a network of certified doctors, pharmacies, labs, and wellness resources.
        </p>
      </section>

      {/* Our Services Section */}
      <section id="offer-section" className="services-section">
        <h2>What We Offer</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Doctor Consultations</h3>
            <p>Connect with specialists for virtual or in-person appointments.</p>
          </div>
          <div className="service-item">
            <h3>Pharmacy Access</h3>
            <p>Order medications and wellness products online, delivered right to your doorstep.</p>
          </div>
          <div className="service-item">
            <h3>Lab Services</h3>
            <p>Find nearby labs, schedule tests, and receive results digitally.</p>
          </div>
          <div className="service-item">
            <h3>Wellness Resources</h3>
            <p>Explore trusted health information and wellness tips.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="choose-us-section" className="choose-us-section">
        <h2>Why Choose Hygeia?</h2>
        <ul>
          <li><strong>Comprehensive Healthcare:</strong> One platform for all your healthcare needs.</li>
          <li><strong>Quality Assurance:</strong> All services are certified to maintain high standards.</li>
          <li><strong>24/7 Support:</strong> Access healthcare services anytime, anywhere.</li>
          <li><strong>Personalized Care:</strong> Services tailored to your unique health requirements.</li>
        </ul>
      </section>

      {/* Meet Our Team Section */}
      <section id="team-section" className="team-section">
        <h2>Meet the Hygeia Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ceo} alt="Brito Jaison" />
            <h3>Brito Jaison</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={manager} alt="Ahanya Mariyam" />
            <h3>Ahanya Mariyam</h3>
            <p>Manager</p>
          </div>
          <div className="team-member">
            <img src={customer} alt="Nayana Benny" />
            <h3>Nayana Benny</h3>
            <p>Head of Customer Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="testimonials-section">
        <h2>What Our Users Are Saying</h2>
        <div className="testimonial">
          <p>"Hygeia makes healthcare so much easier! I can consult with my doctor from home."</p>
          <span>- Emily, August 2024</span>
        </div>
        <div className="testimonial">
          <p>"The pharmacy delivery feature saved me time and effort. Highly recommend!"</p>
          <span>- Michael, September 2024</span>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-section" className="contact-section">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! Reach out for support or feedback.</p>
        <p>Email: support@hygeia.com | Phone: +123-456-7890</p>
      </section>
    </div>
  );
}

export default AboutUs;
