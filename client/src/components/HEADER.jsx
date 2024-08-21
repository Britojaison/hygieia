import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
function header()
{
    return (
        
            <div className="header">
                <Link to="/"><img className="logo" src={Logo} alt="logo"></img></Link>
                <ul className="options">
                    <li>Pharmacy</li>
                    <li><a href="/">Consultation</a></li>
                    <li><a href="/">Lab Test</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
                <h2>
                    Profile
                </h2>
            </div>
    )
}

export default header