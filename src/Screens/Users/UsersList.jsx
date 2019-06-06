import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

const UsersList = () => {
  const [users, setUsers] = useState([])
  return (
    <List
      subheader={<ListSubheader>Lista transcriptores</ListSubheader>}
    >
      {
        users.map(user => (
          user.name
        ))
      }
    </List>
  )
}

export default UsersList
