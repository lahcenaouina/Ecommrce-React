import '../assets/styles/CardProduct.css'
import {FaHeart, FaInfo, FaStar} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";
import {useStoreActions, useStoreState} from "easy-peasy";
import {useState} from "react";

const Card = ({Product}) => {
    const navigate = useNavigate();
    const addToWishlist = useStoreActions(Actions => Actions.wishlist.addToWishlist)
    const removeFromWishlist = useStoreActions(Actions => Actions.wishlist.removeFromWishlist)
    const Wishlist = useStoreState(state => state.wishlist.items);
    const [IsInWishlist, setIsInWishlist] = useState(Wishlist.includes(Product.id));

    const HandleWishBtn = () => {
        console.log("In the wishlit : " + IsInWishlist)
        if (IsInWishlist) {
            removeFromWishlist(Product.id)
            setIsInWishlist(false)
        } else {
            addToWishlist(Product.id)
            setIsInWishlist(true)

        }

    }


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
                                        <button
                                            className="btn btn-outline-warning btn-sm mt-2"
                                            type="button"
                                            style={{color: 'black'}}
                                        >
                                            ADD TO CART <FaCartShopping/>
                                        </button>
                                        <div className='d-flex justify-content-between'>
                                            <button className="btn btn-primary mt-2 btn-sm w-50"
                                                    onClick={() => navigate(`/details/${Product.id}`)} type="button">
                                                Details <FaInfo/>
                                            </button>
                                            <button
                                                className={IsInWishlist ? "btn btn-danger btn-sm mt-2 w-25" : "btn btn-outline-danger btn-sm w-25 mt-2"}
                                                type="button"
                                                onClick={HandleWishBtn}
                                            >
                                                <span ><FaHeart/></span>
                                            </button>
                                        </div>
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