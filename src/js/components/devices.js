import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button, Well, ListGroup, ListGroupItem,
  ButtonToolbar, Navbar, FormGroup, FormControl, InputGroup,
  DropdownButton, MenuItem} from 'react-bootstrap'
import Device from './device'

class Devices extends Component{

  render(){
    const wellStyles = {
      backgroundColor: 'white',
      margin: 0, borderRadius: 0,
      height: '100%', boxShadow: 'none', padding: 'none'
    }
    const listStyle = {
      borderRadius: 0, height: '100%'
    }
    const listItemStyle = {
      borderRadius: 0
    }
    return (
      <ListGroup style={listStyle}>
        <ListGroupItem style={{borderRadius: 0, height: '10%'}}>
        <div style={{verticalAlign: 'middle'}}>
          <div style={{float:'left'}}><h4>Devices</h4></div>
          <div style={{float:'right'}}>
          <ButtonToolbar>
            <Button bsSize="xsmall">DEVICES</Button>
            <Button bsStyle="primary" bsSize="xsmall">GROUPS</Button>
          </ButtonToolbar>
          </div>
        </div>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '9%', padding: 0, margin: 0}}>
        <Navbar style={{backgroundColor: 'white', borderRadius: 0, boxShadow: 'none',
        padding: 0, margin: 0,border: 'none'}}>
    <Navbar.Form>
      <FormGroup >
        <InputGroup>
          <InputGroup.Addon><span className="glyphicon glyphicon-search"></span></InputGroup.Addon>
          <FormControl type="text" placeholder="Search" />
        </InputGroup>
        </FormGroup>

    </Navbar.Form>
    </Navbar>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '68%'}}>
          <Device />
          <Device />
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '5%'}}>0 Devices</ListGroupItem>
      </ListGroup>
    )
  }
}
export default Devices
