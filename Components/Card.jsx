import '../assets/styles/CardProduct.css'
import {FaHeart, FaInfo, FaStar} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";

const Card = ({Product}) => {
    const navigate = useNavigate();
    return (<>
            <div className="row justify-content-center mb-3 ">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img id='imgProduct'
                                             src={Product.image}
                                             className=" fixeSize"
                                        />
                                        <a href="#!">
                                            <div className="hover-overlay">
                                                <div
                                                    className="mask"
                                                    style={{
                                                        backgroundColor: "rgba(253, 253, 253, 0.15)"
                                                    }}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <h5>{Product.title}</h5>
                                    <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            {Array.from({length: Product.rating.rate}).map(star => (<FaStar/>))}
                                        </div>
                                        <span>{Product.rating.count}</span>
                                    </div>
                                    <div className="mt-1 mb-0 text-muted small">
                                        <span>100% cotton</span>
                                        <span className="text-primary"> • </span>
                                        <span>Light weight</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                      Best finish
                      <br/>
                    </span>
                                    </div>
                                    <div className="mb-2 text-muted small">
                                        <span>Unique design</span>
                                        <span className="text-primary"> • </span>
                                        <span>For men</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                      Casual
                      <br/>
                    </span>
                                    </div>
                                    <p className="text-truncate mb-4 mb-md-0">
                                        {Product.description}
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <h4 className="mb-1 me-1">{Product.price}<code>dh</code></h4>
                                        <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                                    </div>
                                    <h6 className="text-success">Free shipping</h6>
                                    <div className="d-flex flex-column mt-4">
                                        <button className="btn btn-primary btn-sm"
                                                onClick={() => navigate(`/AllCategories/details/${Product.id}`)} type="button">
                                            Details <FaInfo/>
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm mt-2"
                                            type="button"
                                        >
                                            Add to wishlist <FaHeart/>
                                        </button>
                                        <button
                                            className="btn btn-outline-warning btn-sm mt-2"
                                            type="button"
                                        >
                                            ADD TO CART <FaCartShopping/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Card;