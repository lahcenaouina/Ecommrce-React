//imports libraries
import React, {useEffect, useRef, useState} from "react";
//hooks
import useProducts from "../Hooks/useProducts.jsx";

//styles
import "../App.css"
import '../assets/styles/CardProduct.css'
//Components
import Card from "./Card.jsx";
import {useStoreState} from "easy-peasy";
import FilterbyPrice from "./FilterbyPrice.jsx";
import {FaBars, FaDatabase, FaTh} from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs.jsx";
import LoadingProduct from "./effects/LoadingProduct.jsx";

const PagePosts = () => {
    const [limit, setlimit] = useState(1);
    const {Products, HasMoreProducts, IsLoading ,IsError , Error} = useProducts(limit);
    const LastPostRef = useRef(null);
    //convert to params (task)
    const [MinP, setMinP] = useState(0);
    const [MaxP, setMaxP] = useState(10000);
    const ObserverHandler = (entries) => {
        if (entries[0].isIntersecting && HasMoreProducts) {
            setlimit(prev => prev + 1)
        }
    };

    useEffect(() => {
        const Options = {}
        const Observer = new IntersectionObserver(ObserverHandler, Options)
        console.log("%cHasMoreProducts : " + HasMoreProducts, 'color : red')
        console.log("limit  : " + limit)
        if (LastPostRef.current) {
            Observer.observe(LastPostRef.current);
        }

        console.log(LastPostRef)
    }, [Products]);

    const Content = Products.filter(item => item.price >=MinP && item.price <=MaxP ).map((item, i) => {
        return (
            <div key={i}
                 ref={i + 1 === Products.length ? LastPostRef : null}>
                <Card Product={item}>
                </Card>
            </div>
        )
    });

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {/*SIDE BAR*/}
                    <aside className="col-md-3">
                        {/*FILTERS*/}
                        <div className="card">
                            <article className="filter-group">
                                <header className="card-header">
                                    <a
                                        href="#"
                                        data-toggle="collapse"
                                        data-target="#collapse_1"
                                        aria-expanded="true"
                                        className=""
                                    >
                                        <i className="icon-control fa fa-chevron-down" />
                                        <h6 className="title">Product type</h6>
                                    </a>
                                </header>
                                <div
                                    className="filter-content collapse show"
                                    id="collapse_1"
                                    style={{}}
                                >
                                    <div className="card-body">
                                        <form className="pb-3">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn-light" type="button">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <ul className="list-menu">
                                            <li>
                                                <a href="#">People</a>
                                            </li>
                                            <li>
                                                <a href="#">Watches </a>
                                            </li>
                                            <li>
                                                <a href="#">Cinema</a>
                                            </li>
                                            <li>
                                                <a href="#">Clothes</a>
                                            </li>
                                            <li>
                                                <a href="#">Home items </a>
                                            </li>
                                            <li>
                                                <a href="#">Animals</a>
                                            </li>
                                            <li>
                                                <a href="#">People </a>
                                            </li>
                                        </ul>
                                    </div>{" "}
                                    {/* card-body.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group  .// */}
                            <article className="filter-group">
                                <header className="card-header">
                                    <a
                                        href="#"
                                        data-toggle="collapse"
                                        data-target="#collapse_2"
                                        aria-expanded="true"
                                        className=""
                                    >
                                        <i className="icon-control fa fa-chevron-down" />
                                        <h6 className="title">Brands </h6>
                                    </a>
                                </header>
                                <div
                                    className="filter-content collapse show"
                                    id="collapse_2"
                                    style={{}}
                                >
                                    <div className="card-body">
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Mercedes
                                                <b className="badge badge-pill badge-light float-right">
                                                    120
                                                </b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Toyota
                                                <b className="badge badge-pill badge-light float-right">
                                                    15
                                                </b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Mitsubishi
                                                <b className="badge badge-pill badge-light float-right">
                                                    35
                                                </b>{" "}
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Nissan
                                                <b className="badge badge-pill badge-light float-right">
                                                    89
                                                </b>{" "}
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <div className="custom-control-label">
                                                Honda
                                                <b className="badge badge-pill badge-light float-right">
                                                    30
                                                </b>
                                            </div>
                                        </label>
                                    </div>{" "}
                                    {/* card-body.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <header className="card-header">
                                    <a
                                        href="#"
                                        data-toggle="collapse"
                                        data-target="#collapse_3"
                                        aria-expanded="true"
                                        className=""
                                    >
                                        <i className="icon-control fa fa-chevron-down" />
                                        <h6 className="title">Price range </h6>
                                    </a>
                                </header>
                                <div
                                    className="filter-content collapse show"
                                    id="collapse_3"
                                    style={{}}
                                >
                                    <div className="card-body">
                                        <input
                                            type="range"
                                            className="custom-range"
                                            min={0}
                                            max={100}
                                            name=""
                                        />
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Min</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$0"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group text-right col-md-6">
                                                <label>Max</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$1,0000"
                                                    type="number"
                                                />
                                            </div>
                                        </div>{" "}
                                        {/* form-row.// */}
                                        <button className="btn btn-block btn-primary">Apply</button>
                                    </div>
                                    {/* card-body.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <header className="card-header">
                                    <a
                                        href="#"
                                        data-toggle="collapse"
                                        data-target="#collapse_4"
                                        aria-expanded="true"
                                        className=""
                                    >
                                        <i className="icon-control fa fa-chevron-down" />
                                        <h6 className="title">Sizes </h6>
                                    </a>
                                </header>
                                <div
                                    className="filter-content collapse show"
                                    id="collapse_4"
                                    style={{}}
                                >
                                    <div className="card-body">
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> XS </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> SM </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> LG </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> XXL </span>
                                        </label>
                                    </div>
                                    {/* card-body.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <header className="card-header">
                                    <a
                                        href="#"
                                        data-toggle="collapse"
                                        data-target="#collapse_5"
                                        aria-expanded="false"
                                        className=""
                                    >
                                        <i className="icon-control fa fa-chevron-down" />
                                        <h6 className="title">More filter </h6>
                                    </a>
                                </header>
                                <div
                                    className="filter-content collapse in"
                                    id="collapse_5"
                                    style={{}}
                                >
                                    <div className="card-body">
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Any condition</div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Brand new </div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Used items</div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Very old</div>
                                        </label>
                                    </div>
                                    {/* card-body.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                        </div>{" "}
                    </aside>

                    {/*MAIN*/}
                    <main className="col-md-9">
                        <header className="border-bottom mb-4 pb-3">
                            <div className="d-flex justify-content-between">
                                <select className="mr-2 form-control w-50">
                                    <option>Latest Products</option>
                                    <option>Trending</option>
                                    <option>Most Popular</option>
                                    <option>Cheapest</option>
                                </select>
                                {/*TOGGLE LIST ITEMS*/}
                                <div className="btn-group">
                                    <a
                                        className="btn btn-outline-secondary"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="List view"
                                    >
                                       <FaBars/>
                                    </a>
                                    <a
                                        className="btn  btn-outline-secondary active"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Grid view"
                                    >
                                        <FaTh/>
                                    </a>
                                </div>
                            </div>
                        </header>
                        {/* BODY PRODUCTS */}
                        <div className="d-flex flex-column">
                            {Content}
                            {IsLoading  && (<LoadingProduct/>)}
                            {HasMoreProducts  && (<LoadingProduct Message={"Loading More Products ..."}/>)}

                        </div>
                    </main>
                </div>
            </div>
        </>

    );
};

export default PagePosts;
