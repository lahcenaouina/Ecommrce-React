import React, { useState, useRef, useEffect, useCallback } from "react";
import usePosts from '../Hooks/usePosts';
import Post from '../Components/Post';
import "../App.css"
const PagePosts = () => {
    const [PageNum, setPageNum] = useState(1);
    const { Result, HasNextPage, Error, IsError, isLoading } = usePosts(PageNum);
    const LastPostRef = useRef(null);

    const ObserverHandler = (entries) => {
        if (entries[0].isIntersecting && HasNextPage) {
            console.log('We are near the last post!')
            setPageNum(prev => prev + 1)
        }
    };

    useEffect(() => {
        const Options = {}
        const Observer = new IntersectionObserver(ObserverHandler, Options)

        if (LastPostRef.current) {
            Observer.observe(LastPostRef.current);
        }

        console.log(LastPostRef)
    }, [Result]);

    const Content = Result.map((item, i) => (
        <div key={i} ref={i + 1 === Result.length ? LastPostRef : null}>
            <div className="card">
                <img className='h-50 w-50' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/640px-Mr._Krabs.svg.png" />
                <div className="card-header">POST : {item.userId} | ID Post: {item.id}</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        {item.body}
                        <footer className="blockquote-footer">
                            <br />
                            <cite title="Source Title">{item.title}</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <div>
                {Content}
                {HasNextPage && (<h1>LOADING...</h1>)}
            </div>
        </>
    );
};

export default PagePosts;
