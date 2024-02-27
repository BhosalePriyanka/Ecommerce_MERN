

 export const setProducts = (products) => {

return {
		type : "SET_PRODUCTS",
	  	payload : products

	  }

};

export const selectedProduct = (product) => {

	return {	
		type : "SELECTED_PRODUCT",
		payload : product
	};
};
export const removepriviousProduct = (product) =>{

	return{
		type: "REMOVE_SELECTED_PRODUCTS",
		payload:product
	};
};


export const cartItem = (product) => {
	return{
		type: "GETCARTITEM",
		payload:product
	};
};

export const getAddItem = (product) => {
	return{
		type: "ADDITEM",
		payload:product
	};
};

export const emptyCart = (product) =>{

	return{
		type: "EMPTYCART",
		payload:product
	};
};

export const increaseItem = (product) =>{
	return{
		type: "INCREASEITEM",
		payload:product
	};
};
export const decreaseItem = (product) =>{
	return{
		type: "DECREASEITEM",
		payload:product,
	};
};
export const removeItem = (product) =>{
	return{
		type: "REMOVEITEM",
		payload:product
	};
};


export const login = (user)=>{
	return{
		type:'LOGIN',
		payload:user
	}
}