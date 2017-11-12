import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button, Well, ListGroup, ListGroupItem,
  ButtonToolbar, Navbar, FormGroup, FormControl, InputGroup,
  DropdownButton, MenuItem} from 'react-bootstrap'

class Recipes extends Component{

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
      borderRadius: 0, border: 0
    }
    let listHdr =
      (<div className="row">
        <span className="glyphicon glyphicon-th-list"></span>
        <div style={{float:'right', paddingRight:250}}>
        <p>MCK Seperation - Acme</p>
        </div>
      </div>)
    return (
      <ListGroup style={listStyle}>
        <ListGroupItem style={{borderRadius: 0, height: '8%'}}>
        <div style={{verticalAlign: 'middle'}}>
          <div style={{float:'left'}}><h4>Recipes</h4></div>
          <div style={{float:'right'}}>
          <ButtonToolbar>
            <Button bsSize="xsmall">RECIPES</Button>
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
          <DropdownButton bsSize="small" title="All Systems" id="dropdown-size-extra-small">
            <MenuItem eventKey="1">XM04</MenuItem>
            <MenuItem eventKey="2">XM05</MenuItem>
            <MenuItem eventKey="3">XM06</MenuItem>
          </DropdownButton>
          </div>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '76%'}}>
        <ListGroup style={listItemStyle}>
             <ListGroupItem header="MCK Seperation - Acme" style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>v 1</p>
               </div>
             </div>
             XM04</ListGroupItem>

             <ListGroupItem header="MCK Seperation - Acme" style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>v 2</p>
               </div>
             </div>
             XM04</ListGroupItem>

             <ListGroupItem header="MCK Seperation - Acme"  style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>v 33</p>
               </div>
             </div>
             XM04</ListGroupItem>

             <ListGroupItem header="MCK Seperation - Acme"  style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>v 5</p>
               </div>
             </div>
             XM04</ListGroupItem>

             <ListGroupItem header="MCK Seperation - Acme" style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>v 7</p>
               </div>
             </div>
             XM04</ListGroupItem>

        </ListGroup>
        </ListGroupItem>
        <ListGroupItem style={{borderRadius: 0, height: '5%'}}>5 Recipes</ListGroupItem>
      </ListGroup>
    )
  }
}
export default Recipes
