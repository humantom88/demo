import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Navigation } from './components/navigation/navigation'

import { About } from './pages/about'
import { Agent } from './pages/agent'
import { Main } from './pages/main'
import { PageNotFoundView } from './pages/page-not-found'

import {
  LINK_ABOUT,
  LINK_AGENT,
  LINK_MAIN,
  PATH_ABOUT,
  PATH_AGENT,
  PATH_MAIN
} from './pages/constants'
import { PageContainer } from './components/containers/page-container/page-container'

const navigationMap = {
  [LINK_MAIN]: `${PATH_MAIN}`,
  [LINK_AGENT]: `${PATH_AGENT}`,
  [LINK_ABOUT]: `${PATH_ABOUT}`
}

export const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navigation links={navigationMap} />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="agent" element={<Agent />} />
          <Route path="about" element={<About />} />
          <Route path="404" element={<PageNotFoundView />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </PageContainer>
    </div>
  )
}
