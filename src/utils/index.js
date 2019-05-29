const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://localhost:4000/api/'

const endpoints = {
  login: `${endpoint}login`,
  formEst: `${endpoint}form/form-est`,
  newUser: `${endpoint}user`
}

const headerConfig = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export { checkAuth, endpoints, headerConfig }
