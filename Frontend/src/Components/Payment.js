import React from 'react';
function Payment(){

const userDetails = JSON.parse(localStorage.getItem("user"));
console.log(userDetails)
return(
<>

<h4 className="mb-5">Happy Shopping. Visit Again.</h4>

<p  className="fw-bold"> Shipping Address </p> 
{userDetails && userDetails.userFullname},<br/>
{userDetails && userDetails.address.building},
{userDetails && userDetails.address.city}, 
{userDetails && userDetails.address.zipcode}







</>
)
}
export default Payment;