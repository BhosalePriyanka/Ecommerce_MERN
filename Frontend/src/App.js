
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import React from 'react';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Registerpage from './Components/Registerpage';
import Payment from './Components/Payment';
import ProductListing from './Components/ProductListing';
import { Provider } from 'react-redux';
import {Store} from './Redux/Store';
import {ErrorBoundary} from 'react-error-boundary';
import Fallback  from './Components/Fallback';

function App() {
return (
	
<Provider store = {Store}>
<Router>
<ErrorBoundary FallbackComponent = {Fallback}>
<NavBar />
</ErrorBoundary>
<ErrorBoundary FallbackComponent = {Fallback}>
<Home />
</ErrorBoundary>

<ErrorBoundary FallbackComponent={Fallback}>
<Routes>
<Route exact path = '*' element={<ProductListing/>} />
<Route exact path = '/product/:id' element={<ProductDetails/>}/>
<Route exact path = '/ProductListing' element={<ProductListing/>} />
<Route exact path = '/Login' element={<Login/>} /> 
<Route exact path = '/Registerpage' element={<Registerpage/>} /> 
<Route exact path = '/Login' element={<Login/>} /> 
<Route exact path = '/Payment' element={<Payment/>} /> 
<Route exact path = '/Cart' element={<Cart/>} /> 
</Routes>
</ErrorBoundary>

</Router>
<ErrorBoundary FallbackComponent = {Fallback}>
<Footer />
</ErrorBoundary>

</Provider>


);
}

export default App;
