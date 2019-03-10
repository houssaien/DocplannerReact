import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import './footer.css';

class Footer extends Component {
  
  render() {
    return (
      <div>
    <hr></hr>
        <Container>
       
       <Row className="footer-title">

         <Col sm="12" >We are leaders in 10 countries: <a href="#">Poland</a>, <a href="#">Turkey</a>, <a href="#">Spain</a>, <a href="#">Italy</a>, <a href="#">Czech Republic</a>, <a href="#">Mexico</a>, <a href="#">Colombia</a>, <a href="#">Brazil</a>, <a href="#">Argentina</a> and <a href="#">Chile</a>

</Col>
       </Row>
<br/>
       <Row className="footer-title">

<Col sm="12" >
This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
www.docplanner.com © 2019 
</Col>
</Row>
       
     </Container>
      </div>
    );
  }
}

export default Footer;
