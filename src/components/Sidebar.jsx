import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import OnePoint from './OnePoint'
import Home from './Home'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
   { path: '/',
    //sidebar: () => <div>One</div>,
    //main: () => <Home />
  },
  { path: '/one',
    //sidebar: () => <div>One</div>,
    main: () => <OnePoint />
  },
  { path: '/two',
    //sidebar: () => <div>Two</div>,
    main: () => <h2>Two</h2>
  },
  { path: '/three',
    //sidebar: () => <div>Three</div>,
    main: () => <h2>Three</h2>
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
          <li><Link to="/">Main</Link></li>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
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