import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from '../node_modules/react-router-dom/index'

import { App } from './app'
import './style.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
