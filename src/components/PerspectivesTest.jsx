import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const OnePoint = () => <h4>ONE POINT PERSPECTIVE</h4>;
const TwoPoint = () => <h4>TWO POINT PERSPECTIVE</h4>;
const ThreePoint = () => <h4>THREE POINT PERSPECTIVE</h4>;

const Perspectives = ({ match }) => (
  <div>
    <ul>
      <li>
        <NavLink activeClassName="active" to="/one">
          1
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/two">
          2
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/three">
          3
        </NavLink>
      </li>

    </ul>

    <Route path="/one" component={OnePoint} />
    <Route path="/two" component={TwoPoint} />
    <Route path="/three" component={ThreePoint} />
    <Route path="/" render={() => <h1>PERSPECTIVES</h1>} />

  </div>
);

export default Perspectives;
