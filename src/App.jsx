import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import PrivateRoute from './utils/PrivateRoute'

import Login from './Screens/Login/Login.screen'
import Home from './Screens/Home/Home.screen'
import withTheme from './utils/withTheme'

const App = () => (
  <React.Fragment>
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} exact />
      </Router>
    </SnackbarProvider>
  </React.Fragment>
)

export default hot(withTheme(App))
