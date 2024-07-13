import Logo from "../assets/logo.png"

function header()
{
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo"></img>
            <img className="logo" src={Logo} alt="logo"></img>
            <img className="logo" src={Logo} alt="logo"></img>

        </div>
    )
}

export default header