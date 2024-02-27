import React from 'react';
import './Main.css';

import { useSelector, useDispatch } from 'react-redux';
import {increaseItem , removeItem, decreaseItem, emptyCart} from '../Redux/Action/ProductAction';
import { MdDelete} from "react-icons/md";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
import {Image,Table} from 'react-bootstrap';


function Cart(){
const item= useSelector(state => state.item);
 const userDetails = localStorage.getItem("user");
let totalAmount = 0;
const dispatch = useDispatch();

const handleProceed = () =>{
	dispatch(emptyCart(item));
	alert("Payment done! Thank You.")
}

return( 
<>
<div>
{ item && item.length === 0 ? ( <h1>Your Cart Is Empty </h1> ) : 
item && item.map((item) => {	
const {id,title, image, price} = item;
if (isNaN(item.quantity)) {  item.quantity = 1}
totalAmount  += item.quantity * price;
return(
<div className = "col-lg-6 col-sm-12 mx-auto mt-5 p-0 shadow" key = {title}>
<Table bordered>
<thead>
<tr>
<th>Image</th>
<th> Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Amount</th>
</tr>
</thead>

<tbody >
<tr>
<td><Image  src ={image} style = {{height : 100 , weight:100}} /> </td>
<td> {title} </td>
<td> ${price} </td>
<td>
<div onClick = {()=> dispatch(increaseItem(item))} data-testid="add"><AiFillPlusCircle/> </div>
<div data-testid="count">{item.quantity}</div>
<div onClick={()=> dispatch(decreaseItem(item))} data-testid="minus"><AiFillMinusCircle/> </div>	
</td>
<td> ${item.quantity*price} </td>
<td><div onClick = {()=> dispatch(removeItem(item))} data-testid="delete"> <MdDelete/> </div></td>
</tr>
</tbody>
</Table>
</div>

);
})}

{totalAmount > 0 ? <div className="chekOut"> 
<br/>
<button className="btn btn-success">Total Amount to Pay :  ${totalAmount.toFixed(2)} </button>
<br/><br/>

{userDetails ? 
<Link to = {`/Payment`}>
<button className="btn btn-success" onClick={handleProceed} > Pay Now</button>
</Link>
 :
<Link to = {`/Login`}>
<button className="btn btn-success"> Proceed To Checkout</button>
</Link>
}
</div>
: ""
}
</div>
</>
)
}
export default Cart;


