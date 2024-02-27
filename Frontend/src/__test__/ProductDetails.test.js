import ProductDetails from '../Components/ProductDetails';
import { render  , screen, fireEvent} from '@testing-library/react';
import {Provider } from "react-redux";
import Store from '../Redux/Store'
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '../Components/ProductListing';


function renderWithProviders(ui) {
    render (
    <BrowserRouter>
    <Provider store = {Store}>{ui}</Provider> ) 
    </BrowserRouter>
    )
  }

test("test product details component render", async() =>{
  renderWithProviders(<ProductDetails/>)
  expect(await screen.findByText("Loading...."))
   });

test("test product details component render", async() =>{
    renderWithProviders(<ProductListing/>)
    const allButton = screen.getByRole("button",{name:"Men Clothing"})
    fireEvent.click(allButton)
   const product =  await screen.findByText("Mens Casual Premium Slim Fit T-Shirts")
   fireEvent.click(product)
   renderWithProviders(<ProductDetails/>)
   expect( await screen.findByText('Mens Casual Premium Slim Fit T-Shirts'))
     });

