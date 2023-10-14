import {getProducts} from '../Api/Axios';
import {useState, useEffect} from "react";

const useProducts = (limit = 15) => {
    const [Products , setProducts ] = useState([])
    const [IsError , setIsError ] = useState(false)
    const [Error , setError ] = useState(null)
    const [IsLoading , setIsLoading ] = useState(true)
    const [HasMoreProducts, setHasMoreProducts] = useState(true);

    useEffect( () => {
        const Controller = new AbortController();
        const {signal} = Controller;

        if (HasMoreProducts) {
            getProducts(limit , {signal}).then((data) => {
                console.log(data)
                setProducts(data);
                setIsLoading(false);
                setHasMoreProducts(Boolean((Products.length) !== 20 ))

            }).catch((err)=> {
                setIsLoading(false);
                if (Controller.aborted) return
                setError(err.message)
                setIsError(true)
            })
        }

        return () => {
            Controller.abort()
        }
    } , [limit])
    return {Products , HasMoreProducts , IsLoading ,IsError , Error}
}

export default useProducts;