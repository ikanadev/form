import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import ArrowIcon from '@material-ui/icons/ArrowRightAlt'

import MultiOption from '../../Components/Form/MultiOption'
import q from '../../utils/questions/pro'

const Features = () => (
  <div>
    <Paper style={{ padding: 20 }}>
      <Typography variant="h3" color="primary">
        Novedades
      </Typography>
      <br />
      <Typography variant="h5">11 de Julio 2019</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText
            primary={`FORMULARIO PROFESIONALES:
              Transformadas algunas preguntas de selección simple a selección múltiple.
              `}
            secondary={`En la pregunta 'Actualmente trabaja:' (II. Situación Laboral) Seleccionar la primera respuesta,
              a pesar de que pueden estar 2 marcadas. Lo mismo en la pregunta 'Universidad donde se tituló' (I. Aspectos Generales)`}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText
            primary="¿Por qué no existe selección múltiple?"
            secondary={`La idea prescindir del uso del mouse,
              y con teclado se hace muy tedioso navegar entre las opciones.
              Recuerde que en preguntas de selección múltiple, sólo debe anotar el número de las respuestas seleccionadas.`}
          />
        </ListItem>
        <div style={{ marginLeft: 65 }}>
          <MultiOption title={q.pro27.title} options={q.pro27.options} onChange={() => {}} width={3} />
        </div>
      </List>
      <br />
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
