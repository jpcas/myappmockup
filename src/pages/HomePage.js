import React from 'react';
import {Nav, Button, Card, Row, Col, Image, Form } from 'react-bootstrap';
import '../App.css';

function HomePage() {
    return (
<Card className="background-home">
<Card.Img src='https://i.imgur.com/CWeKPSu.jpeg' alt="Card image" />
<Card.ImgOverlay>
<Nav className="navbar-logo">
<img
        src="https://i.imgur.com/DFjZCkS.png"
        className="navbar-logo"
        alt="scarablogo"
        ></img>
</Nav>

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
      <Nav.Link eventKey="link-2" className="bikes">CONTACT</Nav.Link>
    </Nav.Item>
    <Button className="order-button">
        order a bike
      </Button>    
  </Nav>
  </Card.ImgOverlay>
  <Card.Body className="two-card">
    <Card.Title className="two-wheels">Make fun on two wheels</Card.Title>
    <Card.Text className="two-paragraph">
    Scarab is a new take on a custom bicycle. It should be easy. It should be fun. It should make the rider feel good. And it should be as socially and environmentally responsible as possible.
    </Card.Text>
    <Card.Text className="two-paragraph">
    We build custom performance bicycles in the storied Andes Mountains of Colombia, one of the most cycling-crazed places on Earth. 
    </Card.Text>
  </Card.Body>
  <Card.Body className="welcome-colombia">
    <Card.Text className="welcome-text">!Bienvenidos a Colombia!</Card.Text> 
  </Card.Body>
  <Card.Body className="bike-card">
    <h1 className="bike-title">BIKES</h1>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://i.imgur.com/PFsVf8D.jpg" thumbnail />
      <Card.Text className="name">
      <Card.Link href="#" className="name"><u>PARAMO</u></Card.Link>
      </Card.Text>
      <Card.Subtitle className="bike-subtitle">GRAVEL | ALL-ROAD</Card.Subtitle>
    </Col>
  
    <Col xs={6} md={4}>
      <Image src="https://i.imgur.com/GX2w96Y.jpeg" thumbnail />
      <Card.Text className="name">   
      <Card.Link href="#" className="name"><u>LETRAS</u></Card.Link>
    </Card.Text>
    <Card.Subtitle className="bike-subtitle">ROAD | ALL-PURPOSE</Card.Subtitle>

    </Col>
    <Col xs={6} md={4}>
      <Image src="https://i.imgur.com/FoNrVEm.jpeg" thumbnail />
      <Card.Text href="#" className="name">
      <Card.Link className="name" href="#"><u>LINEA</u></Card.Link>
    </Card.Text>
    <Card.Subtitle className="bike-subtitle">ROAD | CLASSIC</Card.Subtitle>
    </Col>
  </Row>
</Card.Body>
<Card.Body className="subscribe-card">
    <Card.Text className="subscribe">Subscribe.Please. </Card.Text>
    <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Email Address
      </Form.Label>
      <Form.Control
        className="control"
        id="inlineFormInput"
        placeholder="Email Address"
      />
    </Col>
    <Col xs="auto">
     
     
    </Col>
    <Col xs="auto">
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Sign Up
      </Button>
    </Col>
  </Form.Row>
</Form>
  </Card.Body>
  
</Card> 
 

     
    )
}

export default HomePage
