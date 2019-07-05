import React, { Fragment, useState } from 'react'
import { withSnackbar } from 'notistack'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

import Title from '../../Components/Title/Title'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import ActionButton from '../../Components/ActionButton/ActionButton'

import { axios, endpoints } from '../../utils'

import styles from './SearchForm.styles'

const options = {
  'form-est': { id: 1, name: 'Formulario de Estudiantes', endpoint: endpoints.searchFormEst }
  // 'form-doc': { id: 2, name: 'Formulario de Docentes', endpoint: endpoints.searchFormEst }
}

const SearchForm = ({ classes, enqueueSnackbar }) => {
  const [formNro, setFormNro] = useState('')
  const [formType, setFormType] = useState('form-est')
  const [studentData, setStudentData] = useState(null)
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSelect = (ev) => {
    const { value } = ev.target
    setFormType(value)
  }
  const handleSubmit = () => {
    setLoading(true)
    axios.get(options[formType].endpoint(formNro))
      .then(({ data: { content } }) => {
        setLoading(false)
        setStudentData(content.user)
        setFormData(content.form)
        enqueueSnackbar('Formulario encontrado', { variant: 'success' })
      })
      .catch(() => {
        setLoading(false)
        enqueueSnackbar('No se encontro el formulario', { variant: 'warning' })
      })
  }
  console.log(studentData, formData)
  return (
    <Fragment>
      <Title title="Buscar Formulario" />
      <FieldSet title="Ingresa Datos del formulario">
        <Simple text="Nro de Formulario" value={formNro} setter={setFormNro} autoFocus width={5} />
        <Grid item xl={5} lg={5} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
          <TextField
            variant="outlined"
            select
            fullWidth
            value={formType}
            onChange={handleSelect}
            helperText="Selecciona tipo de Formulario"
          >
            {
              Object.keys(options).map(option => (
                <MenuItem key={options[option].id} value={option}>
                  {options[option].name}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid item xl={2} lg={2} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
          <ActionButton text="Buscar" full onClick={handleSubmit} loading={loading} />
        </Grid>
      </FieldSet>
      <Paper className={classes.paper} elevation={8}>
        <p>TRABAJANDO EN ELLO</p>
      </Paper>
    </Fragment>
  )
}

export default withStyles(styles)(withSnackbar(SearchForm))
