import React from 'react';
import { Mail, Phone, Ship, Calendar, X } from 'lucide-react';
import './UserProfile.css';
import Header from '../components/HEADER';
import Userimg from "../assets/imgs/user.svg"


const Card = ({ children, className = '' }) => (
    <div className={`card ${className}`}>
        {children}
    </div>
);

const UserProfile = () => {
    return (
        <div>
            <Header isLoggedIn={true} />
            <div className="container">

                <div className="grid">

                    <Card className='main_c flex'>
                    <img style={{width:'10.6rem'}} src={Userimg} alt='user' />
                        <div className="space-y-2">
                            <h2 className="card-title">Personal Information</h2>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Age</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Sex</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Birth</span>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="card-title">Contact</h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span>Phone</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Email</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Address</span>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="card-title">Physical Information</h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span>Height</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Weight</span>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="card-title">Appointments</h2>
                        <div className="flex space-y-2">
                            <button className="button ">Upcoming</button>
                            <button className="button ">Past</button>
                        </div>
                        <div className="space-y-2">
                            <div className="appointment-item">
                                <div className="appointment-text">
                                    <Calendar className="appointment-icon" size={16} />
                                    <span>Appointment 1</span>
                                </div>
                                <X size={16} />
                            </div>
                            <div className="appointment-item">
                                <div className="appointment-text">
                                    <Calendar className="appointment-icon" size={16} />
                                    <span>Appointment 2</span>
                                </div>
                                <X size={16} />
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="card-title">Orders</h2>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Order 1</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Order 2</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;