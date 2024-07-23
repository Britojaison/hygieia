import Logo from "../assets/logo.png"

function header()
{
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo"></img>
            <h2>
                Profile
            </h2>
            
        </div>
    )
}

export default header