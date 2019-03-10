import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import './title.css';

class Title extends Component {
  
  render() {
    return (
      <div>
        <img className="logo"  src="https://www.docplanner.com/img/sygnet.png" width="40px" height="40px" />

        <p className="title">Making the healthcare experience more human </p>

        <Container>
     <br/>
        <Row >
          <Col sm="6">  
         <p className="descrip">
         We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, 
         and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. 
         </p>
        
        </Col>
          <Col sm="6">
         <p className="descrip">
         We also help doctors to better manage their practice and build their online reputation.
          With our integrated end-to-end solution, doctors are able not only to improve their online presence,
           but also to devote their time to what really matters: their patients. 
         </p>
          </Col>
         
        </Row>
        
      
       
      </Container>
      </div>
    );
  }
}

export default Title;
