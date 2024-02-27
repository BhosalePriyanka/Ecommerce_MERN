
import { fireEvent, render  , screen} from '@testing-library/react';
import {Provider } from "react-redux";
import Store from '../Redux/Store'
import Cart from '../Components/Cart'
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '../Components/ProductListing';
import NavBar from '../Components/NavBar';



function renderWithProviders(ui) {
    render (
    <BrowserRouter>
    <Provider store = {Store}>{ui}</Provider> 
    </BrowserRouter>
    ); 
  }

test("test Cart component render", async() =>{
  renderWithProviders(<Cart/>)
  expect(screen.getByText("Your Cart Is Empty"))
});
     
test("test count of item in cart",async()=>{
  renderWithProviders(<ProductListing/>)
  window.alert = () => {}; // provide an empty implementation for window.alert, as test passed to suppress window.alert error
  expect(await screen.findByText("Mens Casual Premium Slim Fit T-Shirts"))
  const addtoCartButton = screen.getAllByRole("button",{name:"Add To Cart"})[1]
  fireEvent.click(addtoCartButton)
  renderWithProviders(<NavBar/>)
  const cart = screen.getByTestId("cart")
  fireEvent.click(cart)
  renderWithProviders(<Cart/>)
  expect(await screen.findAllByText("Mens Casual Premium Slim Fit T-Shirts"))
  const add = screen.getByTestId("add")
  fireEvent.click(add)
  expect(screen.getByTestId('count').textContent).toEqual("2")
  const minus = screen.getByTestId("minus")
  fireEvent.click(minus)
  expect(screen.getByTestId('count').textContent).toEqual("1")
})
  