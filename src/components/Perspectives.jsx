import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const OnePoint = () => <h4>ONE POINT PERSPECTIVE</h4>;
const TwoPoint = () => <h4>TWO POINT PERSPECTIVE</h4>;
const ThreePoint = () => <h4>THREE POINT PERSPECTIVE</h4>;

const Perspectives = ({ match }) => (
  <div>
    <ul>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/one`}>
          1
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/two`}>
          2
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/three`}>
          3
        </NavLink>
      </li>

    </ul>

    <Route path={`${match.url}/one`} component={OnePoint} />
    <Route path={`${match.url}/two`} component={TwoPoint} />
    <Route path={`${match.url}/three`} component={ThreePoint} />
    <Route path={match.url} render={() => <h1>PERSPECTIVES</h1>} />

  </div>
);

export default Perspectives;
