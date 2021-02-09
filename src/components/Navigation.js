import React from 'react';
import {Button, Nav} from 'react-bootstrap';


function Navigation() {
    return (
        <>
      <img
        src="https://i.imgur.com/DFjZCkS.png"
        className="navbar-logo"
        alt="scarablogo"
      />
    
  <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link href="/home">BIKES</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">JOURNAL</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">PROCESS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">CONTACT</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Button>
        order a bike
      </Button>
    </Nav.Item>
  </Nav>
</>
    )
}

export default Navigation
