import React, { useEffect, useState, Fragment } from 'react'
import { withSnackbar } from 'notistack'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Title from '../../Components/Title/Title'
import ActionButton from '../../Components/ActionButton/ActionButton'
import { axios, endpoints, forms } from '../../utils'

const UserForms = ({
  location: { state: { userId } },
  history: { goBack, push },
  enqueueSnackbar
}) => {
  const [user, setUser] = useState(null)
  const [userForms, setUserForms] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(endpoints.getForms(userId))
      .then(({ data: { content } }) => {
        setLoading(false)
        setUser(content.user)
        setUserForms(content.forms)
      })
      .catch(() => {
        enqueueSnackbar('Hubo un error al cargar datos, volviendo', { variant: 'error' })
        goBack()
      })
  }, [])

  const viewForm = (formKey, nro) => () => {
    setLoading(true)
    axios.get(forms[formKey].endpoint(nro))
      .then(({ data: { content } }) => {
        setLoading(false)
        console.log(content.user)
        console.log(content.form)
        enqueueSnackbar('Formulario encontrado', { variant: 'success' })
        push(`/home/${formKey}`, { formData: content.form })
      })
      .catch(() => {
        setLoading(false)
        enqueueSnackbar('No se encontro el formulario', { variant: 'warning' })
      })
    // push('/home/search-form', { formKey, nro })
  }

  let content = null
  if (loading) {
    content = <CircularProgress size={30} />
  }
  if (!loading && user) {
    content = (
      <Fragment>
        <Typography variant="h6" color="primary">
          Nombre:
          <Typography variant="body1" color="textPrimary">
            {`${user.nombre} ${user.appat} ${user.apmat}`}
          </Typography>
        </Typography>
        <Typography variant="h6" color="primary">
          Correo:
          <Typography variant="body1" color="textPrimary">
            {user.correo}
          </Typography>
        </Typography>
        <br />
        <br />
        {
          Object.keys(userForms).map(userFormKey => (
            <Fragment key={userFormKey}>
              <br />
              <br />
              <Typography variant="h6" color="primary">{forms[userFormKey].name}</Typography>
              {
                userForms[userFormKey].length > 0
                  ? (
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Nro. Formulario</TableCell>
                          <TableCell>Fecha enviado</TableCell>
                          <TableCell>Ver</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          userForms[userFormKey].sort((a, b) => a.nro - b.nro).map(innerForm => (
                            <TableRow key={innerForm.id}>
                              <TableCell>{innerForm.nro}</TableCell>
                              <TableCell>{innerForm.updated_at}</TableCell>
                              <TableCell>
                                <ActionButton
                                  text="Ver"
                                  onClick={viewForm(userFormKey, innerForm.nro)}
                                />
                              </TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  )
                  : <Typography variant="h6">No se enviaron formularios.</Typography>
              }
            </Fragment>
          ))
        }
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Title title={`Formularios enviados (${user ? user.nombre : ''})`} />
      <Card elevation={8}>
        <div style={{ padding: 25 }}>
          { content }
        </div>
      </Card>

    </Fragment>
  )
}

export default withSnackbar(UserForms)
