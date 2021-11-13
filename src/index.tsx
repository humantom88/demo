import React from 'react'
import ReactDOM from 'react-dom'
import { Navigate, useRoutes } from 'react-router-dom'

import { Navigation } from './components/navigation/navigation'
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
import { About } from './pages/about'
import { Agent } from './pages/agent'
import { AgentLayout } from './pages/agent-layout'
import { Main } from './pages/main'
import { PageNotFoundView } from './pages/page-not-found'
import './style.css'

const rootElement = document.getElementById('root')

const navigationMap = {
  [LINK_MAIN]: `${PATH_MAIN}`,
  [LINK_AGENT]: `${PATH_AGENT}`,
  [LINK_NEWS]: `${PATH_NEWS}`,
  [LINK_ABOUT]: `${PATH_ABOUT}`
}

const App = () => {
  return (
    <Router>
      <Navigation links={navigationMap} />
      <Switch>
        <Route path={PATH_ABOUT}>
          <About />
        </Route>
        <Route path={PATH_AGENT}>
          <Agent />
        </Route>
        <Route path={PATH_MAIN}>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Main />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Main /> },
      { path: '404', element: <PageNotFoundView /> },
      { path: 'agent', element: <Navigate to="/agent/list" /> }
    ]
  }

  const agentRoutes = {
    path: 'agent',
    element: <AgentLayout />,
    children: [
      { path: '', element: <Agent /> }
      // { path: '*', element: <Navigate to="/404" /> },
      // { path: ':id', element: <AccountDetailView /> },
      // { path: 'add', element: <AccountAddView /> },
      // { path: 'list', element: <AccountListView /> }
    ]
  }

  const routing = useRoutes([mainRoutes, agentRoutes])

  return <>{routing}</>
}

ReactDOM.render(<App />, rootElement)
