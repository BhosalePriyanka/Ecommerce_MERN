import { render, screen, fireEvent,waitFor} from '@testing-library/react';
import {Provider } from "react-redux";
import Store from '../Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import Registerpage from '../Components/Registerpage';

function renderWithProviders(renderedComponent) {
render(
<BrowserRouter>
<Provider store = {Store}>{renderedComponent}</Provider>  
</BrowserRouter>
)
}

test("test heading of signup form",()=>{
renderWithProviders(<Registerpage/>)
screen.getByText('SIGN UP FORM')
})

test("test submit button of signup form", async() =>{
renderWithProviders(<Registerpage/>)
const submitButton = screen.getByRole("button",{name:"Submit"})
fireEvent.click(submitButton)
expect(await screen.findByText("All filed Required"))
})


  test("test signup form when password not strong",  async() =>{
  renderWithProviders(<Registerpage/>)
  fireEvent.change(screen.getByLabelText(/Email Id/i), {target: {value: "jiya78@gmail.com" }});
  fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: "ertyff"}});
  fireEvent.change(screen.getByPlaceholderText("Full Name"), {target: {value: "sdfs"}});
  fireEvent.change(screen.getByPlaceholderText("City"), {target: {value: "sdfs"}});
  fireEvent.change(screen.getByPlaceholderText("Building"), {target: {value: "45"}});
  fireEvent.change(screen.getByPlaceholderText("Zipcode"), {target: {value: "45"}});
  fireEvent.change(screen.getByLabelText(/Phone/i), {target: {value: "07466157236"}});
  const submit =  screen.getByRole("button" , {name : "Submit"})
  fireEvent.click(submit)
expect(screen.findByText("Passowrd is not strong enough"));

})                  