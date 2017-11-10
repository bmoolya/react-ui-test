import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class SubMenuHeader extends Component{
  render(){
    let styles = {
  	   marginBottom:0,
  	   paddingLeft:0,
       borderRadius: 0
    }
    return (
    <Navbar fluid={true} style={styles}>
    <Nav activeKey={1}>
      <NavItem eventKey={1} href="#">MANAGER</NavItem>
      <NavItem eventKey={2} href="#">ROLES</NavItem>
      <NavItem eventKey={3} href="#">SETTINGS</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">HELP</NavItem>
    </Nav>
  </Navbar>
    )
  }
}

export default SubMenuHeader
