//imports libraries
import {useEffect, useRef, useState} from "react";
//hooks
import useProducts from "../Hooks/useProducts.jsx";

//styles
import "../App.css"
import '../assets/styles/CardProduct.css'
//Components
import Card from "./Card.jsx";
import {useStoreState} from "easy-peasy";
import FilterbyPrice from "./FilterbyPrice.jsx";

const PagePosts = () => {
    const [limit, setlimit] = useState(1);
    const {Products, HasMoreProducts, IsLoading} = useProducts(limit);
    const LastPostRef = useRef(null);
    const WishlistItems = useStoreState(state => state.wishlist.items)
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
            <div  key={i}
                 ref={i + 1 === Products.length ? LastPostRef : null}>
                <Card Product={item}>
                </Card>
            </div>

        )
    });

    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container d-flex">
                <div className='d-flex w-25'>
                    {[MinP , MaxP].toString()}
                    <br/>
                    {JSON.stringify(WishlistItems)}
                    <FilterbyPrice setMinP={setMinP} setMaxP={setMaxP}/>
                </div>
                <div className='d-flex w-75 h-100 flex-column'>

                    {!IsLoading && Content}
                    {(IsLoading || IsLoading) && (<div className="spinner">
                        <h3><span className="visually-hidden">visuallyhidden</span></h3>
                    </div>)}
                </div>

            </div>
        </section>
    );
};

export default PagePosts;
