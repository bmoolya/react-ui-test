import '../scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Layout from './screens/layout'

ReactDOM.render(<App/>, document.getElementById('root'))
