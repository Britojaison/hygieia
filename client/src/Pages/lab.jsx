import React from 'react';
import Header from '../components/HEADER';  // Adjust according to your project structure
import Footer from '../components/footer';
import "../assets/styles/lab.css"; // Your CSS file for this page
import image2 from '../assets/imgs/image2.png';

const Card = ({ labName, price, originalPrice }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="lab-name">{labName}</span>
        <span className="price">
          {price}$
          <span className="original-price">{originalPrice}$</span>
        </span>
      </div>
      <div className="card-footer">
        <button className="details-btn">View Details</button>
        <button className="add-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
};

function LabTestPage() {
  return (
    <div className="lab-test-page">
      <Header />
      <section className="lab-banner">
                <h2 className="title_lab">Lab Test</h2>
                </section>

      {/* Main Banner Section */}
      
      {/* Full Body Checkups Section */}
      <section>
        <h2>Lab Tests</h2>
        <div className="container">

          <div className="cards-container">
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            <Card labName="Mariyam Labs" price="1000" originalPrice="2000" />
            
            {/* Add more cards as needed */}
          </div>
        </div>
      </section>
      <hr/>
      {/* Buttons for Support, Lab Results, Cart */}
      <section className="lab-actions">
        <button class="button outline">Support</button>
        <button class="button solid">Lab Results</button>
        <button class="button outline">Cart</button>
      </section>

      {/* Most Booked Checkups Section */}
      <hr />
      <section className="most-booked-section">
        <div className="most-booked-text">
          <h2 className='most-booked-h2'>Most Booked <br /> Checkups</h2>
          <p className='lab-desc'>India’s fastest AI-powered & <br /> temperature-controlled supply chain to collect and test <br /> your blood in the freshest state.</p>
          <button className="button-outline">View All Checkups</button>
        </div>
        <div className="most-booked-image">
          <img src={image2} alt="Most Booked Checkups" />
        </div>
      </section>
      
      

      <Footer />
    </div>
  );
}

export default LabTestPage;