import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import AllCategories from "./Pages/AllCategories.jsx";
import Appliances from "./Pages/Appliances.jsx";
import Electronics from "./Pages/Electronics.jsx";
import Fashions from "./Pages/Fashions.jsx";
import FeaturedProducts from "./Pages/FeaturedProducts.jsx";
import NewArrivals from "./Pages/NewArrivals.jsx";
import Cars from "./Components/Cars.jsx";
import PagePosts from "./Components/PagePosts.jsx";
import Products from "./Components/Products.jsx";
import NotFound from "./Components/NotFound.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/AllCategories" element={<AllCategories />}>
                    <Route index element={<Cars />} />
                    <Route path="Cars" element={<Cars />} />
                    <Route path="posts" element={<PagePosts />} />
                    <Route path="products" element={<Products />}/>
                    <Route path="details/:id" element={<ProductDetails />} />
                </Route>
                <Route path="/Appliances" element={<Appliances />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Electronics" element={<Electronics />} />
                <Route path="/Fashions" element={<Fashions />} />
                <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
                <Route path="/NewArrivals" element={<NewArrivals />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
