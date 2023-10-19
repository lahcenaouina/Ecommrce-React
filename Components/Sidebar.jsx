import '../assets/styles/SideBar.scss'
import {NavLink} from "react-router-dom";
const Sidebar =  () => {
    return (
    <>
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/products">
                            AllProducts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts">
                            Posts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Customers
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Sidebar;