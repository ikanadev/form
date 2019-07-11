import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import Paper from '@material-ui/core/Paper'

import Title from '../../Components/Title/Title'

const formularios = [
  {
    id: 1,
    name: 'Cuestionario para Estudiantes',
    route: 'form-est'
  },
  {
    id: 2,
    name: 'Cuestionario para Profesionales',
    route: 'form-pro'
  },
  {
    id: 3,
    name: 'Cuestionario para Estudiantes Prefas',
    route: 'form-pre'
  },
  {
    id: 4,
    name: 'Cuestionario para Docentes',
    route: 'form-doc'
  }
]

const FormList = ({ history, match }) => {
  const navigate = url => () => {
    history.push(`${match.url}/${url}`)
  }
  return (
    <Fragment>
      <Title title="Formularios" />
      <Paper>
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
      </Paper>
    </Fragment>
  )
}

export default withRouter(FormList)
