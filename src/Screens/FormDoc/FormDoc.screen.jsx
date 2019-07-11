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
      <Title title="Cuestionario para Docentes" />
      <Fieldset title="En Progreso">
        <DobleInput
          width={12}
          value={val}
          setter={setVal}
          text1="Revista local y Nacional"
          text2="Revista indexada"
        />
        <Button onClick={reset}>
          reser
        </Button>
        <Button onClick={submit}>
          enfias
        </Button>
        <Typography>
          Estamos trabajando en ello :D
        </Typography>
      </Fieldset>
    </Fragment>
  )
}

export default FormDoc
