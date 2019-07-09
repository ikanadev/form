import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

import Title from '../../Components/Title/Title'
import Fieldset from '../../Components/FieldSet/FieldSet'

const FormDoc = () => (
  <Fragment>
    <Title title="Cuestionario para Docentes" />
    <Fieldset title="En Progreso">
      <Typography>
        Estamos trabajando en ello :D
      </Typography>
    </Fieldset>
  </Fragment>
)

export default FormDoc
