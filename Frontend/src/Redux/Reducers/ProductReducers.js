const initialState = [];

export const ProductReducers = (state = initialState, action) => {
switch(action.type){
		case "SET_PRODUCTS": 
		return [ ...action.payload];
		default: 
		return state;
	}
};


export const selectedProductReducers = (state = {}, action) =>{
switch(action.type){
		case "SELECTED_PRODUCT":
		return{...state, ...action.payload};
		case "REMOVE_SELECTED_PRODUCTS":
		return{};
		default:return state;
	}
};


export const getAddItem = (state= [], action) => {
switch(action.type){	
	    case "ADDITEM":
		const  exist = state.filter((item) => item.id  === action.payload.id);
 		if (exist < 1){
			alert("added")
 		return [ ...state , action.payload];
 		}
		else{
			alert("Already Added")
			return state;
		}
}

switch(action.type){
	case "EMPTYCART":
	return state = [];

}

switch(action.type){
		case "REMOVEITEM":
		return state.filter((item) => item.id !== action.payload.id);
}



switch(action.type){
		case "DECREASEITEM":
			let exist1 = state.map((item) => {
				if(item.id === action.payload.id)
				{
				
				if(item.quantity > 1){
					return {...item , quantity: item.quantity - 1};
				}
				else {
					return {...item , quantity: 1};
				}
				} 
				return item;
			});
			return exist1;		
}



switch(action.type){
		case "INCREASEITEM":
			let exist1 = state.map((item) => {
				if(item.id === action.payload.id)
				{
					return {...item , quantity: item.quantity + 1};
				} 
				return item;
							});
			return exist1;		
}
 return state;

};


export const loginUser = (state={} ,action)=>{
	switch(action.type){
		case 'LOGIN': return {...action.payload}
	default: return state

	}
}