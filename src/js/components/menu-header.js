import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class MainMenuHeader extends Component{
  render(){
    let styles = {
  	   marginBottom:0,
       paddingLeft: 100,
       borderRadius: 0
    }
    return (
    <Navbar fluid={true} style={styles} >
      <Nav activeKey={4} >
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Recipe Editor</NavItem>
        <NavItem eventKey={3} href="#">Reporting</NavItem>
        <NavItem eventKey={4} href="#">Admin</NavItem>
      </Nav>
      <Nav pullRight>
        <span style={{fontFamily: 'Arial', fontStyle: 'normal', fontSize: 12, color: 'grey'}}>
          <b>jdoe</b><br/>ADMINISTRATOR</span>
      </Nav>
    </Navbar>
    )
  }
}

export default MainMenuHeader
