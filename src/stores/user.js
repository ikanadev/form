import { useState } from 'react'

export default () => {
  const [user, setUser] = useState({
    id: 0,
    name: '',
    type: '',
    email: '',
    appat: '',
    apmat: '',
    activo: false,
    cel: 0,
    ci: ''
  })

  const setUserData = (userData) => {
    setUser(userData)
  }

  return { user, setUserData }
}
