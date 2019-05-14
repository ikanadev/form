import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Screens/Login/Login.screen'
import withTheme from './utils/withTheme'

const App = () => (
  <React.Fragment>
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  </React.Fragment>
)

export default hot(withTheme(App))
