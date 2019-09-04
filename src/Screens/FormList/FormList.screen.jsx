import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlinedOutlined'
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
    name: 'Cuestionario para Profesionales del Área de Informática y Sistemas',
    route: 'form-pro'
  },
  {
    id: 3,
    name: 'Cuestionario para Estudiantes del Curso Pre-Universitario',
    route: 'form-pre'
  },
  {
    id: 4,
    name: 'Cuestionario para Docentes de la Carrera de Informática',
    route: 'form-doc'
  },
  {
    id: 5,
    name: 'Cuestionario para Instituciones',
    route: 'form-ins'
  }
]

const FormList = ({ history, match }) => {
  const navigate = url => () => {
    history.push(`${match.url}/${url}`, { formData: {} })
  }
  const goToReport = form => () => {
    history.push(`${match.url}/report`, { form })
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
                <ListItemSecondaryAction>
                  <IconButton onClick={goToReport(form)}>
                    <InsertChartIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List>
      </Paper>
    </Fragment>
  )
}

export default withRouter(FormList)
