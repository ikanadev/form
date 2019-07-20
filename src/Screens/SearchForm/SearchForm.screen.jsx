import React, { Fragment, useState, useEffect } from 'react'
import { withSnackbar } from 'notistack'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Title from '../../Components/Title/Title'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import ActionButton from '../../Components/ActionButton/ActionButton'

import { axios, forms } from '../../utils'
import docq from '../../utils/questions/doc'
import estq from '../../utils/questions/est'
import preq from '../../utils/questions/pre'
import proq from '../../utils/questions/pro'

import styles from './SearchForm.styles'

const questions = {
  'form-est': estq,
  'form-doc': docq,
  'form-pro': proq,
  'form-pre': preq
}

const SearchForm = ({ classes, enqueueSnackbar, location: { state } }) => {
  const [formNro, setFormNro] = useState('')
  const [formType, setFormType] = useState('form-est')
  const [studentData, setStudentData] = useState(null)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSelect = (ev) => {
    const { value } = ev.target
    setFormType(value)
  }
  const handleSubmit = () => {
    setLoading(true)
    axios.get(forms[formType].endpoint(formNro))
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
  useEffect(() => {
    if (state) {
      setFormNro(state.nro)
      setFormType(state.formKey)
      setLoading(true)
      axios.get(forms[state.formKey].endpoint(state.nro))
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
  }, [])
  let content = null
  if (loading) {
    content = <CircularProgress size={30} />
  }
  if (!loading && studentData && formData) {
    let i = 1
    content = (
      <Fragment>
        <Typography variant="h6" color="primary">
          Nombre:
          <Typography variant="body1" color="textPrimary">
            {`${studentData.nombre} ${studentData.appat} ${studentData.apmat}`}
          </Typography>
        </Typography>
        <Typography variant="h6" color="primary">
          Correo:
          <Typography variant="body1" color="textPrimary">
            {studentData.correo}
          </Typography>
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nro.</TableCell>
              <TableCell align="right">Pregunta</TableCell>
              <TableCell align="left">Respuestas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Object.keys(formData).map(formKey => (
                questions[formType][formKey]
                  ? (
                    <TableRow key={formKey} hover>
                      <TableCell>
                        <Typography variant="body1">
                          {i++}{/* eslint-disable-line */}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          {questions[formType][formKey].title}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1">
                          {formData[formKey] || '-----'}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                  : null
              ))
            }
          </TableBody>
        </Table>
      </Fragment>
    )
  }
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
              Object.keys(forms).map(option => (
                <MenuItem key={forms[option].id} value={option}>
                  {forms[option].name}
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
        <div style={{ padding: 15 }}>
          { content }
        </div>
      </Paper>
    </Fragment>
  )
}

export default withStyles(styles)(withSnackbar(SearchForm))
