import React from 'react'
import { Navigate, useRoutes } from '../node_modules/react-router-dom/index'
import { Agent } from './pages/agent'
import { AgentLayout } from './pages/agent-layout'
import { Main } from './pages/main'
import { PageNotFoundView } from './pages/page-not-found'

export const App: React.FC = (): JSX.Element => {
    const mainRoutes = {
      path: '/',
      element: <Main />,
      children: [
        { path: '*', element: <Navigate to="/404" /> },
        { path: '/', element: <Main /> },
        { path: '404', element: <PageNotFoundView /> },
        { path: '/agent', element: <Agent /> }
      ]
    }
  
    const routing = useRoutes([mainRoutes])
  
    return <>{routing}</>
  }