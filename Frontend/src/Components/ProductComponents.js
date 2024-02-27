import React from 'react';
import { useSelector}  from 'react-redux';
import './Main.css';
import {Link} from 'react-router-dom';
import { Button, Nav} from 'react-bootstrap';
import { getAddItem} from '../Redux/Action/ProductAction';
import {useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';


export const ProductComponents = () => {
const products = useSelector(state => state.allProducts);
const[filter, setFilter] = useState(products);
const dispatch = useDispatch();
const filterProduct = (cat) =>{
const filterCat = products.filter(product => { return product.category === cat });
setFilter(filterCat);
}

useEffect(() => {
	setFilter(products)
},[products]);


return(
<>

<Nav className = "my-1 w-100 d-block mx-auto" >
<ul className = "d-lg-flex d-sm-block  list-unstyled justify-content-center">
<li><Button className = "mx-2" variant = "dark" onClick={() => setFilter(products)}>All</Button></li>
<li><Button className = "mx-2" variant = "dark" onClick={()=> filterProduct("men's clothing")}> Men Clothing </Button></li>
<li><Button className = "mx-2" variant = "dark" onClick={()=> filterProduct("women's clothing")}>Women clothing </Button></li>
<li><Button className = "mx-2" variant = "dark" onClick={()=> filterProduct("jewelery")}>Jewelery</Button></li>
<li><Button className = "mx-2" variant = "dark" onClick={()=> filterProduct("electronics")}>Electronics</Button></li>
</ul>      
</Nav>

 { filter.map((product) => {
const { id, title, image, price} = product;


return (
	<div style = {{ width : "22rem" , height:"auto"}} className ="m-3 p-3 border shadow" key = {title} >
		<img style = {{width : "15rem" , height: "15rem"}} src ={image} alt = {title}/>
		<Link data-testid="cartLink"  to = {`/product/${id}`}>
		<div className = "fw-bold">{title}</div>
		</Link>
		<div className = "mt-3"> <button> Price:${price} </button> </div>
		<Button variant = "dark" className = "m-2" onClick={() => dispatch(getAddItem(product))}>Add To Cart</Button>
		
	</div>
	);
 

})}

</>
);
}

export default ProductComponents;
