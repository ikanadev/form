import React, { useState, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ListIcon from '@material-ui/icons/List'
import PeopleIcon from '@material-ui/icons/People'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import ExitIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import ReleaseIcon from '@material-ui/icons/NewReleases'
import { useStore } from 'outstated'
import userState from '../../stores/user'

import styles from './DrawerMenu.styles'

const Drawermenu = ({
  open, onClose, history, match, classes
}) => {
  const { user } = useStore(userState)
  const [selectedItem, setItemSelected] = useState(0)
  const goToRoute = (route, index) => () => {
    setItemSelected(index)
    onClose()
    history.push(route)
  }
  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <Drawer open={open} onClose={onClose} PaperProps={{ style: { minWidth: 250 } }}>
      <div className={classes.header}>
        <AccountCircleIcon className={classes.icon} />
        <Typography>
          {`${user.nombre} ${user.appat}`}
        </Typography>
      </div>
      <List>
        <ListItem selected={selectedItem === 0} button onClick={goToRoute(match.url, 0)}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Mis Formularios" />
        </ListItem>
        {
          user.type === 'admin' && (
            <Fragment>
              <ListItem selected={selectedItem === 1} button onClick={goToRoute(`${match.url}/search-form`, 1)}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Buscar Formulario" />
              </ListItem>
              <ListItem selected={selectedItem === 2} button onClick={goToRoute(`${match.url}/users`, 2)}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Panel de Usuarios" />
              </ListItem>
            </Fragment>
          )
        }
        <ListItem selected={selectedItem === 3} button onClick={goToRoute(`${match.url}/password`, 3)}>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="Cambiar Password" />
        </ListItem>
        <ListItem selected={selectedItem === 4} button onClick={logout}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary="Salir" classes={{ root: styles.text }} />
        </ListItem>
      </List>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <List>
          <ListItem button onClick={goToRoute(`${match.url}/features`)}>
            <ListItemIcon>
              <ReleaseIcon color="primary" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ color: 'primary' }} primary="Novedades y sugerencias" classes={{ root: styles.text }} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(Drawermenu)
