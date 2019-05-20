import React, { useState, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

import PrivateRoute from '../../utils/PrivateRoute'
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu'

import FormList from '../FormList/FormList.screen'
import Users from '../Users/Users.screen'
import FormEst from '../FormEst/FormEst.screen'

import styles from './Home.styles'

const Home = ({ match, classes, history }) => {
  const { path } = match
  const [isDrawerOpen, setOpenDrawer] = useState(false)

  const toogleDrawer = () => {
    setOpenDrawer(!isDrawerOpen)
  }

  return (
    <Fragment>
      <DrawerMenu open={isDrawerOpen} onClose={toogleDrawer} history={history} match={match} />
      <MenuIcon className={classes.drawerIcon} onClick={toogleDrawer} />
      <Grid container className={classes.container}>
        <Grid item xs={12} md={10} lg={8} xl={6}>

          <Paper className={classes.paperContainer}>
            <PrivateRoute path={path} component={FormList} exact />
            <PrivateRoute path={`${path}/users`} component={Users} />
            <PrivateRoute path={`${path}/form-est`} component={FormEst} />
          </Paper>

        </Grid>
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(Home)
