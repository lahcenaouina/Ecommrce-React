//imports libraries
import {useEffect, useRef, useState} from "react";
//hooks
import useProducts from "../Hooks/useProducts.jsx";

//styles
import "../App.css"
import '../assets/styles/CardProduct.css'
import {Fa0} from "react-icons/fa6";
//Components
import Card from "./Card.jsx";

const PagePosts = () => {
    const [limit, setlimit] = useState(1);
    const {Products, HasMoreProducts, IsLoading} = useProducts(limit);
    const LastPostRef = useRef(null);

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

    const Content = Products.map((item, i) => {
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
            <div className="container py-5">
                {!IsLoading && Content}
                {IsLoading && <p><Fa0 className='loading'/> Loading...</p>}
                {HasMoreProducts && <p><Fa0 className='loading'/> Loading...</p>}
            </div>
        </section>
    );
};

export default PagePosts;
