import React, { lazy, Suspense } from 'react';
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
import Products from "./Components/Products.jsx";
import NotFound from "./Components/NotFound.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

const LazyProfile = lazy(() => import("./Pages/Profile.jsx"));

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/Profile"
                    element={
                        <Suspense fallback="<h1>LOADING...</h1>">
                            <LazyProfile />
                        </Suspense>
                    }
                />
                <Route exact path="/AllCategories" element={<AllCategories />} />
                <Route path="/" element={<Home />}>
                    <Route index path="products" element={<Products />} />
                    <Route path="products/details/:id" element={<ProductDetails />} />
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
