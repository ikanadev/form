import React, { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Title from '../../Components/Title/Title'
import Fieldset from '../../Components/FieldSet/FieldSet'
import DobleInput from '../../Components/Form/DobleInput'

const FormDoc = () => {
  const [val, setVal] = useState('')
  const reset = () => setVal('')
  const submit = () => console.log(val)
  return (
    <Fragment>
      <Title title="Cuestionario para Docentes (en Progreso)" />
    </Fragment>
  )
}

export default FormDoc
