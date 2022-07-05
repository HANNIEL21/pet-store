import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

import { setProducts } from "../redux/actions/productAction"
import ItemsCard from './ItemsCard';
import Loading from "./Loading";

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

    console.log("products: ", products);


    return (
        <div className='row g-4 align-items-center justify-content-center'>
            {products.allProducts.products.length === 0 ?
                (
                    <div className="bg-white w-100 p-5 rounded-3 d-flex align-items-center justify-content-center">
                        <Loading color="red" />
                    </div>
                ) : (
                    <ItemsCard />
                )
            }
        </div >
    )
}

export default ProductListing