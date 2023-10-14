import {Link, NavLink} from "react-router-dom";
import '../assets/styles/Navbar.css'
import {FaBeer, FaCartPlus, FaHeart, FaSearch, FaUser} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";
import React from "react";

const Navbar = () => {
  return (
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <Link to='/'>
                  <img className='logoMain' src='https://1000logos.net/wp-content/uploads/2021/04/AliExpress-logo.png' alt='logo'/>
                </Link>
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div className="input-group">
                    <input   type="search" placeholder="Search your product" className="form-control "/>
                    <button className="btn bg-white" type="submit">
                        <FaSearch/>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">

                  <li className="nav-item">
                    <Link className="nav-link" to="/
                      <">
                      <FaCartShopping/> Cart (0)
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/
                      <">
                      <FaHeart/> Wishlist (0)
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/id=" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      <FaUser/> profile
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/profile"><i className="fa fa-user"></i> Profile</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/<i"><i className="fa fa-list"></i> My Orders</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/<i"><i className="fa fa-heart"></i> My Wishlist</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/<i"><i className="fa fa-shopping-cart"></i> My Cart</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/<i"><i className="fa fa-sign-out"></i> Logout</NavLink></li>
                    </ul>
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
              Funda Ecom
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
      </div>
  )
}

export default Navbar