import React from 'react'
import ReactDOM from 'react-dom'
import { Image, ImageName } from './components/Image/index'
import { NAV_LINK_ABOUT, NAV_LINK_MAIN, NAV_LINK_NEWS } from './constants'
import style from './style.css'

const rootElement = document.getElementById('root')

const navigationLinkNames = [NAV_LINK_MAIN, NAV_LINK_NEWS, NAV_LINK_ABOUT]

const App = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Image name={ImageName.logo} />
        {navigationLinkNames.map((link) => (
          <div key={link} className={style.nav}>
            {link}
          </div>
        ))}
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
