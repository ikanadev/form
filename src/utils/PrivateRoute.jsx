import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { checkAuth } from '.'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkAuth()) {
          return <Component {...props} />
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
