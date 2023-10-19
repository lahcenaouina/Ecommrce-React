import React from 'react';
import '../assets/styles/popup.css'
import {FaWindowClose} from "react-icons/fa";
const Popup = ({isOpen, onClose}) => {
    return (
        isOpen && (
            <div className="popup" >
                    <>
                        <button className='close-button' onClick={onClose}><FaWindowClose/></button>
                        <div className="containerpop">
                            <form className="form">
                                <label>Email or Username : </label>
                                <input type="text" placeholder="Phone, email or username" size={22}/>
                                <label>Password : </label>
                                <input type="text" placeholder="Enter password" size={22}/>
                                <br/>
                                <input id="next" type="submit" defaultValue="Next"/>

                            </form>
                            <p>Or</p>
                            <button className="button">
                                <img
                                    src="https://img.icons8.com/color/48/undefined/google-logo.png"
                                    alt="google logo"
                                    className="img"
                                />
                                <p>Sign in with Google</p>
                            </button>


                            <p id="signup">
                                Don't have an account ? <a href="#">Sign up</a>
                            </p>
                        </div>

                    </>


            </div>
        )
    );
};

export default Popup;
