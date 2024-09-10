import Logo from "../assets/imgs/logo.png"
function footer(){
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src={Logo} alt="Company Logo" className="footer-logo" />
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>CONTACT US</h4>
                    <p>+1 (844) 326-6005</p>
                    <p><a href="mailto:info@example.com">Email Us</a></p>
                    <p>Mon-Fri 9am-3pm PT</p>
                </div>
                <div className="footer-section">
                    <h4>CUSTOMERS</h4>
                    <p><a href="#">Return Policy</a></p>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Catalogs and Mailers</a></p>
                </div>
                <div className="footer-section">
                    <h4>COMPANY</h4>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Sustainability</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms</a></p>
                    <p><a href="#">Accessibility</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hygieia</p>
            </div>
        </footer>
    );
    
}

export default footer;