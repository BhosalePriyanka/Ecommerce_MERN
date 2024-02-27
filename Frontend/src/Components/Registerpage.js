import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

function Registerpage(){
const[error, setError] = useState();
const[user, setUser] = useState(false);
const navigate = useNavigate();
const [state, setState] = useState(
{
	email:'',
	password:'',
	fullname :'',
	address:{
				city:'',building:'',zipcode:''
			},
	phone: '',
}
);

const handleChange = (event) => {
	setState({...state,[event.target.name]:event.target.value
		});
	}
const handleNameChange = (event) => {
	setState({...state,
		name:{
			...state.name,
			[event.target.name]:event.target.value
		}
		});
	}
const handleAddressChange = (event) => {
	setState({...state,
		address:{
			...state.address,
			[event.target.name]:event.target.value
		}
		});
	}

const handleSubmit = async(event, isLoginpage) => {
event.preventDefault();
	// const response = await fetch('http://localhost:4000/api/user/register/',{
		const response = await fetch('https://ecommerce-mern-i4ht.onrender.com/api/user/register/',{
            method:"POST",
            mode: 'cors',
            headers: {
				'Content-type': 'application/json; charset=UTF-8',
			  },
            body:JSON.stringify(state)
        }) 
		const jsonData = await response.json()
		if(jsonData.error){
			setError(jsonData.error)
		}
		if(!jsonData.error){
			setError('')
			navigate('/home')
			alert('Registered.You are logged in')	
		}
}
return(
<>
<div className ="container mt-5 p-5">
<h3>SIGN UP FORM</h3>
<Form className = "border border-dark col-lg-6 col-sm-12 mx-auto mt-5 p-5">
<Form.Group>
    <Form.Label id = "emailid">Email Id</Form.Label><br/>
	<Form.Control aria-labelledby="emailid" type='email' name="email" value = {state.email} onChange={handleChange} />
</Form.Group>
	<br/>
<Form.Group>
	<Form.Label id="password">Password </Form.Label><br/>
	<Form.Control aria-labelledby="password"type='password' name="password" value = {state.password} onChange={handleChange}/>
	
</Form.Group>
	<br/>
	<Form.Group>
	<Form.Label aria-labelledby="fullname">FullName</Form.Label><br/>
	<div className = "row"> 
	<Form.Control  aria-labelledby="fullname" type='text'  className = "col"  name="fullname" value = {state.fullname && state.fullname} 
	onChange={handleChange}  placeholder="Full Name"/>

	</div>
</Form.Group>
	<br/>
<Form.Group>
	<Form.Label id ="address">Address</Form.Label><br/>
	<div className="row">
	<Form.Control aria-labelledby="address" type='text' className = "col"  name="city" value = { state.address && state.address.city} 
	onChange={handleAddressChange} placeholder="City"/>
	<Form.Control aria-labelledby="address" type='text' className = "col"  name="building" value = {state.address && state.address.building} 
	onChange={handleAddressChange} placeholder="Building"/>
	</div>
	<div className="row">
	<Form.Control aria-labelledby="address" type='text' className = "col"  name="zipcode" value = {state.address && state.address.zipcode}
	onChange={handleAddressChange} placeholder="Zipcode"/>
	</div>
	
	<br/>
	<Form.Label id ="phone" className = "fw-bold">Phone</Form.Label><br/>
	<Form.Control aria-labelledby="phone" type='number' name="phone" value = {state.phone} onChange={handleChange} placeholder="Phone"/>
</Form.Group>

	<br/> 
	<br/>
	{error && <p style={{color:'red'}}>{error}</p>}
	<Button variant="primary" onClick={handleSubmit} > Submit </Button>
</Form>
</div>
</>
	);
}

export default Registerpage;