import Sidebar from "../Components/Sidebar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useStoreState} from "easy-peasy";
import Popup from "../Components/Popup.jsx";
import {useState} from "react";

const Home = () => {
    const navigate = useNavigate();
    const Data = useStoreState(state => state.wishlist.items);



    return (
        <div>

            {/*{JSON.stringify(Data)}*/}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="btn btn-outline-dark" onClick={() => navigate('products')}
                        aria-current="page">Products
                    </li>
                </ol>
            </nav>
            <Outlet/>
        </div>

    )
}
export default Home