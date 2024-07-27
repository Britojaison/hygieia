import Pharmacy from "../assets/pharmacy-icon.png"
import notepad from "../assets/notepad.png"
import hospital from "../assets/hospital.png"
import video from "../assets/video.png"
import labtests from "../assets/labtests.png"
function home(){
    return (
        <div>      
            <div className="container">
        <a href="#" className="button button-1">
        <img className="pharm" src={Pharmacy} alt="pharmacy"></img>
            <div>Pharmacy Near Me</div>
            <div>FIND STORE</div>
        </a>
        <a href="#" className="button button-2">
        <img className="notepad" src={notepad} alt="notepad"></img>
            <div>Get 15% off on Medicines</div>
            <div>UPLOAD NOW</div>
        </a>
        <a href="#" className="button button-3">
        <img className="hospital" src={hospital} alt="hospital"></img>
            <div>Hospital Visit</div>
            <div>PRE-BOOK</div>
        </a>
        <a href="#" className="button button-4">
        <img className="video" src={video} alt="video"></img>
            <div>Video Consult</div>
            <div>IN 15 MIN</div>
        </a>
        <a href="#" className="button button-5">
        <img className="labtests" src={labtests} alt="labtests"></img>
            <div>Lab Tests</div>
            <div>AT HOME</div>
        </a>
    </div> 
        </div>
    )
}
export default home 