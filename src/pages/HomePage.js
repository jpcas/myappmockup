import React from 'react';
import {Nav} from 'react-bootstrap';
import '../App.css';

function HomePage() {
    return (
<>

    <Nav className="justify-content-end">
    <Nav.Item >
      <Nav.Link href="/home" className="bikes">BIKES</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="bikes">JOURNAL</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="bikes">PROCESS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</>
        
        
    )
}

export default HomePage
