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
        <ListGroupItem style={{borderRadius: 0, height: '10%'}}>
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
