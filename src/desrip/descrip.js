import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './descrip.css';

class Descrip extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

  render() {
    return (
      <div>

        <Container>
     <br/>
        <Row >
          <Col sm="6" >  
         <div className="descrip1">
         <p className="title1">For patients</p>
         <p className="title1-desc">Find a doctor, book a visit and solve any health-related doubt</p>
         <Row>
          <Col xs="4"><ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="secondary">
          CHOOSE COUNTRY
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown></Col>
          <Col xs="8"> <img className="logo"  src="https://www.docplanner.com/img/screen-marketplace@2x.png" height="230px"/></Col>
        </Row>
         </div>
        
        </Col>
          <Col sm="6">
         <div  className="descrip2">
         <p className="title1">For doctors</p>
         <p className="title1-desc">Save time managing visits and cut no-shows by half</p>
         <Row>
          <Col xs="4"></Col>
          <Col xs="8"><img className="logo"  src="https://www.docplanner.com/img/screen-saas@2x.png" height="230px"/></Col>
        </Row>
         </div>
          </Col>
         
        </Row>
        
      
       
      </Container>
      </div>
    );
  }
}

export default Descrip;
