import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import ArrowIcon from '@material-ui/icons/ArrowRightAlt'

const Features = () => (
  <div>
    <Paper style={{ padding: 20 }}>
      <Typography variant="h3" color="primary">
        Novedades
      </Typography>
      <Typography variant="h5">10 de Julio 2019</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText
            primary="Agregado botón para verficar existencia de un formulario por Nro del mismo."
            secondary="Si el nro de formulario existe, se muestra un mensaje de alerta."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText
            primary={`Agregado el formulario de Profesionales en etapa de Pruebas.
              En esta etapa, intentar en lo posible encontrar errores en el formulario.`}
            secondary="Probar la funcionalidad del mismo, cualquier novedad, informar a la Dra. (Pronto habrá opción de enviar sugerencias ;D )"
          />
        </ListItem>
      </List>
    </Paper>
  </div>
)

export default Features
