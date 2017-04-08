import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topics = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/one`}>
          1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/two`}>
          2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/three`}>
         3
        </Link>
      </li>
      
    </ul>

      <Route path={`${match.url}/one`} component={OnePoint}/>
      <Route path={`${match.url}/two`} component={TwoPoint}/>
      <Route path={`${match.url}/three`} component={ThreePoint}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>


  </div>
)

const OnePoint = () => <h4>ONE POINT PERSPECTIVE</h4>
const TwoPoint = () => <h4>TWO POINT PERSPECTIVE</h4>
const ThreePoint = () => <h4>THREE POINT PERSPECTIVE</h4>


export default Topics