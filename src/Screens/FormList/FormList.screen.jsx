import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

const formularios = [
  {
    id: 1,
    name: 'Cuestionario para estudiantes',
    route: 'form-est'
  }
]

const FormList = ({ history, match }) => {
  const navigate = url => () => {
    history.push(`${match.url}/${url}`)
  }
  return (
    <Fragment>
      <Typography color="primary" variant="h4">
        Formularios
      </Typography>
      <List style={{ width: '100%' }}>
        {
          formularios.map(form => (
            <ListItem key={form.id} button onClick={navigate(form.route)}>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary={form.name} />
            </ListItem>
          ))
        }
      </List>
    </Fragment>
  )
}

export default withRouter(FormList)
