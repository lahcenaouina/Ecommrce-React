import {Link, NavLink} from "react-router-dom";
import '../assets/styles/Navbar.css'
import {
    FaHeart,
    FaKey, FaQuestionCircle,
    FaSearch,
    FaSignOutAlt,
    FaUser, FaUserAlt
} from "react-icons/fa";
import {FaCartShopping, FaGear} from "react-icons/fa6";
import  {useState} from "react";
import {useStoreState} from "easy-peasy";
import Popup from "./Popup.jsx";
import LoginForm from "./LoginForm.jsx";

const Navbar = () => {
    const WislishLength = useStoreState(state => state.wishlist.items.length);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const UserData = useStoreState(state => state.User.Data)

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    return (<div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <Link to='/'>
                                <img className='logoMain'
                                     src='https://1000logos.net/wp-content/uploads/2021/04/AliExpress-logo.png'
                                     alt='logo'/>
                            </Link>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control "/>
                                    <button className="btn bg-white" type="submit">
                                        <FaSearch/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto">
                            <ul className="nav justify-content-end">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/"
                                          onClick={openPopup}>
                                        <FaCartShopping/> Cart (0)
                                    </Link>
                                    <Popup isOpen={isPopupOpen} onClose={closePopup}>
                                        <h1>CART</h1>
                                    </Popup>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <FaHeart style={WislishLength && {color: 'red'}}/> Wishlist ({WislishLength})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {UserData.length ?
                                        (<div className="dropdown">
                                            <button className="nav-link dropdown-toggle" type="button"
                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                               <FaUser/> Profile
                                            </button>
                                            <ul className="dropdown-menu rounded-2" aria-labelledby="dropdownMenuButton1">
                                                <Link className="dropdown-item" to='/Profile'> <FaUserAlt/> My Profile</Link>
                                                <li><a className="dropdown-item" href="#"> <FaGear/> Settings & privacy</a></li>
                                                <li><a className="dropdown-item" href="#"> <FaQuestionCircle/> Help & support</a></li>
                                                <li><a className="dropdown-item btn" onClick={() => {
                                                    console.log("Log out ! ")
                                                }
                                                }> <FaSignOutAlt/> Log out</a></li>
                                            </ul>
                                        </div>) :
                                        (
                                        <Link className="nav-link" onClick={openPopup}>
                                            <FaKey/> Login
                                        </Link>)}


                                    <Popup isOpen={isPopupOpen} onClose={closePopup}>
                                        <LoginForm closepopup={closePopup}/>
                                    </Popup>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-block d-sm-block d-md-none d-lg-none" to="/
              Funda">
                        ALIEXPRESS
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/AllCategories">All Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/NewArrivals">New Arrivals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/FeaturedProducts">Featured Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Electronics">Electronics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Fashions">Fashions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Accessories">Accessories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Appliances">Appliances</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>)
}

export default Navbar