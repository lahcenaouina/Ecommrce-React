import {useEffect, useState} from "react";
import {getDataPosts} from "../Api/Axios.js";


const usePosts = (PageNum = 1) => {
    const [Result, setResult] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [IsError, setIsError] = useState(false);
    const [Error, setError] = useState({});
    const [HasNextPage, setHasNextPage] = useState(false);


    useEffect(() => {
        const Controller = new AbortController();

        const { signal } = Controller

        getDataPosts(PageNum, {signal})
            .then((data) => {
                console.log(data)
                setResult(prev => [ ...prev,...data])
                setHasNextPage(Boolean(data.length))
                setIsloading(false)

            }).catch(e => {
                setIsloading(false);
                if (Controller.aborted) return
                setIsError(true);
                setError({Message: e.message})
            })


        return () => Controller.abort();

    }, [PageNum])

    return {Result, isLoading, IsError, Error, HasNextPage}
}

export default usePosts;