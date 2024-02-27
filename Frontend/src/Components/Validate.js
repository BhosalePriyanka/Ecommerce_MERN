function Validate (state , isLoginpage){

let isValid = true;
let error={};

 if(isLoginpage){
 	if(!state.password){
	error.password = "Password is required.";
	isValid = false;
}else if(state.password.length < 6){
	error.password = "Password must be 6 characters."
	isValid = false;
};
if(!state.username){
	error.username = "Username is required.";
	isValid = false;
					}
					}

else {
if(!state.email){
	error.email = "Email is required.";
	isValid = false;
} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
	error.email = "Invalid Email Id";
		isValid = false;
}
if(!state.password){
	error.password = "Password is required.";
	isValid = false;
}else if(state.password.length < 5){
	error.password = "Password must be 6 characters."
	isValid = false;
};
if(!state.username){
	error.username = "Username is required.";
	isValid = false;
}
if(!state.name.firstName){
	error.firstName = "Firstname is required.";
	isValid = false;
} else if(!/^[a-zA-Z]+$/.test(state.name.firstName)){
	error.firstName = "First name is letter only.";
	isValid = false;
} 
if(!state.name.lastName){
	error.lastName = "Lastname is required.";
	isValid = false;
} else if(!/^[a-zA-Z]+$/.test(state.name.lastName)){
	error.lastName = "Last name is letter only.";
	isValid = false;
}

if(!state.address.city){
	error.city = "City name is required.";
	isValid = false;
}else if(!/^[a-zA-Z\s]+$/.test(state.address.city)){
	error.city = "City name is letter only.";
	isValid = false;
}
if(!state.address.street){
	error.street = "Street name is required.";
	isValid = false;
}else if(!/^[a-zA-Z\s]+$/.test(state.address.street)){
	error.street = "Street name is letter only.";
	isValid = false;
}
if(!state.address.number){
	error.number = "House number is required.";
	isValid = false;
}

if(!state.address.zipcode){
	error.zipcode = "Zipcode is required.";
	isValid = false;
}
if(!state.phone){
	error.phone = "Phonenumber is required.";
	isValid = false;
}else if(state.phone.length < 11){
	error.phone = "Invalid mobile number .";
	isValid = false;
}
}
error.isValid = isValid;
return error;
};

export default Validate;