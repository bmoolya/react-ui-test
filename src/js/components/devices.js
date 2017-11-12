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
        <ListGroupItem style={{borderRadius: 0, height: '8%'}}>
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
        <ListGroupItem style={{borderRadius: 0, height: '10%', margin: 0, borderBottom: 0}}>
          <div style={{float:'left', width: 250}}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-search"></span></InputGroup.Addon>
              <FormControl type="text" placeholder="Search" />
            </InputGroup>
          </div>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '76%'}}>
          <Device />
          <Device />
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '5%'}}>0 Devices</ListGroupItem>
      </ListGroup>
    )
  }
}
export default Devices
