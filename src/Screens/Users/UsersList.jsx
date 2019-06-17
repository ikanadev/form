import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import PersonIcon from '@material-ui/icons/Person'

import { axios, endpoints } from '../../utils'

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchUsers = () => {
    setLoading(true)
    axios.get(endpoints.usersList)
      .then(({ data: { content } }) => {
        setLoading(false)
        if (Array.isArray(content.users)) {
          setUsers(content.users)
        }
      })
      .catch(err => console.log(err.request))
  }
  const handleChange = id => () => {
    axios.post(endpoints.handleActive, { id })
      .then(() => {
        fetchUsers()
      })
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <Card>
      <List
        subheader={<ListSubheader>Lista transcriptores</ListSubheader>}
      >
        {
          users.length === 0
            ? (
              <ListItem>
                <ListItemText>
                  {
                    loading
                      ? 'Cargando'
                      : 'No hay usuarios registrados'
                  }
                </ListItemText>
              </ListItem>
            )
            : users.map(user => (
              <ListItem key={user.id}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText>
                  {`${user.appat} ${user.apmat} ${user.nombre}`}
                </ListItemText>
                <ListItemText>
                  {user.ci}
                </ListItemText>
                <ListItemText>
                  {user.correo}
                </ListItemText>
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={handleChange(user.id)}
                    checked={user.activo}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))
        }
      </List>
    </Card>
  )
}

export default UsersList
