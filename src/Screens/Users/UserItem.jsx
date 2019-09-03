import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Switch from '@material-ui/core/Switch'
import PersonIcon from '@material-ui/icons/Person'
import { useStore } from 'outstated'

import ActionButton from '../../Components/ActionButton/ActionButton'
import { axios, endpoints } from '../../utils'
import userState from '../../stores/user'

const UserItem = ({
  fetchUsers, user, enqueueSnackbar, history
}) => {
  const { user: currentUser } = useStore(userState)
  const [loading, setLoading] = useState(false)
  const handleChange = id => () => {
    setLoading(true)
    axios.post(endpoints.handleActive, { id })
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Cambiado los permisos.', { variant: 'success' })
        fetchUsers()
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar(err.message, { variant: 'error' })
      })
  }
  const handleAdmin = id => () => {
    setLoading(true)
    axios.post(endpoints.handleAdmin, { id })
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Cambiado los permisos.', { variant: 'success' })
        fetchUsers()
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar(`Error al cambiar Permisos: ${err.message}`, { variant: 'error' })
      })
  }
  const goToUserForms = () => {
    history.push('/home/user-forms', { userId: user.id })
  }
  if (user.id === currentUser.id) {
    return null
  }
  return (
    <TableRow key={user.id} hover>
      <TableCell>
        <PersonIcon />
        {` ${user.appat} ${user.apmat} ${user.nombre} `}
      </TableCell>
      <TableCell align="right">{user.correo}</TableCell>
      <TableCell align="right">{user.cel}</TableCell>
      <TableCell align="right">{user.ci}</TableCell>
      <TableCell align="right">
        <ActionButton text="Ver Forms" onClick={goToUserForms} />
      </TableCell>
      <TableCell align="right">
        <Switch
          color="primary"
          edge="end"
          disabled={loading}
          checked={user.activo}
          onChange={handleChange(user.id)}
        />
      </TableCell>
      <TableCell align="right">
        <Switch
          color="secondary"
          edge="end"
          disabled={loading}
          checked={user.type === 'admin'}
          onChange={handleAdmin(user.id)}
        />
      </TableCell>
    </TableRow>
  )
}

export default withSnackbar(withRouter(UserItem))
