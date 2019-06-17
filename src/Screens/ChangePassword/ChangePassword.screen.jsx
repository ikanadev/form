import React, { useState } from 'react'
import { withSnackbar } from 'notistack'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Title from '../../Components/Title/Title'
import Simple from '../../Components/Form/Simple'
import styles from './ChangePassword.styles'
import ActionButton from '../../Components/ActionButton/ActionButton'

import { axios, endpoints } from '../../utils'

const ChangePassword = ({ classes, enqueueSnackbar }) => {
  const [old, setOld] = useState('')
  const [newP, setNewP] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (newP !== confirm) {
      enqueueSnackbar('Los passwords no coinciden', { variant: 'warning' })
      return
    }
    setLoading(true)
    const data = {
      new: newP,
      old
    }
    axios.put(endpoints.newUser, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Password Actualizado', { variant: 'success' })
      })
      .catch((err) => {
        setLoading(false)
        if (err.response && err.response.data) {
          const { data: respData } = err.response
          enqueueSnackbar(respData.content, { variant: 'warning' })
        } else {
          enqueueSnackbar(err.message, { variant: 'error' })
        }
      })
  }
  return (
    <div className={classes.cont}>
      <Title title="Cambiar Password" />
      <Paper className={classes.paper}>
        <Grid container>
          <Simple width={4} value={old} text="Anterior Password" setter={setOld} autoFocus />
          <Simple width={4} value={newP} text="Nuevo Password" type="password" setter={setNewP} />
          <Simple width={4} value={confirm} text="Confirmar Nuevo Password" type="password" setter={setConfirm} />
        </Grid>
        <ActionButton
          text="Guardar"
          loading={loading}
          full
          onClick={handleSubmit}
        />
      </Paper>
    </div>
  )
}

export default withSnackbar(withStyles(styles)(ChangePassword))
