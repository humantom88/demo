import React from 'react'
import ReactDOM from 'react-dom'
import { NAV_LINK_ABOUT, NAV_LINK_MAIN, NAV_LINK_NEWS } from './constants'
import './style.css'

const rootElement = document.getElementById('root')

const App = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-link">{ NAV_LINK_MAIN }</div>
        <div className="nav-link">{ NAV_LINK_NEWS }</div>
        <div className="nav-link">{ NAV_LINK_ABOUT }</div>
      </nav>
    </div>
  )
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
)
