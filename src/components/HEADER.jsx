import Logo from "../assets/logo.png"

function header()
{
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo"></img>
           
            <nav>
            <ul className="options">
                <li><a href="/">Pharmacy</a></li>
                <li><a href="/about">Consultation</a></li>
                <li>Lab Test</li>
            </ul>
            </nav>
            <h2>
                Profile
            </h2>
        </div>
    )
}

export default header