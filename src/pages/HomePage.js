import React from 'react';
import { Navbar, NavDropdown, Nav} from 'react-bootstrap';

function HomePage() {
    return (
        <Navbar bg="transparent" expand="lg">
    <div>
    <img
        src="https://i.imgur.com/DFjZCkS.png"
        className="navbar-logo"
        alt="React Bootstrap logo"
      />
    </div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <NavDropdown title="Bikes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link">Journal</Nav.Link>
              <Nav.Link href="#link">Process</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        
        
    )
}

export default HomePage
