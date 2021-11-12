import React from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './components/navigation/index'
import { NAV_LINK_ABOUT, NAV_LINK_MAIN, NAV_LINK_NEWS } from './constants'

import './style.css'

const rootElement = document.getElementById('root')

const navigationMap = {
  [NAV_LINK_MAIN]: `${NAV_LINK_MAIN}`,
  [NAV_LINK_NEWS]: `${NAV_LINK_NEWS}`,
  [NAV_LINK_ABOUT]: `${NAV_LINK_ABOUT}`
}

const App = () => {
  return (
    <div>
      <Navigation links={navigationMap} />
    </div>
  )
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
)
