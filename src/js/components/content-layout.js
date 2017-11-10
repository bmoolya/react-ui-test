import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Button} from 'react-bootstrap'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Users from './users'
import Recipes from './recipes'
import Devices from './devices'

class ContentLayout extends Component{

  render(){
    let divStyle = {
      margin: 0,
      padding: 0
    }
    let rowStyle = {
      margin: 0,
      padding: 0,
      height:'560px'
    }
    let styles = {
  	      margin: 0,
          padding: 0,
          height:'560px'
    }
    return(
      <div className="container-fluid" style={divStyle}>
      <div className="row" style={rowStyle}>
        <div className="col-md-4" style={styles}>
          <Users/>
        </div>
        <div className="col-md-4" style={styles}>
          <Recipes/>
        </div>
        <div className="col-md-4" style={styles}>
          <Devices/>
        </div>
      </div>
      </div>
    )
  }
}

export default ContentLayout
