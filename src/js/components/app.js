import React, {Component} from 'react'
import ReactDom from 'react-dom'
import MainMenuHeader from './menu-header'
import SubMenuHeader from './submenu-header'
import ContentLayout from './content-layout'


class App extends Component{
  render(){
    let styles = {
        position:'relative'
    }
    return (
    <div style={styles}>
      <MainMenuHeader />
      <SubMenuHeader />
      <ContentLayout/>
    </div>
    )
  }
}

export default App
