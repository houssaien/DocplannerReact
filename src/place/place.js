import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './place.css';
const thePlaces = [
  {
    name: 'Warsaw',
    image: 'https://www.docplanner.com/images/warsaw@2x.png',
  },
  {
    name: 'Barcelona',
    image: 'https://www.docplanner.com/images/barcelona.png',
  },
  {
    name: 'Istanbul',
    image: 'https://www.docplanner.com/images/istanbul.png',
  }
]

function Places(props) {
  const placesList = props.placesList
  return  placesList.map((place, i) =>
      
      <Container >
      <Row >
       <Col  key={i}>
       <Card className="card-picture">
        <CardImg  src={place.image} />
        
        <CardTitle>
       <br/>
        {place.name}
        <Button color="primary" size="sm">See openings</Button>
        </CardTitle>
      </Card>  
      </Col>
      </Row>  
      </Container>
      

    )
}
class Place extends Component {
  
 
  

  
  render() {
    return (
      <div>
       

        <p className="title">Improve the lives of millions. Change yours forever </p>

      
      
      
       <Container>
       
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.
</Col>
        </Row>
        
      </Container>
      <Places  placesList={thePlaces} />
      </div>
    );
  }
}

export default Place;
