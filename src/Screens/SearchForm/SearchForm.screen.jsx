import React, { Fragment, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Title from '../../Components/Title/Title'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'

import styles from './SearchForm.styles'

const SearchForm = ({ classes }) => {
  const [formNro, setFormNro] = useState('')
  console.log(classes)
  return (
    <Fragment>
      <Title title="Buscar Formulario" />
      <FieldSet title="Ingresa Datos del formulario">
        <Simple text="Nro de Formulario" value={formNro} setter={setFormNro} autoFocus width={4} />
      </FieldSet>
      <Paper className={classes.paper}>
        <p>some text</p>
      </Paper>
    </Fragment>
  )
}

export default withStyles(styles)(SearchForm)
