
import { render, screen, fireEvent } from '@testing-library/react';
import {Provider } from "react-redux";
import Store from '../Redux/Store';
import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import Login from '../Components/Login'

function renderWithProviders(ui) {
 render(
  <BrowserRouter>
 <Provider store = {Store}>{ui}</Provider> 
 </BrowserRouter>
 )
}


test("test login component",() =>{
renderWithProviders(<Login/>)
screen.getByText("Login Form")
})

test("test login form",  async() =>{
renderWithProviders(<Login/>)
fireEvent.change(screen.getByLabelText("Email-Id"), {target: {value: "dgfdg@gmail.com" }});
fireEvent.change(screen.getByLabelText("Password"), {target: {value: ""}});
const submit = screen.getByRole("button" , { name : "Submit"})
fireEvent.click(submit);
expect(await screen.findByText('All filed are required'))
})
  
test("test login form",  async() =>{
renderWithProviders(<Login/>)
fireEvent.change(screen.getByLabelText('Email-Id'), {target: {value: "" }});
fireEvent.change(screen.getByLabelText('Password'), {target: {value: "priya12bhb"}});
const submit = screen.getByRole("button" , { name : "Submit"})
fireEvent.click(submit);
expect(await screen.findByText("All filed are required"))
})


test("test login form",  async() =>{
renderWithProviders(<Login/>)
fireEvent.change(screen.getByLabelText('Email-Id'), {target: {value: "mnbamdba@gmail.com" }});
fireEvent.change(screen.getByLabelText('Password'), {target: {value: "pwfd"}});
const submit = screen.getByRole("button" , { name : "Submit"})
fireEvent.click(submit);
expect(await screen.findByText("Email id is not correct"))
})
  
 

