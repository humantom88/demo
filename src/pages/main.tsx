import React from 'react'

import { Navigation } from '../components/navigation/navigation'

import {
    LINK_ABOUT,
    LINK_AGENT,
    LINK_MAIN,
    LINK_NEWS,
    PATH_ABOUT,
    PATH_AGENT,
    PATH_MAIN,
    PATH_NEWS
} from './constants'

const navigationMap = {
  [LINK_MAIN]: `${PATH_MAIN}`,
  [LINK_AGENT]: `${PATH_AGENT}`,
  [LINK_NEWS]: `${PATH_NEWS}`,
  [LINK_ABOUT]: `${PATH_ABOUT}`
}

export const Main = () => <div>
    <Navigation links={navigationMap} />
</div>
