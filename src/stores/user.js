import { useState } from 'react'

export default () => {
  const [user, setUser] = useState({
    id: 0,
    name: '',
    type: '',
    email: ''
  })

  const setUserData = (id, name, type, email) => {
    setUser({
      id, name, type, email
    })
  }

  return { user, setUserData }
}
