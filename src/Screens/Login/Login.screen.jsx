import React, { useState, useEffect } from 'react'
import { withSnackbar } from 'notistack'
import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SendIcon from '@material-ui/icons/Send'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import EmailIcon from '@material-ui/icons/Email'
import { useStore } from 'outstated'
import userState from '../../stores/user'

import ActionButton from '../../Components/ActionButton/ActionButton'
import styles from './Login.styles'
import { endpoints, checkAuth, axios } from '../../utils'

const Login = ({ classes, enqueueSnackbar, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { setUserData } = useStore(userState)

  useEffect(() => {
    if (checkAuth()) {
      history.push('/')
    }
  }, [])
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    const credentials = {
      correo: email,
      password
    }
    axios.post(endpoints.login, credentials)
      .then((res) => {
        const { content } = res.data
        setUserData(content.user)
        setLoading(false)
        enqueueSnackbar('Login correcto.', { variant: 'success' })
        localStorage.setItem('token', content.token)
        localStorage.setItem('type', content.type)
        history.push('/')
      })
      .catch((err) => {
        setLoading(false)
        const { response } = err
        if (!response.data) {
          enqueueSnackbar('No se recibio respuesta del servidor', { variant: 'error' })
        }
        const variantSnack = response.status === 400 ? 'warning' : 'error'
        enqueueSnackbar(response.data.content, { variant: variantSnack })
      })
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <form>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end" justify="center">
              <Grid item xs={1}>
                <EmailIcon />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Correo elentrónico"
                  fullWidth
                  onChange={changeEmail}
                  value={email}
                  type="email"
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={1}>
                <VpnKeyIcon />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Contraseña"
                  fullWidth
                  onChange={changePassword}
                  value={password}
                  type="password"
                />
              </Grid>
            </Grid>
          </div>

          <ActionButton
            onClick={handleSubmit}
            iconRight={<SendIcon />}
            text="Enviar"
            typeButton="submit"
            loading={loading}
            full
          />
        </form>
      </Paper>
    </div>
  )
}

export default withSnackbar(withStyles(styles)(Login))
