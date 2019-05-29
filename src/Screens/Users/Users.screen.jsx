import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import { withSnackbar } from 'notistack'

import FielSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import ActionButton from '../../Components/ActionButton/ActionButton'
import { endpoints, headerConfig } from '../../utils'

const Users = ({ enqueueSnackbar }) => {
  const [loading, setLoading] = useState(false)
  const [nombre, setNombre] = useState('')
  const [appat, setAppat] = useState('')
  const [apmat, setApmat] = useState('')
  const [ci, setCi] = useState('')
  const [cel, setCel] = useState('')
  const [correo, setCorreo] = useState('')
  const [dir, setDir] = useState('')

  const handleValue = setter => (e) => {
    const { value } = e.target
    // console.log(value)
    setter(value)
  }

  const onSubmit = () => {
    setLoading(true)
    const data = {
      nombre, appat, apmat, ci, cel: Number.parseInt(cel, 10), correo, dir
    }
    console.log(headerConfig)
    axios.post(endpoints.newUser, data, headerConfig)
      .then((res) => {
        const { data: resData } = res
        if (resData.success) {
          enqueueSnackbar('Registro Exitoso...', { variant: 'success' })
        }
        setNombre('')
        setAppat('')
        setApmat('')
        setCi('')
        setCel('')
        setCorreo('')
        setDir('')
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        if (e.response && e.response.data.content) {
          enqueueSnackbar(e.response.data.content, { variant: 'error' })
          return
        }
        enqueueSnackbar(e.message, { variant: 'error' })
      })
  }

  return (
    <Fragment>
      <Typography color="primary" variant="h4">
        Administrar Cuentas
      </Typography>
      <FielSet title="Registrar nuevo Transcriptor">
        <Simple width={4} value={nombre} text="Nombre(s):" onChange={handleValue(setNombre)} autoFocus />
        <Simple width={4} value={appat} text="Apellido Paterno:" onChange={handleValue(setAppat)} />
        <Simple width={4} value={apmat} text="Apellido Materno:" onChange={handleValue(setApmat)} />
        <Simple width={4} value={ci} text="C.I.:" type="number" onChange={handleValue(setCi)} />
        <Simple width={4} value={cel} text="Teléfono:" type="number" onChange={handleValue(setCel)} />
        <Simple width={4} value={correo} text="Correo Electrónico:" type="email" onChange={handleValue(setCorreo)} />
        <Simple width={4} value={dir} text="Dirección:" onChange={handleValue(setDir)} />
        <div style={{ width: '100%' }}>
          <ActionButton
            loading={loading}
            text="Enviar"
            onClick={onSubmit}
            iconRight={<SendIcon />}
            full
          />
        </div>
      </FielSet>
    </Fragment>
  )
}

export default withSnackbar(Users)
