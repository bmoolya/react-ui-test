import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button, Well, ListGroup, ListGroupItem,
  ButtonToolbar, Navbar, FormGroup, FormControl, InputGroup,
  DropdownButton, MenuItem} from 'react-bootstrap'
import UserGroup from './user-group'

class Users extends Component{

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
          <div style={{float:'left'}}><h4>Users</h4></div>
          <div style={{float:'right'}}>
          <ButtonToolbar>
            <Button bsSize="xsmall">USERS</Button>
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
          <div style={{float:'right'}}>
          <DropdownButton bsSize="small" title="All Roles" id="dropdown-size-extra-small">
            <MenuItem eventKey="1">Administrator</MenuItem>
            <MenuItem eventKey="2">Engineer</MenuItem>
            <MenuItem eventKey="3">Operator</MenuItem>
          </DropdownButton>
          </div>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '76%'}}>
          <UserGroup name='User Group A' colapsed={true}/>
          <UserGroup name='User Group B' colapsed={true}/>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '5%'}}>2 Users</ListGroupItem>
      </ListGroup>
    )
  }
}
export default Users
