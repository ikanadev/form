import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import UserItem from './UserItem'

const UsersList = ({
  loading, users, err, fetchUsers
}) => {
  let content
  if (loading) {
    content = <CircularProgress size={35} />
  }
  if (err) {
    content = <Typography color="error">Hubo un error obteniendo usuarios</Typography>
  }
  if (!loading && !err) {
    if (users.length === 0) {
      content = <Typography variant="h5">No hay usuarios</Typography>
    } else {
      content = (
        <Fragment>
          <Typography>Lista de usuarios</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre:</TableCell>
                <TableCell align="right">Correo:</TableCell>
                <TableCell align="right">Celular:</TableCell>
                <TableCell align="right">C.I.:</TableCell>
                <TableCell align="right">Actions:</TableCell>
                <TableCell align="right">Activo:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { users.map(user => (<UserItem key={user.id} user={user} fetchUsers={fetchUsers} />)) }
            </TableBody>
          </Table>
        </Fragment>
      )
    }
  }
  return (
    <Card elevation={8}>
      <div style={{ padding: 25 }}>
        { content }
      </div>
    </Card>
  )
}

export default UsersList
/**
 * <Switch
    edge="end"
    onChange={handleChange(user.id)}
    checked={user.activo}
  />
 */
