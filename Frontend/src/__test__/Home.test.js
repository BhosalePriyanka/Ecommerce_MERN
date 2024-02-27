import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';

const renderWithProviders = (ui)=>{
  render(
    <BrowserRouter>
    <Provider store = {Store}>
      {ui}
    </Provider>
    </BrowserRouter> 
  )
}

test('test Home component heading',() => {
  renderWithProviders(<Home />);
  const titleElement = screen.getByText("Welcome To E-Shopping Cart")
  expect(titleElement)
});

test('test carousel',()=>{
  renderWithProviders(<Home/>)
 expect(screen.getAllByRole("img")).toHaveLength(3)
})