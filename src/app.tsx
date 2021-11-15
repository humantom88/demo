import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { About } from './pages/about'
import { Agent } from './pages/agent'
import { Main } from './pages/main'
import { PageNotFoundView } from './pages/page-not-found'

export const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="agent" element={<Agent />} />
      <Route path="about" element={<About />} />
      <Route path="404" element={<PageNotFoundView />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
