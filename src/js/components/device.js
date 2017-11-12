import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button, Panel, ListGroup, ListGroupItem, PanelGroup} from 'react-bootstrap'

class Device extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    console.log('name:'+this.props.name)
    console.log('colapsed:'+this.props.colapsed)
    const listItemStyle = {
      borderRadius: 0, margin:0, padding: 0, borderTop:0, borderLeft:0, borderRight:0
    }
    let open = this.state.open;

    //this.setState({open})
    let upDownBtn = open ? <span className="glyphicon glyphicon-chevron-up" /> :
      <span className="glyphicon glyphicon-chevron-down" />
    let plusBtn = (
      <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    )
    let editBtn = (
      <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
      </button>
    )
    let deleteBtn = (
      <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </button>
    )
    let panelHdr = (
      <div className="row" >
        <Button style={{padding: 2}} bsStyle="link" onClick={() => this.setState({ open: !this.state.open })}>
          {upDownBtn}
        </Button>Test<span style={{ fontStyle: 'italic'}}>(type string)</span>
        <div style={{float:'right', paddingRight:5}}>
          {plusBtn}
          {editBtn}
          {deleteBtn}
        </div>
      </div>
      )
    return (
      <Panel header={panelHdr} collapsible expanded={this.state.open}
        style={{margin:5, paddingRight: 0}}>
        <ListGroup style={listItemStyle}>
          <ListGroupItem style={listItemStyle}>
            <div className="row" style={{paddingLeft: 15, paddingRight: 15}}>
              thirdAttribute<span style={{ fontStyle: 'italic'}}>(type string)</span>
              <div style={{float:'right', paddingBottom: 1}}>
                {editBtn}
                {deleteBtn}
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem style={listItemStyle}>
            <div className="row" style={{paddingLeft: 15, paddingRight: 15}}>
              SecondAttribute<span style={{ fontStyle: 'italic'}}>(type string)</span>
              <div style={{float:'right'}}>
                <div style={{float:'right', paddingBottom: 1, paddingTop: 1}}>
                  {editBtn}
                  {deleteBtn}
                </div>
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem style={listItemStyle}>
            <div className="row" style={{paddingLeft: 15, paddingRight: 15}}>
              FirstAttribute<span style={{ fontStyle: 'italic'}}>(type string)</span>
              <div style={{float:'right'}}>
                <div style={{float:'right', paddingBottom: 1,paddingTop: 1}}>
                  {editBtn}
                  {deleteBtn}
                </div>
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
export default Device
