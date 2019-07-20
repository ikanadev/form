import React, { Fragment, useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { withSnackbar } from 'notistack'

import ActionButton from '../../Components/ActionButton/ActionButton'
import UsersList from './UsersList'
import Title from '../../Components/Title/Title'
import UserForm from './UserForm'
import { endpoints, axios } from '../../utils'

const Users = ({ enqueueSnackbar }) => {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const fetchUsers = () => {
    setLoading(true)
    axios.get(endpoints.usersList)
      .then(({ data: { content } }) => {
        setLoading(false)
        if (Array.isArray(content.users)) {
          setUsers(content.users)
        }
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
        enqueueSnackbar(err.message, { variant: 'error' })
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Fragment>
      <Title title="Administrar Cuentas" />
      <ActionButton
        text="Agregar Usuario"
        onClick={handleModal}
        iconLeft={<AddIcon />}
      />
      <UserForm
        open={showModal}
        onClose={handleModal}
        fetchUsers={fetchUsers}
      />
      <br />
      <br />
      <UsersList
        loading={loading}
        users={users}
        err={error}
        fetchUsers={fetchUsers}
      />
    </Fragment>
  )
}

export default withSnackbar(Users)
