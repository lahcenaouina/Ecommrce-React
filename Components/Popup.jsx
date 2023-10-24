import '../assets/styles/popup.css'
import {FaWindowClose} from "react-icons/fa";

const Popup = ({  isOpen, onClose , children}) => {

    return (
        isOpen && (
            <div className="popup" >
                    <>
                        <button className='close-button' onClick={onClose}><FaWindowClose/></button>
                        <div className="containerpop">
                            {children}
                        </div>

                    </>


            </div>
        )
    );
};

export default Popup;
