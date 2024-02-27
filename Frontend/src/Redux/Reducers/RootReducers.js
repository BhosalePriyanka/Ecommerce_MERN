import {ProductReducers , selectedProductReducers , getAddItem, loginUser } 
from './ProductReducers';

import {combineReducers} from 'redux';

export const RootReducers = combineReducers({

	allProducts: ProductReducers,
	product: selectedProductReducers,
	item:getAddItem,
	auth: loginUser
	
});
