import {useEffect , React } from 'react';
import ProductComponents from './ProductComponents';
import { setProducts } from '../Redux/Action/ProductAction';
import { useDispatch } from 'react-redux';
import './Main.css';
import { useErrorHandler } from 'react-error-boundary';

const ProductListing = () => { 
const handleError = useErrorHandler();
const dispatch = useDispatch();
const fetchProduct = async() => {
try {
const response = await fetch(`https://fakestoreapi.com/products`);
const jsonData = await response.json();
dispatch(setProducts(jsonData));
    }
    catch(error){
        handleError(error)
    }
}

useEffect(() =>  {
fetchProduct(); 
},[]);

return(
<>

<div className="d-flex flex-wrap justify-content-center">
<ProductComponents />
</div>

</>
)
}
export default ProductListing;