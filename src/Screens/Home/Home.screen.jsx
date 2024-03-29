import React, { useState, Fragment, useEffect } from 'react'
import { withSnackbar } from 'notistack'
import { useStore } from 'outstated'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import CircularProgress from '@material-ui/core/CircularProgress'

import PrivateRoute from '../../utils/PrivateRoute'
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu'
import { axios, endpoints } from '../../utils'
import userState from '../../stores/user'

import FormList from '../FormList/FormList.screen'
import SeachForm from '../SearchForm/SearchForm.screen'
import Users from '../Users/Users.screen'
import UserForms from '../UserForms/UserForms'
import FormEst from '../FormEst/FormEst.screen'
import FormPro from '../FormPro/FormPro.screen'
import FormPre from '../FormPre/FormPre.screen'
import FormDoc from '../FormDoc/FormDoc.screen'
import FormIns from '../FormIns/FormIns.screen'
import ChangePassword from '../ChangePassword/ChangePassword.screen'
import Features from '../Features/Features.screen'
import Report from '../Report/Report.screen'

import styles from './Home.styles'

const Home = ({
  match, classes, history, enqueueSnackbar
}) => {
  const { path } = match
  const { user, setUserData } = useStore(userState)
  const [isDrawerOpen, setOpenDrawer] = useState(false)

  const toogleDrawer = () => {
    setOpenDrawer(!isDrawerOpen)
  }

  useEffect(() => {
    if (user.id === 0) {
      axios.get(endpoints.newUser)
        .then(({ data: { content } }) => {
          setUserData(content.user)
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            enqueueSnackbar(err.response.data.content, { variant: 'warning' })
            localStorage.removeItem('token')
            history.push('/')
          } else {
            enqueueSnackbar(err.message, { variant: 'error' })
            localStorage.removeItem('token')
            history.push('/')
          }
        })
    }
  }, [])

  return (
    <Fragment>
      {
        user.id === 0
          ? (
            <div className={classes.progressCont}>
              <CircularProgress />
            </div>
          )
          : (
            <Fragment>
              <DrawerMenu open={isDrawerOpen} onClose={toogleDrawer} history={history} match={match} />
              <MenuIcon className={classes.drawerIcon} onClick={toogleDrawer} />
              <Grid container className={classes.container}>
                <Grid item xs={12} md={12} lg={10} xl={8}>

                  <PrivateRoute path={path} component={FormList} exact />
                  <PrivateRoute path={`${path}/form-est`} component={FormEst} />
                  <PrivateRoute path={`${path}/form-pro`} component={FormPro} />
                  <PrivateRoute path={`${path}/form-pre`} component={FormPre} />
                  <PrivateRoute path={`${path}/form-doc`} component={FormDoc} />
                  <PrivateRoute path={`${path}/form-ins`} component={FormIns} />
                  {
                    user.type === 'admin' && (
                      <Fragment>
                        <PrivateRoute path={`${path}/search-form`} component={SeachForm} />
                        <PrivateRoute path={`${path}/users`} component={Users} />
                        <PrivateRoute path={`${path}/user-forms`} component={UserForms} />
                        <PrivateRoute path={`${path}/report`} component={Report} />
                      </Fragment>
                    )
                  }
                  <PrivateRoute path={`${path}/password`} component={ChangePassword} />
                  <PrivateRoute path={`${path}/features`} component={Features} />
                </Grid>
              </Grid>
            </Fragment>
          )
      }
    </Fragment>
  )
}

export default withSnackbar(withStyles(styles)(Home))
