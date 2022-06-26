import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

import {setProducts} from "../redux/actions/productAction"
import ItemsCard from './ItemsCard';

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log("FetchError: ", err.message));
        dispatch(setProducts(res.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
    console.log("products: ",products);


    return (
        <div className='row g-4 align-items-center justify-content-center'>
            <ItemsCard />
        </div>
    )
}

export default ProductListing