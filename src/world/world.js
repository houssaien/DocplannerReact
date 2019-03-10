import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './world.css';

class World extends Component {
  render() {
    return (
      <div className="back"> 


<Container>
     <br/>
        <Row >
          <Col sm="6">  
         
         <Row>
          <Col xs="10"><h3 className="title-world">The world's<br/>
                biggest healthcare platform</h3></Col>
               
                <p className="descip-world">We work from 6 offices all over the world, bringing Docplanner <br/>Group to life in almost 20 countries.</p>
          
        </Row>
       
        
        </Col>
          <Col sm="6">
         
         <Row>
          <Col xs="6"  className="card0"> <Card width="250px" height="270px">
       
        <CardBody width="250px" height="270px">
    
          <CardTitle> <img src="https://www.docplanner.com/img/flag.png" width="40px" height="40px" /></CardTitle>
          <CardSubtitle>Leader in 10 countries</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
       
        </CardBody>
      </Card> </Col>
      <br/>
      <br/>
          <Col xs="6"  className="card0">
          <Card width="250px" height="270px" className="card1">
       
        <CardBody width="250px" height="270px">
    
          <CardTitle> <img src="https://www.docplanner.com/img/visits.png" width="40px" height="40px" /></CardTitle>
          <CardSubtitle>1 million appointments</CardSubtitle>
          <CardText>booked last month </CardText>
       
        </CardBody>
      </Card> 
          </Col>

          <Col xs="6">
          <Card width="250px" height="270px">
       
        <CardBody width="250px" height="270px">
    
          <CardTitle> <img src="https://www.docplanner.com/img/patients.png" width="40px" height="40px" /></CardTitle>
          <CardSubtitle>30 million unique patients</CardSubtitle>
          <CardText>visit us every month  </CardText>
       
        </CardBody>
      </Card> 
          </Col>
 
          <Col xs="6" className="card2">
          <Card width="250px" height="270px">
       
        <CardBody width="250px" height="270px">
    
          <CardTitle> <img src="https://www.docplanner.com/img/doctors.png" width="40px" height="40px" /></CardTitle>
          <CardSubtitle>2 million active doctors</CardSubtitle>
          <CardText>trust in our solutions </CardText>
       
        </CardBody>
      </Card> 
          </Col>
        </Row>
         
          </Col>
         
        </Row>
        
      
       
      </Container>


      </div>
    );
  }
}

export default World;
