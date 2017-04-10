import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Perspective from './Perspective'
import Main from './Main'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
   { path: '/',
    //sidebar: () => <div>One</div>,
    main: () => <Main />,
    exact: true,
  },
  { path: '/one',
    //sidebar: () => <div>One</div>,
    main: () => <Perspective type="One Point"/>
  },
  { path: '/two',
    //sidebar: () => <div>Two</div>,
    main: () => <Perspective type="Two Point"/>
  },
  { path: '/three',
    //sidebar: () => <div>Three</div>,
    main: () => <Perspective type="Three Point"/>
  }
]

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '20%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link exact to="/">Main</Link></li>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample