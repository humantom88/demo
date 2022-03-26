import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { About } from './pages/about'
import { Agent } from './pages/agent/agent'
import { Layout } from './pages/layout'
import { PageNotFoundView } from './pages/page-not-found'
// import { Main } from './pages/main'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Main />} /> */}
          {/* <Route path="agent" element={<Agent />} /> */}
          <Route path="/" element={<Agent />} />
          <Route path="about" element={<About />} />
          <Route path="404" element={<PageNotFoundView />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}
