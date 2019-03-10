import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import './navbar.css';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Container>
     <br/>
        <Row >
          <Col xs="6" className="title">  
         
          <img  src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="180px" height="40px" />
        </Col>
          <Col className="tt" xs="6"><a className="title-link">About us</a>
          <a className="title-link">Career</a>
          <a className="title-link">Departments</a>
          </Col>
         
        </Row>
        
      
       
      </Container>
      </div>
    );
  }
}

export default Navbar;
