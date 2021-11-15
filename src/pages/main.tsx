import React from 'react'

import { Navigation } from '../components/navigation/navigation'

import { LINK_ABOUT, LINK_AGENT, LINK_MAIN, PATH_ABOUT, PATH_AGENT, PATH_MAIN } from './constants'

const navigationMap = {
  [LINK_MAIN]: `${PATH_MAIN}`,
  [LINK_AGENT]: `${PATH_AGENT}`,
  [LINK_ABOUT]: `${PATH_ABOUT}`
}

export const Main: React.FC = ({ children }) => (
  <div>
    <Navigation links={navigationMap} />
    {children}
  </div>
)
