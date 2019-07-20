import React, { useState } from 'react'
import { withSnackbar } from 'notistack'
import Modal from '@material-ui/core/Modal'
import SendIcon from '@material-ui/icons/Send'

import FielSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import ActionButton from '../../Components/ActionButton/ActionButton'
import { endpoints, axios } from '../../utils'

const UserForm = ({
  open, enqueueSnackbar, onClose, fetchUsers
}) => {
  const [loading, setLoading] = useState(false)
  const [nombre, setNombre] = useState('')
  const [appat, setAppat] = useState('')
  const [apmat, setApmat] = useState('')
  const [ci, setCi] = useState('')
  const [cel, setCel] = useState('')
  const [correo, setCorreo] = useState('')
  const [dir, setDir] = useState('')

  const onSubmit = () => {
    setLoading(true)
    const data = {
      nombre, appat, apmat, ci, cel: Number.parseInt(cel, 10), correo, dir
    }
    axios.post(endpoints.newUser, data)
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
        onClose()
        fetchUsers()
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
    <Modal open={open} onClose={onClose}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1200 }}>
          <FielSet title="Registrar nuevo Transcriptor">
            <Simple width={4} value={nombre} text="Nombre(s):" setter={setNombre} autoFocus />
            <Simple width={4} value={appat} text="Apellido Paterno:" setter={setAppat} />
            <Simple width={4} value={apmat} text="Apellido Materno:" setter={setApmat} />
            <Simple width={4} value={ci} text="C.I.:" type="number" setter={setCi} />
            <Simple width={4} value={cel} text="Teléfono o Celular:" type="number" setter={setCel} />
            <Simple width={4} value={correo} text="Correo Electrónico:" type="email" setter={setCorreo} />
            <Simple width={4} value={dir} text="Dirección:" setter={setDir} />
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
        </div>
      </div>
    </Modal>
  )
}

export default withSnackbar(UserForm)
