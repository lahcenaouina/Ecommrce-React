import { useParams } from "react-router-dom";
import {useEffect , useState} from "react";
import {getProductsbyId} from "../Api/Axios.js";
const ProductDetails = () => {
    const Params = useParams();
    const [IsLoading, setIsloading] = useState(true);
    const [DataProduct, setDataProdut] = useState([]);
    useEffect( () => {
        const Controller = new AbortController();
        const {singal} = Controller;
        try {
            getProductsbyId(Params.id , {singal}).then((data) => {
                setDataProdut(data)
                setIsloading(false)
            })
        }catch (errr) {
            console.log(errr.message);
        }
        return () => Controller.abort();
    } , [])


    return (
        <>
            {IsLoading && <p>Loading...</p>}
            {!IsLoading && JSON.stringify(DataProduct)}
        </>
    )

}

export default ProductDetails;