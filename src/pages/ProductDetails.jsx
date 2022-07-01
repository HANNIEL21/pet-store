import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct } from "../redux/actions/productAction";
import { useSelector, useDispatch } from 'react-redux';
 
const ProductDdetails = () => {

  const product = useSelector((state) => state.product);
  const { image, price, title, description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(product);

  const fetchProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => console.log("Error", err));

    dispatch(selectedProduct(res.data));
  } 

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className='container mt-4 py-5 bg-white rounded-3 shadow-sm'>
      {Object.keys(product).length === 0 ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className='row'>
          <div className="col-6">
            <img src={image} alt={title} />
          </div>
          <div className="col-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h3>{title}</h3>
                </div>
                <div className="col-12">
                  <p>{description}</p>
                </div>
                <div className="col-6">
                  <small>{price}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDdetails