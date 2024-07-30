import Logo from "../assets/logo.png"
import bg from "../assets/image.png"

function header()
{
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo"></img>
           
            <nav>
            <ul className="options">
                <li><a href="/pharmacy.jsx">Pharmacy</a></li>
                <li><a href="/about">Consultation</a></li>
                <li><a href="/">Lab Test</a></li>
                <li><a href="#aboutus1">About us</a></li>
            </ul>
            </nav>
            <h2>
                Profile
            </h2>
        </div>
    )
}

export default header