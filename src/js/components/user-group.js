import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'

class UserGroup extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: this.props.colapsed
    };
  }

  render() {
    console.log('name:'+this.props.name)
    console.log('colapsed:'+this.props.colapsed)
    const listItemStyle = {
      borderRadius: 0, border: 0, margin:0, padding: 0
    }
    let open = this.state.open;
    //this.setState({open})
    let span = open ? <span className="glyphicon glyphicon-minus" /> :
      <span className="glyphicon glyphicon-plus" />
    return (
      <div>
        <Button bsStyle="link" onClick={() => this.setState({ open: !this.state.open })}>
          {span}
        </Button><span>{this.props.name}</span>
        <Panel collapsible expanded={this.state.open} style={{margin:0, padding: 0}}>
        <ListGroup style={listItemStyle}>
             <ListGroupItem header="Allen, Ollivia" href='#' style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>Engineer</p>
               </div>
             </div>
             EMD/gcortez</ListGroupItem>

             <ListGroupItem header="Ballard, Allejandro" href='#' style={listItemStyle}>
             <div style={{verticalAlign: 'middle'}}>
               <div style={{float:'left'}}></div>
               <div style={{float:'right'}}>
               <p>Engineer</p>
               </div>
             </div>
             EMD/gcortez</ListGroupItem>

        </ListGroup>
        </Panel>
      </div>
    );
  }
}
export default UserGroup
