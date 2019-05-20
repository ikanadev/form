import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'outstated'

import PrivateRoute from './utils/PrivateRoute'

import Login from './Screens/Login/Login.screen'
import Home from './Screens/Home/Home.screen'
import withTheme from './utils/withTheme'
import stores from './stores'

const App = () => (
  <React.Fragment>
    <SnackbarProvider maxSnack={3}>
      <Provider stores={stores}>
        <Router>
          <Route exact path="/" component={() => <Redirect to={{ pathname: '/home' }} />} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </Provider>
    </SnackbarProvider>
  </React.Fragment>
)

export default hot(withTheme(App))
