import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectedProduct , getAddItem, removepriviousProduct} from '../Redux/Action/ProductAction';
import './Main.css';

import {Button} from 'react-bootstrap';


export const ProductDetails = () => {
const {id}  =useParams();
const dispatch = useDispatch();
const fetchSelectedProduct = async() => { 
await fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>{
		dispatch(selectedProduct(res))
	}).catch((error)=>{
		console.log(error)
	})
}
// const jsonData =  await response.json();
// dispatch(selectedProduct(jsonData));
	

useEffect(()=>{
	 fetchSelectedProduct();
	 return () =>{
	 	dispatch(removepriviousProduct());
	 } 
},[]);

const product= useSelector(state => state.product);
const {title, image, price,  description} = product;

return(
<>
<div className = "container">
{Object.keys(product).length === 0 ? ( <h1 className = "mt-5">Loading....  <div className="spinner-border"></div></h1> ) : 
(
	<div className ="container">
	<div className = "w-50 border mx-auto p-5 shadow">
		<img style ={{width : "10rem"}} src ={image} alt = {title}/>
		<div className = "mt-5 fw-bold">{title}</div>
		<div className = "pe-none mt-2"> <Button> Price:${price} </Button> </div>
		<div> ${description}</div>
		<Button variant = "dark" className = "m-2" onClick={() => dispatch(getAddItem(product))}>Add To Cart</Button> 
	</div>
	</div>
)}
</div>
</>
)
}

export default ProductDetails;