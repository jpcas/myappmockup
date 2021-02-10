import React from 'react';
import {Card, Button, Nav} from 'react-bootstrap';

function HomePage() {
    return (
 
        <Card className="home-background" >
        <Card.Img src="https://i.imgur.com/HPBFCW7.jpg" alt="Card image" />
        <Card.ImgOverlay>
        <img
        src="https://i.imgur.com/DFjZCkS.png"
        className="navbar-logo"
        alt="scarablogo"
      />
        <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link href="/home" className="bikes">BIKES</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="bikes">JOURNAL</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="bikes">PROCESS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"className="bikes">CONTACT</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Button className="order-now">
        order a bike
      </Button>
    </Nav.Item>
  </Nav>
          <Card.Title className="title1">Hi, I'm JP.</Card.Title>
          <Card.Text className="description">
            I'm a full stack web developer. 
          </Card.Text>
          <div className="button">
       
          <Button variant="light" size="lg" >Get in Touch</Button> {' '}
          </div>
        </Card.ImgOverlay>
      
      </Card>
        
    )
}

export default HomePage
