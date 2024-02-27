import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar , Container, Nav, NavDropdown, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import {useNavigate} from 'react-router-dom';

export const NavBar = () => {
const item = useSelector(state => state.item);

const userDetails = JSON.parse(localStorage.getItem("user"));


const navigate = useNavigate();
function logout(){
   localStorage.clear();
   navigate("/Login", { replace: true });
}
return(
<> 

<Navbar bg="dark" variant="dark" expand="lg" fixed="top" className = "text-uppercase h4">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" variant="primary" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <NavLink className = "mx-2"  as={Link} to = {`./ProductListing`}>  Home </NavLink>
        <NavLink className = "mx-2" as={Link} to = {`./Cart`} data-testid="cart"> <AiOutlineShoppingCart/>{item.length} </NavLink>
    { userDetails ? 
        <NavDropdown title={ userDetails  && userDetails.userFullname} id="basic-nav-dropdown">
        <NavDropdown.Item onClick = {logout} data-testid="logout">Logout</NavDropdown.Item>
        </NavDropdown>
        : 
        <NavLink as= {Link} to = {`./Login`} className = "mx-2" data-testid="login"> Login </NavLink>

    }
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

</>
)
}

export default NavBar;