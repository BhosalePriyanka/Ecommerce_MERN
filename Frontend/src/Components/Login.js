import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form , Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../Redux/Action/ProductAction'

function Login(){
const [state, setState] = useState(
{
	email: '',
	password:'',	
}
);
const [error, setError] = useState();
const navigate = useNavigate();
const dispatch = useDispatch()
const user = useSelector(state => state.auth)
const handleChange = (event) => {
		setState({...state,[event.target.name]:event.target.value});
	}

const handleSubmit = async(event) => {
event.preventDefault();
// setError(Validate(state , true));
// const response = await fetch('http://localhost:4000/api/user/login',{
	const response = await fetch('https://ecommerce-mern-i4ht.onrender.com/api/user/login',{
	method:"POST",
	mode: 'cors',
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
		'Authorization':`Bearer ${user.token}`
	  },
	body:JSON.stringify(state)
}) 


const jsonData = await response.json();
console.log(jsonData)
dispatch(login(jsonData))
if(jsonData.error){
	setError(jsonData.error)
}
if(!jsonData.error){
	setError({error:''})
	navigate('/ProductListing')
	 localStorage.setItem('user', JSON.stringify(jsonData))
}	
    }


	return(
		<>
	<div className ="container">
<h3>Login Form</h3>
<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5">
		<Form.Group>
		<Form.Label id="email"> Email-Id </Form.Label>
		<Form.Control aria-labelledby="email" type='text'name="email" value = {state.email} 
		onChange={handleChange} autoComplete = "off" />
	
		</Form.Group>

		<Form.Group>
		<Form.Label id="password">Password</Form.Label>
		<Form.Control aria-labelledby="password"  type='password' name="password" value = {state.password}
		 onChange={handleChange} autoComplete ="off"/>
	
		</Form.Group>
		<br/>

		<Button onClick = {handleSubmit} variant="primary"> Submit </Button> 
 		{error && <p style={{color:'red'}}>{error}</p>} 

		<p>New User Register Now.</p>
		<Link  to = {`/Registerpage`}>
		<Button variant= "primary">Sign Up</Button>
		</Link>
	
</Form>

</div>
		</>
		)
}
export default Login;